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

    Route::get('users', 'Backend\UserController@index');
    Route::get('userAttribute.data', 'Backend\UserController@userAttribute');
    Route::get('users/{id}', 'Backend\UserController@edit');
    Route::post('users/update', 'Backend\UserController@update');

    Route::get('posts', 'Backend\PostController@index');
    Route::get('posts/add', 'Backend\PostController@create');
    Route::get('posts/{id}', 'Backend\PostController@edit');
    Route::post('posts/store', 'Backend\PostController@store');
    Route::post('posts/update', 'Backend\PostController@update');
    Route::get('postAttribute.data', 'Backend\PostController@postAttribute');

    Route::get('categories', 'Backend\CategoryController@index');
    Route::get('categories/add', 'Backend\CategoryController@create');
    Route::get('categories/{id}', 'Backend\CategoryController@edit');
    Route::post('categories/store', 'Backend\CategoryController@store');
    Route::post('categories/update', 'Backend\CategoryController@update');
    Route::get('categoryAttribute.data', 'Backend\CategoryController@categoryAttribute');



    Route::get('users', 'Backend\UserController@index');
    Route::get('users/add', 'Backend\UserController@create');

    Route::get('lien-he', 'Backend\HomeController@lienHe');
    Route::get('lienHeAttribute.data', 'Backend\HomeController@lienHeAttribute');
});

Route::get('/', 'Frontend\HomeController@index');
//Route::get('/', 'Frontend\HomeController@xxx');

Route::get('dang-nhap', 'Backend\AuthController@loginView');
Route::post('login', 'Backend\AuthController@login');
Route::get('dang-ky', 'Backend\AuthController@registerView');
Route::post('register', 'Backend\AuthController@register');
Route::get('logout', 'Backend\AuthController@logout');

Route::get('dich-vu', 'Frontend\HomeController@dichVu');
Route::get('du-an', 'Frontend\HomeController@duAn');
Route::get('gioi-thieu', 'Frontend\HomeController@gioiThieu');
Route::get('tin-tuc', 'Frontend\HomeController@tinTuc');
Route::get('lien-he', 'Frontend\HomeController@lienHe');
Route::get('phong-cach-song', 'Frontend\HomeController@phongCachSong');
Route::get('cai-tao-nha-cu', 'Frontend\HomeController@caiTaoNhaCu');
Route::get('quy-trinh-thiet-ke', 'Frontend\HomeController@quyTrinhThietKe');
Route::get('quy-trinh-thi-cong', 'Frontend\HomeController@quyTrinhThiCong');

Route::get('du-an/{slug}', 'Frontend\HomeController@getPostsByCategory');
Route::get('chi-tiet/{slug}-{id}', 'Frontend\HomeController@detailPost')
    ->where(['slug' => '[a-zA-Z0-9-]+', 'id' => '[0-9-]+']);

Route::get('dich-vu/{slug}-{id}', 'Frontend\HomeController@detailPost')
    ->where(['slug' => '[a-zA-Z0-9-]+', 'id' => '[0-9-]+']);

Route::get('test', 'Frontend\HomeController@test');

Route::post('gui-lien-he', 'Frontend\HomeController@guiLienHe');