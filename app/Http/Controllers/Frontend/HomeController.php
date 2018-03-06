<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Category;
use App\Models\Mail;
use App\Models\Post;
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

    public function test() {
        dd(storage_path('files'));
    }

    public function getPostsByCategory($slug) {
        $category = Category::where('slug', $slug)->first();
        $isRoot = false;

        if ($isRoot) {
            $categories = Category::where('parent_id', config('const.DU_AN'))->get()->pluck('id');
            $posts = Post::where('status', config('const.ACTIVE'))->whereIn('category_id', $categories)->orderBy('created_at', 'desc')->paginate(10);
        } else {
            $posts = Post::where('category_id', $category->id)->where('status', config('const.ACTIVE'))->orderBy('created_at', 'desc')->paginate(10);
        }

        return view('frontend.du_an', compact('category', 'isRoot', 'posts'));
    }

    public function duAn() {
        $isRoot = true;

        if ($isRoot) {
            $categories = Category::where('parent_id', config('const.DU_AN'))->get()->pluck('id');
            $posts = Post::where('status', config('const.ACTIVE'))->whereIn('category_id', $categories)->orderBy('created_at', 'desc')->paginate(10);
        }

        return view('frontend.du_an', compact('category', 'isRoot', 'posts'));
    }

    public function detailPost($slug, $id) {
        $post = Post::find($id);

        $post->update([
            'view_count' => $post->view_count + 1
        ]);

        if (empty($post)) {
            return redirect(url('/'));
        }

        $category = Category::find($post->category_id);

        return view('frontend.detail_post', compact('post', 'category'));
    }

    public function gioiThieu() {
        return view('frontend.gioi_thieu');
    }

    public function tinTuc() {
        return view('frontend.tin_tuc');
    }

    public function lienHe() {
        return view('frontend.lien_he');
    }

    public function phongCachSong() {
        $posts = Post::where('category_id', config('const.PCS'))->paginate(10);

        return view('frontend.phong_cach_song', compact('posts'));
    }

    public function quyTrinhThietKe() {
        return view('frontend.phong_cach_song');
    }

    public function quyTrinhThiCong() {
        return view('frontend.phong_cach_song');
    }

    public function caiTaoNhaCu() {
        $posts = Post::where('category_id', config('const.PCS'))->paginate(10);

        return view('frontend.cai_tao_nha_cu', compact('posts'));
    }

    public function guiLienHe(Request $request) {
        $data = $request->all();

        if (empty($data['name']) or empty($data['email']) or empty($data['phone']) or empty($data['title']) or empty($data['content'])) {
            return redirect()->back()->with('error', 'Hãy điền đủ thông tin');
        }

        try {
            Mail::create($data);
        } catch (\Exception $ex) {
            return redirect()->back()->with('error', 'Không thành công');
        }

        return redirect()->back()->with('success', 'Gửi thành công');
    }

    public function xxx() {
        return view('frontend.xxx');
    }
}
