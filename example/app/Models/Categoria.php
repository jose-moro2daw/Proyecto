<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'slug',
        'descripcion',
        'created_at',
        'updated_at'
    ];

   

    public function products(){
   
        return $this-> hasMany(Product::class,'categoria_Id'); //Todos los producto de esa categoria





    }
}
