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

Route::get('/', function () {
    return view('home');
});

Route::post('/webhooks/github/deploy', 'GitHubDeployController@deploy');

Route::get('/pages/{page}', function($page) {
  switch (mb_strtolower($page)) {
    case "home":
      return view('pages.home');
    break;
    case "about":
      return view('pages.about');
    break;
    case "contact":
      return view('pages.contact');
    break;
    case "projects":
      return view('pages.projects');
    break;
    case "services":
      return view('pages.services');
    break;
  }
});
