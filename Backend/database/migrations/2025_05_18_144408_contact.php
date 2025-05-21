<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
         Schema::create('Contact', function (Blueprint $table) {
            $table->string('gest_name');
            $table->string('gest_email');
            $table->string('gest_description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
         Schema::table('documents', function (Blueprint $table) {
             Schema::dropIfExists('Contact');
        });
    }
};
