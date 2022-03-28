<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Mail\Mailable;
use App\Mail\registro;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    function register(Request $req)
    {



        //    $name = $req->input('nombre');
        //     $email = $req->input('email');
        //   $password = Hash::make($req->input('password')); // Mapeamos la contraseña

        $validator = Validator::make($req->all(), [
            'name' => 'required|max:191',
            'email' =>  'required|max:191|email|unique:users,email',
            'password' =>  'required|min:4'
        ]);

        if ($validator->fails()) {

            return response()->json([

                'validation_errors' => $validator->messages(),
            ]);
        } else {

            $user = User::create([
                'name' => $req->name,
                'email' =>  $req->email,
                'password' => Hash::make($req->password),


            ]);
            $token =   $user->createToken($user->email . '_Token')->plainTextToken;
            return response()->json([
                'status' => 200,
                'username' => $user->name,
                'toke' => $token,
                'message' => 'Registro correcto',
                $us = ([
                    'name' => $req->name,
                    'email' =>  $req->email,
                    'password' => $req->password,
                    'created_at' => $user->created_at,
                ]),
               Mail::to($user->email)->send(new registro($us))
            ]);
        }


    }
    function login(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'email' =>  'required|max:191|email',
            'password' =>  'required|min:4'
        ]);



        if ($validator->fails()) {

            return response()->json([

                'validation_errors' => $validator->messages(),
            ]);
        } else {

            $user = User::where('email', $req->email)->first();

            if (!$user || !Hash::check($req->password, $user->password)) {

                return response()->json([
                    'status' => 401,
                    'message' => "Invalido"

                ]);
            } else {
                $token =   $user->createToken($user->email . '_Token')->plainTextToken;

                return response()->json([
                    'status' => 200,
                    'username' => $user->name,
                    'toke' => $token,
                    'message' => 'Login correcto',

                ]);
            }
        }
    }

function usuario(Request $req){

    $user = User::where('email', $req->email)->first();
    if(!$user){
    return response()->json([
        'status' => 402,
        'email' => 'Email incorrecto',
        'password'=>'',
        

    ]);
}

if (!Hash::check($req->password, $user->password)) {

    return response()->json([
        'status' => 402,
        'password' => 'Contraseña incorrecto',
        'email' =>''
    ]);


}

}



}
