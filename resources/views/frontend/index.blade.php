@extends('frontend')

@section('content')
    <section id="slider-container" class="ws_gestures" style="font-size: 9.91146px;">
        <div class="ws_images" style="overflow: visible;">


            <div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: hidden;">
                <div class="ws_list"
                     style="position: absolute; top: 0px; height: 100%; transform: translate3d(0px, 0px, 0px); width: 1000%; left: 0%; display: block;">
                    {{--<div class="ws_swipe_left"--}}
                         {{--style="position: absolute; top: 0px; height: 100%; overflow: hidden; width: 10%; left: -10%;">--}}
                        {{--<img src="/files/images/kenly(1).jpg"--}}
                             {{--alt="" title="" style="visibility: visible; margin-top: 0px;"></div>--}}
                    <ul style="width: 100%;">
                        <li style="width: 10%;"><img
                                    src="/files/images/slidee%20(1).jpg"
                                    alt="" title="" style="visibility: visible; margin-top: 0px;"></li>

                        <li style="width: 10%;"><img
                                    src="/files/images/slidee%20(2).jpg"
                                    alt="" title="" style="visibility: visible; margin-top: 0px;"></li>

                        <li style="width: 10%;"><img
                                    src="/files/images/slidee%20(3).jpg"
                                    alt="" title="" style="visibility: visible; margin-top: 0px;"></li>
                        <li style="width: 10%;"><img
                                    src="/files/images/slidee%20(4).jpg"
                                    alt="" title="" style="visibility: visible; margin-top: 0px;"></li>
                        <li style="width: 10%;"><img
                                    src="/files/images/slidee%20(5).jpg"
                                    alt="" title="" style="visibility: visible; margin-top: 0px;"></li>
                        <li style="width: 10%;"><img
                                    src="/files/images/slidee%20(6).jpg"
                                    alt="" title="" style="visibility: visible; margin-top: 0px;"></li>

                        {{--<li style="width: 10%;"><img--}}
                                    {{--src="/files/images/Slider4.jpg"--}}
                                    {{--alt="" title="" style="visibility: visible; margin-top: 0px;"></li>--}}
                    </ul>
                    {{--<div class="ws_swipe_right"--}}
                         {{--style="position: absolute; top: 0px; height: 100%; overflow: hidden; width: 10%; left: 40%;">--}}
                        {{--<img src="/files/images/Slider1.png"--}}
                             {{--alt="nhà phố 2 tầng" title="" style="visibility: visible; margin-top: 0px;"></div>--}}
                </div>
            </div>
            {{--<div class="ws_effect ws_domino"--}}
                 {{--style="position: absolute; width: 100%; height: 100%; top: 0px; overflow: hidden; display: none;">--}}
                {{--<div class="ws_zoom"></div>--}}
                {{--<div class="ws_parts"></div>--}}
            {{--</div>--}}
            {{--<div class="ws_effect ws_slices"--}}
                 {{--style="left: 0px; top: 0px; z-index: 8; overflow: hidden; width: 100%; height: 100%; position: absolute; display: none; opacity: 1;">--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 0px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 127px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -127px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 254px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -254px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 381px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -381px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 508px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -508px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 635px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -635px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 762px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -762px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 889px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -889px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 1016px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -1016px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 1143px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -1143px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 1270px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -1270px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 1397px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -1397px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 1524px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -1524px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 1651px; overflow: hidden; width: 127px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -1651px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
                {{--<div class="wow-slice"--}}
                     {{--style="left: 1778px; overflow: hidden; width: 125px; position: absolute; height: 100%; opacity: 1;">--}}
                    {{--<img style="position: absolute; left: -1778px; top: 0px; transform: translate3d(0px, 0px, 0px); width: 1903px; margin-top: 0px; margin-left: 0px;"--}}
                         {{--src="/files/images/Slider3.jpg">--}}
                {{--</div>--}}
            {{--</div>--}}
            {{--<div class="ws_effect ws_blinds"--}}
                 {{--style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; z-index: 8; opacity: 1; display: none;">--}}
                {{--<div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden;"></div>--}}
                {{--<div style="position: relative; display: inline-block; height: 100%; width: 33.334%; border: none; margin: 0px; overflow: hidden; top: 0px; left: 0px;"></div>--}}
                {{--<div style="position: relative; display: inline-block; height: 100%; width: 33.334%; border: none; margin: 0px; overflow: hidden; top: 0px; left: 0px;"></div>--}}
                {{--<div style="position: relative; display: inline-block; height: 100%; width: 33.334%; border: none; margin: 0px; overflow: hidden; top: 0px; left: 0px;"></div>--}}
            {{--</div>--}}
            {{--<div style="position: absolute; padding: 0px; z-index: 56; right: 15px; bottom: 15px;"></div>--}}
            {{--<div class="ws_controls">--}}
                {{--<div class="ws_bullets">--}}
                    {{--<div>--}}

                        {{--<a href="#" title="nhà phố 2 tầng"--}}
                           {{--class="ws_selbull"><span>1</span></a>--}}

                        {{--<a href="#" title="" class=""><span>2</span></a>--}}

                        {{--<a href="#" title="" class=""><span>3</span></a>--}}

                        {{--<a href="#" title="" class=""><span>4</span></a>--}}

                        {{--<div class="ws_bulframe">--}}
                            {{--<div>--}}
                                {{--<div style="width: 500%;"><img--}}
                                            {{--src="/files/images/tn-Slider1.png"--}}
                                            {{--alt="nhà phố 2 tầng"><img--}}
                                            {{--src="/files/images/tn-Slider2.png"--}}
                                            {{--alt=""><img--}}
                                            {{--src="/files/images/tn-Slider3.jpg"--}}
                                            {{--alt=""><img--}}
                                            {{--src="/files/images/tn-Slider4.jpg"--}}
                                            {{--alt=""></div>--}}
                            {{--</div>--}}
                            {{--<span></span></div>--}}
                    {{--</div>--}}
                {{--</div>--}}
                {{--<a href="#" class="ws_next"><span><i></i><b></b></span><img alt=""--}}
                                                                                                       {{--src="/files/images/tn-Slider2.png"><img--}}
                            {{--alt=""--}}
                            {{--src="/files/images/tn-Slider2.png"--}}
                            {{--style=""></a><a href="#"--}}
                                            {{--class="ws_prev"><span><i></i><b></b></span><img alt=""--}}
                                                                                            {{--src="/files/images/tn-Slider4.jpg"><img--}}
                            {{--alt=""--}}
                            {{--src="/files/images/tn-Slider4.jpg"--}}
                            {{--style=""></a><a href="#"--}}
                                            {{--class="ws_playpause ws_pause ws_hide"><span><i></i><b></b></span></a>--}}
            {{--</div>--}}
            {{--<div class="ws_video_btn ws_youtube">--}}
                {{--<div></div>--}}
            {{--</div>--}}
            <a href="#" class="ws_fullscreen"></a>
        </div>
    </section>
    <section class="yellow-bg about">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <header class="clearfix">
                        <img class="icon"
                             src="/files/images/i1.png"
                             alt="Mẫu nhà đẹp tại đà nẵng, công ty thiết kế xây dựng tại đà nẵng">
                        <h1 id="0563ov38z2pppts02ni4pca" class="fon-tracked">Giới thiệu chung về Kenly Việt Nam</h1>
                    </header>

                    <div class="row">
                        <div class="col-xs-2 col-sm-offset-1 wow fadeInLeft animated" data-wow-delay="0.1">
                            <img src="/files/images/i2.png"
                                 alt="" class="img-responsive">
                        </div>
                        <div class="col-sm-9 wow fadeInRight animated" data-wow-delay="0.2">

                            <p>Kenly Việt Nam là công ty hoạt động trong lĩnh vực kiến trúc, xây dựng, xây lắp nội thất.
                                Đi lên từ một văn phòng thiết kế bởi những KTS trẻ, nhiệt huyết và sáng tạo. Trải qua
                                nhiều năm dưới sự dìu dắt giúp đỡ của các KTS uy tín và giỏi trong nước và quốc tế cùng
                                sự thử thách của thị trường về chất lượng bản vẽ và sản phẩm thi công. Kenly Việt Nam
                                đã trở thành sự lựa chọn tin cậy đối với khách hàng, đối tác cho các công trình thiết kế
                                và thi công trọn gói nhà phố, nhà vườn, biệt thự, nội thất cao cấp. Thiết kế của Kenly
                                đề cao tính sáng tạo, hài hòa về phong thủy và các tiêu chí: Kỹ thuật - Công Năng - Thẩm
                                Mĩ. Hãy đến với chúng tôi để được tư vấn kĩ càng và đưa các quyết định sáng suốt và hợp
                                lý
                                về ngôi nhà của bạn.</p>


                            <a href="{{ url('gioi-thieu') }}"
                               class="theme-btn btn-style-two lined-btn-right">Xem thêm</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="/files/images/i3.jpg"
                         alt="Mẫu nhà đẹp tại đà nẵng, công ty thiết kế nhà đà nẵng">
                </div>
            </div>
        </div>
    </section>
    <section class="portfolio">
        <div class="container">
            <header class="heading">
                <h2 id="0pt1sbbthtsazxx3tlge2zl" class="fon-tracked"><span>Mẫu thiết kế mới</span></h2>

                <ul>
                    <li>Bạn muốn sở hữu một căn nhà đẹp, tiên nghi giá cả phải chăng và có phong thủy hợp với gia
                        chủ?!
                    </li>
                    <li>Bạn đã tham khảo rất nhiều nơi, nhưng một vài lý do khiến bạn chưa ưng ý?!</li>
                    <li>Hãy đến với chúng tôi! Một đội ngũ chuyên nghiệp với những kiến trúc sư trẻ mang xu hướng
                        mới, hiện đại, sẽ cùng với bạn, chúng ta sẽ tạo nên ngôi nhà hoàn hòa với chi phí tối ưu
                        nhất.
                    </li>
                    <li>Chắc chắn chúng tôi sẽ khiến bạn hài lòng!</li>
                </ul>
            </header>
            <ul class="gallery-cats clearfix">
                <li class="active" data-filter="all"><span>Tất cả</span></li>
                @php $categories = \App\Models\Category::where('parent_id', config('const.DU_AN'))->orderBy('piority', 'asc')->limit(8)->get(); @endphp

                @foreach($categories as $category)
                    <li data-filter="{{ $category->id }}">
                        <h3>{{ $category->name }}</h3>
                    </li>
                @endforeach
            </ul>
            <div id="project" class="scrollbar" style="max-height: 712px;">
                <div class="row" id="filtr-container" style="height: 976px;">
                    @php $posts = \App\Models\Post::where('status', config('const.ACTIVE'))->orderBy('created_at', 'desc')->limit(15)->get(); @endphp

                    @foreach($posts as $post)
                        <div class="col-md-4 col-sm-6 overlay filtr-item" data-category="{{ $post->category_id }}"
                             style="transform: scale(1) translate3d(0px, 0px, 0px);">
                            <figure>
                                <img src="{{ $post->image }}"
                                     alt="{{ $post->name }}">
                                <figcaption>
                                    <h4>
                                        <a href="{{ url('chi-tiet/' . $post->slug . '-' . $post->id) }}">{{ $post->name }}</a></h4>
                                    <div class="content">
                                        {!! $post->short_desc !!}
                                    </div>

                                    <a class="ct-btn"
                                       href="{{ url('chi-tiet/' . $post->slug . '-' . $post->id) }}"><span>Chi tiết</span></a>
                                </figcaption>
                            </figure>
                        </div>
                    @endforeach

                </div>
            </div>
            <div class="link-box"><a href="{{ url('du-an') }}"
                                     class="theme-btn btn-style-two lined-btn-right">Xem thêm</a></div>
        </div>
    </section>
    <section class="yellow-bg about">
        <div class="container">
            <header class="clearfix">
                <img class="icon"
                     src="/files/images/i1.png"
                     alt="">
                <h2 id="f373iqavkje4yt1evhgtqk" class="fon-tracked">Dịch vụ của chúng tôi</h2>
                <p>Không chỉ cùng bạn xây dựng một căn nhà, chúng tôi cùng bạn xây dựng một không gian
                    sống xứng đáng cho bạn và vì bạn!</p>
            </header>
            <div class="row">

                <div class="col-sm-4 wow fadeInUp animated">
                    <div class="feature-box clearfix">
                        <i class="fa fa-building icon"></i>
                        <div class="content">
                            <h4><a href="#">Thiết kế
                                    kiến trúc</a></h4>
                            <ul>
                                <li>Thiết kế các công trình nhà ở cao cấp, biệt thự, dinh thự.</li>
                                <li>Thiết kế các toà nhà văn phòng, trung tâm thương mại,các toà nhà cao tầng
                                    khác.
                                </li>
                                <li>Thiết kế khu du lịch, nhà nghỉ cuối tuần, resort.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4 wow fadeInUp animated">
                    <div class="feature-box clearfix">
                        <i class="fa fa-building icon"></i>
                        <div class="content">
                            <h4><a href="#">Thiết kế nội
                                    thất</a></h4>
                            <ul>
                                <li>Thiết kế nội thất nhà hàng quán bar, quán cafe.</li>
                                <li>Thiết kế nội thất, ngoại thất nhà ở, nhà vườn.</li>
                                <li>Thiết kế trang trí nội thất văn phòng, showroom, gian trưng bày sản phẩm.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4 wow fadeInUp animated">
                    <div class="feature-box clearfix">
                        <i class="fa fa-building icon"></i>
                        <div class="content">
                            <h4><a href="#">Thi công</a></h4>
                            <ul>
                                <li>Thi công từng phần, thi công trọn gói công trình.</li>
                                <li>Thi công trang trí nội ngoại thất.</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
    <section class="white container">
        <header class="heading fadeInDown visible" style="visibility: visible; animation-name: fadeInDown;">
            <h2 id="45ixfuw3i8heb512q7quce" class="fon-tracked"><span>Tư vấn, hỗ trợ trực tuyến</span></h2>
        </header>
        <div class="team-widget">
            <div class="widget-content">
                <ul class="row">

                    <li class="col-md-6 fadeInLeft visible clearfix"
                        style="visibility: visible; animation-name: fadeInLeft;">
                        <article class="entry-item">
                            <div class="entry-thumb"><img
                                        alt="CEO Nguyễn Luân của công ty tư vấn thiết kế và xây dựng Kenly Việt Nam"
                                        src="/files/images/logo.jpg">
                            </div>
                            <div class="entry-content">
                                <header><h4 class="entry-title">Nguyễn Luân</h4></header>
                                <ul class="contact-box">
                                    <li><strong>Facebook:</strong> <a
                                                href="https://www.facebook.com/messages/t/nguyen.luan.777" target="_blank"
                                                title="Ho tro tu van qua Facebook">Facebook Message</a></li>
                                    {{--<li><strong>Skype:</strong> <a href="skype:?chat"--}}
                                                                   {{--title="Ho tro tu van qua Skype">Skype Message</a>--}}
                                    {{--</li>--}}
                                    <li><strong>Email:</strong> <a href="mailto:design.kenhome@gmail.com"
                                                                   title="Ho tro tu van qua email">design.kenhome@gmail.com</a>
                                    </li>
                                    <li><strong>Cellphone:</strong> <span><a
                                                    onclick="goog_report_conversion (&#39;tel:+84969485908&#39;)"
                                                    class="phone" href="tel:+84969485908">0969.485.908</a></span></li>
                                    <li><strong>Cellphone:</strong> <span><a class="phone"
                                                                             onclick="goog_report_conversion (&#39;tel:+84963492559&#39;)"
                                                                             href="tel:+84963492559">0963.492.559</a></span>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </li>

                </ul>
            </div>
        </div>
    </section>
    <section class="blog-news">
        <div class="container">
            <header class="heading">
                <h2 id="ernn2a0rktvx12wor98nca" class="fon-tracked"><span>Tin tức &amp; Sự kiện</span></h2>
            </header>
            <div class="slick-bolg slick-initialized slick-slider">

                <div class="slick-list draggable">
                    <div class="slick-track">

                        @php $dichVus = \App\Models\Post::where('category_id', config('const.DICH_VU'))->get() @endphp

                        @foreach($dichVus as $key => $dichVu)
                            <div class="item fadeInUp visible slick-slide slick-active" data-slick-index="{{ $key }}"
                                 aria-hidden="false"
                                 style="width: 390px; visibility: visible; animation-name: fadeInUp;" tabindex="-1"
                                 role="option" aria-describedby="slick-slide02">
                                <article class="news">
                                    <figure>
                                        <img src="{{ $dichVu->image }}"
                                             alt="{{ $dichVu->name }}">
                                        <figcaption>
                                            <header>
                                                <h3><a href="/dich-vu/{{ $dichVu->slug }}-{{ $dichVu->id }}"
                                                       tabindex="0">{{ $dichVu->name }}</a></h3>
                                                <div class="post-meta"><i class="fa fa-calendar"></i>
                                                    <time>{{ \Carbon\Carbon::parse($dichVu->created_at)->format('H:i d/m/Y') }}</time>
                                                    <i class="fa fa-eye"></i><span>{{ $dichVu->view_count }} lượt xem</span></div>
                                            </header>
                                            <div class="content">
                                                {!! $dichVu->short_desc !!}
                                            </div>
                                        </figcaption>
                                    </figure>
                                </article>
                            </div>
                        @endforeach


                    </div>
                </div>


            </div>
        </div>
    </section>
@endsection