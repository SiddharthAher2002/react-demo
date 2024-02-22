<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name',20)->nullable(false)->comment('Customer first name');
            $table->string('last_name',20)->nullable(false)->comment('Customer last name');
            $table->string('contact',10)->nullable(false)->comment('Customer contact number');
            $table->string('email',30)->nullable(false)->comment('Customer email');
            $table->string('password',20)->nullable(false)->comment('Customer account password');
            $table->enum('is_active',[1,0])->default(1)->comment('Active status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
