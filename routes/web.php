<?php

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

Route::group(['prefix' => 'admin',
    'middleware' => ['admin']
], function () {
    Route::get('/', 'Backend\HomeController@index');
    Route::get('posts', 'Backend\PostController@index');
    Route::get('posts/add', 'Backend\PostController@create');
    Route::get('posts/{id}', 'Backend\PostController@edit');
    Route::post('posts/store', 'Backend\PostController@store');
    Route::get('postAttribute.data', 'Backend\PostController@postAttribute');

    Route::get('categories', 'Backend\CategoryController@index');
    Route::get('categories/add', 'Backend\CategoryController@create');
    Route::get('categories/{id}', 'Backend\CategoryController@edit');
    Route::post('categories/store', 'Backend\CategoryController@store');
    Route::get('categoryAttribute.data', 'Backend\CategoryController@categoryAttribute');



    Route::get('users', 'Backend\UserController@index');
    Route::get('users/add', 'Backend\UserController@create');
});

Route::get('/', 'Frontend\HomeController@index');
Route::get('dang-nhap', 'Backend\AuthController@loginView');
Route::post('login', 'Backend\AuthController@login');
Route::get('dang-ky', 'Backend\AuthController@registerView');
Route::post('register', 'Backend\AuthController@register');
Route::get('logout', 'Backend\AuthController@logout');

Route::get('dich-vu', 'Frontend\HomeController@dichVu');