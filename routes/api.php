<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;


Route::get('/videos', [ApiController::class, 'index']);
