<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\AuthResource;

class AuthController extends Controller
{
    public function Login(Request $request){
        return new AuthResource($request);
    }
}
