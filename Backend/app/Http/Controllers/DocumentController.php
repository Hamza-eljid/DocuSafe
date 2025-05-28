<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $id =$request->user()->id;
        $document = Document::where('user_id',$id)->get();
        return response()->json($document);

    }

  
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'document_name'=>'required',
            'description'=>'required',
            'file'=>'required',
            'remind_me_befor'=>'required',
            'expiring_date'=>'required'
        ]);

       
        
       $storagePath = $request->file('file')->store('documents', 'public'); 
            // $storagePath will be something like "documents/NDL8h2ZhoManfB350qmI8EUXVLQGba0RXIjIxUUH.pdf"
        $fields['file_path'] = $storagePath;


        $fields['user_id'] = $request->user()->id;

        $fields['valid'] = true;
        

        $doc =Document::create($fields);
                return response()->json($doc);


        return response()->json(["message"=>"created successfuly"]);


    }

  
   
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $fields = $request->validate([
            'id'=>'required',
            'document_name'=>'nullable',
            'description'=>'nullable',
            'file'=>'nullable',
            'remind_me_befor'=>'nullable',
            'expiring_date'=>'nullable'
        ]);
        
        $document = Document::find($request->id);
        
        $user_id = $request->user()->id;
        
        if($user_id != $document->user_id ){
            return response()->json([
                "message" =>  "operation denied you are not allowed to do this operation"
            ]);
        };
        

        if(array_key_exists('document_name', $fields)){
            $document->document_name = $fields['document_name'];
        }

        if(array_key_exists('description', $fields)){
            $document->description = $fields['description'];
        }

        // if(array_key_exists('file', $fields)){
        //     $storagePath = $request->file('file')->store('documents', 'public'); 
        //     // $storagePath will be something like "documents/NDL8h2ZhoManfB350qmI8EUXVLQGba0RXIjIxUUH.pdf"
        //     $document->file_path = $storagePath;
        // }

        if(array_key_exists('remind_me_befor', $fields)){
            $document->remind_me_befor = $fields['remind_me_befor'];
        }

        if(array_key_exists('expiring_date', $fields)){
            $document->expiring_date = $fields['expiring_date'];
        }

        $document->save();

        return response()->json($document);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        

        $res = Document::destroy($id);
        return response()->json([
            "ress"=>"deleted with succsess",
            "data "=>$res
        ]);
    }

    public function upload (Request $request){
        $id = $request->id;
        $document = Document::find($id);
        // if(Storage::disk('local')->exists('documents/');

        //  Storage::download($document->file_path);

        // $path = str_replace('/storage/', '', $document->file_path); 
        return Storage::disk('public')->download($document->file_path);

        // return response()->json($document);
    }

    public function get_one(Request $request){
        $id =$request->id;

        $document = Document::find($id);
        return response()->json($document);

    }
}
