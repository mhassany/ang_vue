<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

  Route::post('/api/todo',           'TodoController@save');
   Route::get('/api/todo',           'TodoController@todos');
   Route::get('/api/todo/completed', 'TodoController@completed');
   Route::put('/api/todo/{id}',      'TodoController@update');
Route::delete('/api/todo/{id}',      'TodoController@delete');
