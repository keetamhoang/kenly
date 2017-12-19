<?php

namespace App\Http\Controllers\Backend;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\Facades\DataTables;

class CategoryController extends AdminController
{
    public function index() {
        return view('admin.categories.index');
    }

    public function categoryAttribute(Request $request) {
        $posts = Category::all();

        return $this->datatable($posts);
    }

    public function datatable($posts)
    {
        return DataTables::of($posts)
            ->editColumn('image', function ($brand) {
                $image = '<img src="'.$brand->image.'" style="width: 100%">';

                $image = '<div style="width: 100px">'.$image.'</div>';

                return $image;
            })
            ->addColumn('action', function ($brand) {
                $url = '<a type="button" class="btn blue btn-outline" href="/admin/categories/'.$brand->id.'">Sửa</a><a href="/admin/categories/delete/'.$brand->id.'" type="button" class="btn red btn-outline delete-btn">Xóa</a>';

                return $url;
            })
            ->rawColumns(['action', 'status', 'image'])
            ->make(true);
    }

    public function create() {
        return view('admin.categories.create');
    }

    public function store(Request $request) {
        $data = $request->all();

        if (empty($data['name'])) {
            return redirect('admin/categories/add')->with('error', 'Lỗi! Thêm mới không thành công');
        }

        $data['image'] = ($request->file('image') && $request->file('image')->isValid()) ? $this->saveImage($request->file('image')) : '';

        try {
            $post = Category::create($data);
        } catch (\Exception $e) {
            return redirect('admin/categories/add')->with('error', 'Lỗi! Thêm mới không thành công');
        }

        return redirect('admin/categories/'. $post->id)->with('success', 'Thêm mới thành công');
    }

    public function edit($id) {
        $post = Category::find($id);

        if (empty($post)) {
            return redirect()->back()->with('error', 'Không tồn tại');
        }

        return view('admin.categories.edit', compact('post'));
    }
}
