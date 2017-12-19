<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;

class PostController extends AdminController
{
    public function index() {
        return view('admin.posts.index');
    }

    public function postAttribute(Request $request) {
        $posts = Post::all();

        return $this->datatable($posts);
    }

    public function datatable($posts)
    {
        return DataTables::of($posts)
            ->editColumn('link', function ($brand) {
                if (strpos('http', $brand->link) !== false) {
                    $url = '<a href="' . $brand->link . '" target="_blank">'.$brand->link.'</a>';
                } else {
                    $url = '<a href="http://' . $brand->link . '" target="_blank">' . $brand->link . '</a>';
                }

                return $url;
            })->editColumn('status', function ($brand) {
                if ($brand->status == config('const.ACTIVE')) {
                    $text = '<button data-brand-id="' . $brand->id . '" class="btn btn-success status-btn" data-status="1" type="button">HIỂN THỊ</button>';
                } else {
                    $text = '<button data-brand-id="' . $brand->id . '" class="btn btn-danger status-btn" data-status="0" type="button">KHÔNG HIỂN THỊ</button>';
                }

                return $text;
            })->editColumn('image', function ($brand) {
                $image = '<img src="'.$brand->image.'" style="width: 100%">';

                $image = '<div style="width: 100px">'.$image.'</div>';

                return $image;
            })->addColumn('action', function ($brand) {
                $url = '<a type="button" class="btn blue btn-outline" href="/admin/brands/'.$brand->id.'">Sửa</a><a href="/admin/brands/delete/'.$brand->id.'" type="button" class="btn red btn-outline delete-btn">Xóa</a>';

                return $url;
            })->addColumn('ck', function ($brand) {
                $url = '<a data-brand-id="'.$brand->id.'" type="button" class="btn blue ck-btn">Xem CK</a>';

                return $url;
            })->rawColumns(['link', 'image', 'action', 'status', 'ck'])
            ->make(true);
    }
}
