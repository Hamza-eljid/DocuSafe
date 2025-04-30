<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $document = Document::all();
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

        $filePath = $request->file('file')->store('documents', 'public');
        $filePath = Storage::url($filePath);
        $fields['file_path'] = $filePath ;


        $fields['user_id'] = $request->user()->id;

        $fields['valid'] = true;
        

        Document::create($fields);

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

        if(array_key_exists('file', $fields)){
            $oldfile = str_replace('/storage/', '', parse_url($document->file_url, PHP_URL_PATH));
            Storage::disk('public')->delete($oldfile);
            $filePath = $request->file('file')->store('documents', 'public');
            $filePath = Storage::url($filePath);
            $document->file_path = $filePath;
        }

        if(array_key_exists('remind_me_befor', $fields)){
            $document->remind_me_befor = $fields['remind_me_befor'];
        }

        if(array_key_exists('expiring_date', $fields)){
            $document->expiring_date = $fields['expiring_date'];
        }

        return response()->json($document);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $document = Document::find($request->id);
        
        $user_id = $request->user()->id;
        
        if($user_id != $document->user_id ){
            return response()->json([
                "message" =>  "operation denied you are not allowed to do this operation"
            ]);
        };
        $res = Document::destroy($request->id);
        return response()->json($res);
    }
}
