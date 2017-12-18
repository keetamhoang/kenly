<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index() {
        return view('frontend/index');
    }

    public function dichVu() {
        return view('frontend.dich_vu');
    }
}
