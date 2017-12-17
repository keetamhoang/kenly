<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends AdminController
{
    public function index() {
        return view('admin.posts.index');
    }
}
