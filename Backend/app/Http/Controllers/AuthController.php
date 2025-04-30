<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
    
    public function Login(Request $request) {
        $fields = $request->validate([
                'email'=>'required|email',
                'password'=>'required'
        ]
        
    );
    $user = User::where('email',$fields['email'])->first();
    

    if(!$user ||  !Hash::check($fields['password'],$user->password) ){
        return response()->json(["status"=>404,"message "=>"user not exist"]);
    }
    

    $token = $user->createToken('DocuSafe')->plainTextToken;


   return response()->json([
    'access_token'=>$token,
    'token_type'=>'Bearer',
    'user'=> $user
   ]);
    
 }


 public function Logout (Request $request){

    $request->user()->tokens()->delete();
    
    return response()->json(["message"=>"logout with success"]);
 }

 public function Register (Request $request){

    $fields = $request->validate([
        'name'=>'required',
        'email'=>'required',
        'password'=>'required'

    ]);

    User::create($fields);

    return response()->json(["message"=>"added successfuly"]);

 }


}
