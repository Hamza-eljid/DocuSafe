<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/u',function(){
    $all = DB::table('users')->get();
    return response()->json($all);
});

Route::post('/login', [AuthController::class,'login']);

Route::post('/register', [AuthController::class,'Register']);

Route::middleware('auth:sanctum')->post('/logout', [AuthController::class,'logout']);

Route::middleware('auth:sanctum')->get('/documents',[DocumentController::class,'index']);

Route::middleware('auth:sanctum')->post('/documents',[DocumentController::class,'store']);

Route::middleware('auth:sanctum')->put('/documents',[DocumentController::class,'update']);

Route::middleware('auth:sanctum')->delete('/documents',[DocumentController::class,'destroy']);

Route::middleware('auth:sanctum')->put('/user',[UserController::class,'update']);

Route::middleware('auth:sanctum')->delete('/user',[UserController::class,'destroy']);