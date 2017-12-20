<header id="header" class="fixed-header">
    <div class="container">
        <div class="row">
            <div class="logo col-sm-3">
                <h2>
                    <a href="{{ url('/') }}">
                        <img src="/files/images/logo.jpg"
                             alt="Công ty tư vấn, thiết kế kiến trúc nhà Đà Nẵng">
                    </a>
                </h2>
            </div>
            <div class="banner col-sm-9">
                <img src="/files/images/banner.png"
                     alt="Mẫu nhà đẹp tại đà nẵng, công ty thiết kế xây dựng tại đà nẵng">

                <div class="support"><p class="phone"><a href="tel:+84969485908"><i class="fa fa-phone"></i><span>0969.485.908</span></a><a
                                href="tel:+84963492559"><i class="fa fa-phone"></i><span>0963.492.559</span></a></p>
                    <p><a class="popup-gmaps" title="Xem bản đồ tìm đến chúng tôi"
                          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.681385293911!2d108.22573471542813!3d16.030093088905137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219e5316abec7%3A0x3e0d47f4480e7472!2zSMOzYSBTxqFuIDYsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1480171579054"><i
                                    class="fa fa-map-marker" aria-hidden="true"></i>Updating...</a></p></div>

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
                    @php $duAns = \App\Models\Category::where('parent_id', 3)->get() @endphp

                    @foreach($duAns as $duAn)
                        <li><a href="{{ url('du-an/' . $duAn->slug) }}">{{ $duAn->name }}</a></li>
                    @endforeach

                </ul>
            </li>

            <li class="has-sub"><span class="submenu-button"></span><a
                        href="{{ url('dich-vu') }}">Dịch vụ</a>
                <ul>
                    <li><a href="{{ url('dich-vu/thiet-ke-kien-truc') }}">Thiết kế kiến
                            trúc</a></li>
                    <li><a href="{{ url('dich-vu/thiet-ke-noi-that') }}">Thiết kế nội
                            thất</a></li>
                    <li><a href="{{ url('dich-vu/thi-cong') }}">Thi công</a></li>
                </ul>
            </li>
            <li><a href="{{ url('tin-tuc') }}">Tin tức</a></li>
            <li><a href="{{ url('du-an/nha-pho') }}">Nhà phố</a></li>
            <li><a href="{{ url('lien-he') }}">Liên hệ</a></li>
        </ul>
    </nav>
</header>