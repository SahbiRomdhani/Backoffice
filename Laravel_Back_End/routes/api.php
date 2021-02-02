<?php


/** Auth Route  */

Route::group([

    'middleware' => 'api',
    'prefix' => 'authUser'

], function ($router) {

  Route::post('/loginUser', 'UserController@login');
  Route::post('/signupUser', 'UserController@signup');


});

Route::group([

  'middleware' => 'api',
  'prefix' => 'auth'

], function ($router) {
Route::post('/login', 'AuthController@login');
Route::post('/signup', 'AuthController@signup');
Route::get('/allusers', 'AuthController@allusers');
Route::post('logout', 'AuthController@logout');
Route::post('refresh', 'AuthController@refresh');
Route::post('me', 'AuthController@me');


});


/** Produit Route */
Route::resource('/produit','ProduitController');

