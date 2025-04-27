<?php

namespace Database\Seeders;

use App\Models\Document;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Documentseed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Document::create([
        'document_name'=>'first seeder test',
        'description'=>'this is my first document ',
        'user_id'=>1,
        'file_path'=>'sorage/public/test_file.pdf',
        'remind_me_befor'=>date('d-m-y'),
        'valid'=>false
        ]);
    }
}
