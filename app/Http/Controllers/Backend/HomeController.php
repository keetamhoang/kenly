<?php

namespace App\Http\Controllers\Backend;

use App\Models\Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;

class HomeController extends AdminController
{
    public function index() {
        return view('admin.index');
    }

    public function lienHe() {
        return view('admin.lien_he');
    }

    public function lienHeAttribute(Request $request) {
        $posts = Mail::all();

        return $this->datatable($posts);
    }

    public function datatable($posts)
    {
        return DataTables::of($posts)
            ->make(true);
    }
}
