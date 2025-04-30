<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $fields = $request->validate([
            'name'=>'nullable',
            'email'=>'nullable',
            'password'=>'nullable',
            'img_path'=>'nullable',
            'whatsapp_number'=>'nullable',
            'phone_number'=>'nullable',
        ]);



        $user_id = $request->user()->id;
        $user = User::find($user_id);

        if(array_key_exists('name', $fields)){
            $user->name = $fields['name'];
        }

        if(array_key_exists('email', $fields)){
            $user->email = $fields['email'];
        }

        if(array_key_exists('password', $fields)){
            $user->password = $fields['password'];
        }

        if(array_key_exists('img_path', $fields)){
            $user->img_path = $fields['img_path'];
        }

        if(array_key_exists('whatsapp_number', $fields)){
            $user->whatsapp_number = $fields['whatsapp_number'];
        }

        if(array_key_exists('phone_number', $fields)){
            $user->phone_number = $fields['phone_number'];
        }

        $user->save();

       

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $user_id = $request->user()->id;

        User::destroy($user_id);

        return response()->json(["message"=>"deleted"]);
        
    }
}
