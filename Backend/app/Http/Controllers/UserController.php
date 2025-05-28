<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = User::find($request->id);
        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $fields = $request->validate([
            'name'=>'required',
            'email'=>'required',
            'password'=>'required',
            'file'=>'nullable',
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

        if(array_key_exists('file', $fields)){
            $filePath = $request->file('file')->store('users', 'public');
            $filePath = Storage::url($filePath);
             $user->img_path = $filePath;
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
