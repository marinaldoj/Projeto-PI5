<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookController;

Route::group(['prefix' => 'book'], function () {
    Route::post('create', [BookController::class, 'store']);
    Route::get('index', [BookController::class, 'index']);
    Route::get('show/{id}', [BookController::class, 'show']);
    Route::put('update/{id}', [BookController::class, 'update']);
    Route::delete('delete/{id}', [BookController::class, 'destroy']);
});
