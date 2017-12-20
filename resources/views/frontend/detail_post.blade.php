@extends('frontend')

@section('styles')
    <link href="/files/css/Other.css" rel="stylesheet">
@endsection

@section('content')
    <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 id="62heekvgcju2dspi5kck" class="fon-tracked">{{ $category->desc }}</h1>
                </div>

                <section class="breadcrumb col-md-6">
                    <a class="home" href="{{ url('/') }}"><span itemprop="title">Trang chủ</span></a>
                    <span>&nbsp;<i class="fa fa-angle-right"></i>&nbsp;</span><span><span itemprop="title">{{ $category->name }}</span></span>
                </section>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="col-md-8">

                <header>
                    <h1 class="post-title fadeInDown visible fon-tracked" id="gwevcu50suaxc3rbcefsih"
                        style="visibility: visible; animation-name: fadeInDown;">{{ $post->name }}</h1>
                </header>


                <article class="post">
                    <section class="Post-Content fadeInLeft visible" style="visibility: visible; animation-name: fadeInLeft;">
                        <div style="page-break-after:always"><span style="display:none">&nbsp;</span></div>
                        <img alt="{{ $post->name }}" src="{{ $post->image }}" style="width: 100%">
                        <p style="text-align: center;padding:25px 0 15px;"><a class="bt-phone" onclick="goog_report_conversion ('tel:+84969485908')" href="tel:+84969485908"><i class="fa fa-phone"></i> Gọi tư vấn : 0969 485 908</a></p>
                        {!! $post->desc !!}
                        <p style="text-align: center;padding:40px 0 15px;"><a class="bt-phone" onclick="goog_report_conversion ('tel:+84969485908')" href="tel:+84969485908"><i class="fa fa-phone"></i> Gọi tư vấn : 0969 485 908</a></p>

                        <h3>Tham khảo thêm các mẫu thiết kế nhà đẹp</h3>
                        <ul>
                            @php $nices = \App\Models\Post::where('is_highlight', 1)->inRandomOrder()->limit(5)->get(); @endphp

                            @foreach($nices as $nice)
                                <li><a href="{{ url('chi-tiet/'.$nice->slug.'-'.$nice->id) }}">{{ $nice->name }}</a></li>
                            @endforeach
                        </ul>
                    </section>

                    @include('frontend.footer_post')
                </article>


                @include('frontend.footer_else')

            </div>

            @include('frontend.sidebar')

        </div>
    </section>


@endsection