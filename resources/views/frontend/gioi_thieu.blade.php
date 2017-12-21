@extends('frontend')

@section('styles')
    <link href="/files/css/Other.css" rel="stylesheet">
    <meta property="og:title" content="Giới thiệu về Kenly Việt Nam" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://kenlyvietnam.vn/files/images/intro.png" />
    <meta property="og:url" content="http://kenlyvietnam.vn/gioi-thieu">
@endsection

@section('content')
    <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 id="62heekvgcju2dspi5kck" class="fon-tracked">GIỚI THIỆU</h1>
                </div>

                <section class="breadcrumb col-md-6">
                    <a class="home" href="{{ url('/') }}"><span itemprop="title">Trang chủ</span></a>
                    <span>&nbsp;<i class="fa fa-angle-right"></i>&nbsp;</span><span><span itemprop="title">Giới thiệu</span></span>
                </section>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="col-md-8">

                <header>
                    <h1 class="post-title fadeInDown visible fon-tracked" id="gwevcu50suaxc3rbcefsih"
                        style="visibility: visible; animation-name: fadeInDown;">Giới thiệu</h1>
                </header>


                <article class="post">
                    <section class="Post-Content fadeInLeft visible" style="visibility: visible; animation-name: fadeInLeft;">
                        <div style="page-break-after:always"><span style="display:none">&nbsp;</span></div>
                        <img alt="Kenly Việt Nam" src="/files/images/intro.png" style="width: 100%">
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

                        <p style="text-align: center;padding:40px 0 15px;"><a class="bt-phone" onclick="goog_report_conversion ('tel:+84969485908')" href="tel:+84969485908"><i class="fa fa-phone"></i> Gọi tư vấn : 0969 485 908</a></p>

                        <h3>Tham khảo thêm các mẫu thiết kế nhà đẹp</h3>
                        <ul>
                            @php $nices = \App\Models\Post::where('is_highlight', 1)->inRandomOrder()->limit(5)->get(); @endphp

                            @foreach($nices as $nice)
                                <li><a href="{{ url('chi-tiet/'.$nice->slug.'-'.$nice->id) }}">{{ $nice->name }}</a></li>
                            @endforeach
                        </ul>
                    </section>

                    <footer class="fadeInLeft visible" style="visibility: visible; animation-name: fadeInLeft;">
                        <div class="row">
                            <div class="col-xs-4 share-post">
                                <div class="fb-like" data-href="{{ url('gioi-thieu') }}" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
                                <div class="g-plusone" data-size="medium"></div>
                            </div>
                        </div>
                        <div class="fb-comments" data-href="{{ url('gioi-thieu') }}" data-width="100%" data-numposts="8"></div>
                        </div>
                    </footer>
                </article>

                <div id="MainContent_pRecentPost" class="recentposts list-entry other">

                    <h2 class="recentposts-title fadeInDown visible fon-tracked" id="78ok3dy8jvm5vse3lzt8na"
                        style="visibility: visible; animation-name: fadeInDown;">Các dự án khác</h2>
                    <ul class="row fadeInLeft visible" style="visibility: visible; animation-name: fadeInLeft;">
                        @php $randoms = \App\Models\Post::inRandomOrder()->limit(8)->get(); @endphp

                        @foreach($randoms as $random)
                            <li class="col-sm-6">
                                <article class="entry-item entry-hover clearfix">
                                    <div class="entry-thumb">
                                        <a href="{{ url('chi-tiet/'.$random->slug.'-'.$random->id) }}">
                                            <img src="{{ $random->image }}"
                                                 alt="{{ $random->name }}">
                                        </a>
                                    </div>
                                    <div class="entry-content">
                                        <h3 class="entry-title"><a
                                                    href="{{ url('chi-tiet/'.$random->slug.'-'.$random->id) }}">{{ $random->name }}</a></h3>
                                        <div class="post-meta"><i class="fa fa-calendar"></i>
                                            <time>{{ \Carbon\Carbon::parse($random->created_at)->format('H:i d/m/Y') }}</time>
                                            <i class="fa fa-eye"></i><span>{{ $random->view_count }}</span></div>
                                    </div>
                                </article>
                            </li>
                        @endforeach

                    </ul>

                </div>

            </div>

            @include('frontend.sidebar')

        </div>
    </section>


@endsection