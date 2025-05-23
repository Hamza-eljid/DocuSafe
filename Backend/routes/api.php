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

Route::middleware('auth:sanctum')->post('/user',[UserController::class,'index']);

Route::middleware('auth:sanctum')->put('/user',[UserController::class,'update']);

Route::middleware('auth:sanctum')->delete('/user',[UserController::class,'destroy']);

Route::post('/contact',function(Request $request){
    $user_attempt = DB::table('Contact')->where("gest_email",$request->email)->count();

    if($user_attempt >= 2){
         return response()->json([
            "message"=>"can't send an other message the limit is 2"
         ]) ;
    }
    DB::table('Contact')->insert([
        "gest_name" => $request->nom,
        "gest_email" => $request->email,
        "gest_description" => $request->description
    ]);

    if( $user_attempt == 0){
             return response()->json([
        "message"=>"message sent with succsess you still have 1 attempt rest"
        
        ]) ;
    }else{
         return response()->json([
                "message"=>"message sent with succsess you dont have any attempt lift"
        ]) ;
    }

   
});