<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Category;
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

        return view('frontend.du_an', compact('category', 'isRoot'));
    }

    public function duAn() {
        $isRoot = true;

        return view('frontend.du_an', compact('category', 'isRoot'));
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
        return view('frontend.phong_cach_song');
    }

    public function quyTrinhThietKe() {
        return view('frontend.phong_cach_song');
    }

    public function quyTrinhThiCong() {
        return view('frontend.phong_cach_song');
    }

    public function caiTaoNhaCu() {
        return view('frontend.cai_tao_nha_cu');
    }
}
