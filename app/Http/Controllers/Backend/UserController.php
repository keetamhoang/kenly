<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends AdminController
{
    public function index() {
        return view('admin.users.index');
    }

    public function create() {
        return view('admin.users.add');
    }
}
