<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Document extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'document_name',
        'description',
        'user_id',
        'file_path',
        'remind_me_befor',
        'valid'
    ];
}
