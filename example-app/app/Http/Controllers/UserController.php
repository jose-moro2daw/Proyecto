<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
 
class UserController extends Controller
{
    function register(Request $req)
    {
        $name = $req->input('nombre');
        $email = $req->input('email');
        $password = Hash::make($req->input('password')); // Mapeamos la contraseña
        DB::table('usuario')->insert([
            'nombre' =>   $name,
            'email' =>  $email ,
            'password'=> $password
          ]);
    }
    function login(Request $req)
    {
        $email =  $req->input('email');
        $password = $req->input('password');
 
        $user = DB::table('usuario')->where('email',$email)->first();
        if(!Hash::check($password, $user->password)) //Comparamos contraseña
        {
            echo "Not Matched";
        }
        else
        {
            //$user = DB::table('users')->where('email',$email)->first();
           echo $user->email;
        }
    }
}