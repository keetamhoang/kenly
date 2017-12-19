<?php

namespace App\Http\Controllers\Backend;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
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
            ->editColumn('status', function ($brand) {
                if ($brand->status == config('const.ACTIVE')) {
                    $text = '<button data-brand-id="' . $brand->id . '" class="btn btn-success status-btn" data-status="1" type="button">HIỂN THỊ</button>';
                } else {
                    $text = '<button data-brand-id="' . $brand->id . '" class="btn btn-danger status-btn" data-status="0" type="button">KHÔNG HIỂN THỊ</button>';
                }

                return $text;
            })
            ->addColumn('action', function ($brand) {
                $url = '<a type="button" class="btn blue btn-outline" href="/admin/brands/'.$brand->id.'">Sửa</a><a href="/admin/brands/delete/'.$brand->id.'" type="button" class="btn red btn-outline delete-btn">Xóa</a>';

                return $url;
            })
            ->rawColumns(['action', 'status'])
            ->make(true);
    }

    public function create() {
        return view('admin.posts.create');
    }

    public function store(Request $request) {
        $data = $request->all();

        $data['image'] = ($request->file('image') && $request->file('image')->isValid()) ? $this->saveImage($request->file('image')) : '';

        try {
            $post = Post::create($data);
        } catch (\Exception $e) {
            return redirect('admin/posts/add')->with('Lỗi! Thêm mới không thành công');
        }

        return redirect('admin/posts/'. $post->id)->with('Thêm mới thành công');
    }

    public function edit($id) {
        $post = Post::find($id);

        if (empty($post)) {
            return redirect()->back()->with('error', 'Không tồn tại');
        }

        return view('admin.posts.edit', compact('post'));
    }
}
