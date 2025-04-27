<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

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
            'remind_me_befor'=>'required'
        ]);

        $filePath = $request->file('file')->store('documents', 'public');

        $fields['user_id'] = $request->user()->id;

        $fields['valid'] = true;
        $fields['file_path'] = $filePath ;



    



      

        Document::create($fields);

        return response()->json(["message"=>"created successfuly"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        //
    }
}
