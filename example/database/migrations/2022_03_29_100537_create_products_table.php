<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',50);
            $table->string('slug',50);//Minuscula y con guiones y sin espacio
            $table->unsignedBigInteger('categoria_id');
            $table->bigInteger("cantidad")-> unsigned()->default(0);
            $table->decimal("precio_actual",12,2)->default(0);
            $table->decimal("precio_anterio",12,2)->default(0);
            $table->integer("porcentaje_desc")-> unsigned()->default(0);
            $table->text("descripcion_corta");
            $table->text("descripcion_larga");
            $table->text("datos_de_interes");
            $table->unsignedBigInteger('visitas')->default(0);
            $table->unsignedBigInteger('ventas')->default(0);
            $table->timestamps();
            $table->string('estado',50, ['nuevo', 'antiguo'])->default("nuevo");
            $table->boolean("activo")->default(false);
            $table->boolean("importante")->default(false);

            $table->foreign('categoria_id')->references('id')->on('categorias');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
