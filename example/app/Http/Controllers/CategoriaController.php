<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Mail\Mailable;
use App\Mail\registro;
use App\Models\Categoria;
use Illuminate\Support\Facades\Mail;

class CategoriaController extends Controller
{
    function categorias()
    {
    
            $cat = Categoria::all();
                return response()->json([
                    'status' => 200,
                    'categoria' => $cat ,
                    'message' => 'Caregoria correcta',

                ]);
            
        }
    }




