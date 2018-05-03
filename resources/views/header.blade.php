<header id="header" class="fixed-header">
    <div class="container">
        <div class="row">
            <div class="logo col-sm-3">
                <h2>
                    <a href="{{ url('/') }}">
                        <img src="/files/images/logo.jpg"
                             alt="Cty TNHH Tư vấn thiết kế và xây dựng Kenly Việt Nam">
                    </a>
                </h2>
            </div>
            <div class="banner col-sm-9">
                <img src="/files/images/banner.png"
                     alt="Cty TNHH Tư vấn thiết kế và xây dựng Kenly Việt Nam">

                <div class="support"><p class="phone"><a href="tel:+84969485908"><i class="fa fa-phone"></i><span>0969.485.908</span></a><a
                                href="tel:+84963492559"><i class="fa fa-phone"></i><span>0963.492.559</span></a></p>
                    <p><a class="popup-gmaps" title="Xem bản đồ tìm đến chúng tôi" target="_blank"
                          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.6093546337547!2d105.77872201196323!3d20.98386832973797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345333762131eb%3A0x1aaf9815b5c5da79!2zTmfDtSAxMywgTeG7mSBMYW8sIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1513778255289"><i
                                    class="fa fa-map-marker" aria-hidden="true"></i>Số 50, dịch vụ 06, khu đô thị Mỗ Lao, Hà Đông, Hà Nội</a></p></div>

            </div>
        </div>
    </div>
    <nav id="main-menu" class="main-menu">
        <div class="menu-button">Menu</div>
        <ul class="navigation container">
            <li class="active"><a href="{{ url('/') }}"><i class="fa fa-home"></i><span class="home">Trang chủ</span>
                </a></li>
            <li><a href="{{ url('gioi-thieu') }}">Giới thiệu</a></li>
            <li class="has-sub"><span class="submenu-button"></span><a href="{{ url('du-an') }}">Dự
                    án</a>
                <ul>
                    @php $duAns = \App\Models\Category::where('parent_id', config('const.DU_AN'))->orderBy('piority', 'asc')->get() @endphp

                    @foreach($duAns as $duAn)
                        <li><a href="{{ url('du-an/' . $duAn->slug) }}">{{ $duAn->name }}</a></li>
                    @endforeach

                </ul>
            </li>

            <li class="has-sub"><span class="submenu-button"></span><a
                        href="{{ url('dich-vu') }}">Dịch vụ</a>
                <ul>
                    @php $dichVus = \App\Models\Post::where('category_id', config('const.DICH_VU'))->get() @endphp

                    @foreach($dichVus as $dichVu)
                        <li><a href="{{ url('dich-vu/'.$dichVu->slug.'-'.$dichVu->id) }}">{{ $dichVu->name }}</a></li>
                    @endforeach
                </ul>
            </li>
            <li><a href="{{ url('cong-trinh-dep') }}">Công trình đẹp</a></li>
            <li><a href="{{ url('cai-tao-nha-cu') }}">Cải tạo nhà cũ</a></li>
            {{--<li class="has-sub"><span class="submenu-button"></span>--}}
                {{--<a href="#">Cải tạo nhà cũ</a>--}}
                {{--<ul>--}}
                    {{--<li><a href="{{ url('quy-trinh-thiet-ke') }}">Quy trình thiết kế</a></li>--}}
                    {{--<li><a href="{{ url('quy-trinh-thi-cong') }}">Quy trình thi công</a></li>--}}
                {{--</ul>--}}
            {{--</li>--}}
            <li><a href="{{ url('lien-he') }}">Liên hệ</a></li>
            @if (auth('admin')->check() and (auth('admin')->user()->type == 'admin' || auth('admin')->user()->type == 'mode'))
                <li><a href="{{ url('admin') }}">Trang Admin</a></li>
            @endif
        </ul>
    </nav>
</header>