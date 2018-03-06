@extends('frontend')

@section('styles')
    <link href="/files/css/Other.css" rel="stylesheet">
@endsection

@section('content')
    <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 id="62heekvgcju2dspi5kck" class="fon-tracked">{{ $isRoot ? 'MẪU THIẾT KẾ CỦA CÔNG TY' : $category->desc }}</h1>
                </div>

                <section class="breadcrumb col-md-6">
                        <a class="home" href="{{ url('/') }}"><span itemprop="title">Trang chủ</span></a>
                    <span>&nbsp;<i class="fa fa-angle-right"></i>&nbsp;</span><span><span itemprop="title">{{ $isRoot ? 'Mẫu thiết kế của công ty' : $category->name }}</span></span>
                </section>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="col-md-8">

                <section class="row">
                    <ul id="MainContent_ctl00_ListViewListContent_itemPlaceholderContainer" class="row project">
                        @foreach($posts as $post)
                            <li class="col-sm-6 overlay">
                                <figure>
                                    <img src="{{ $post->image }}"
                                         alt="{{ $post->name }}">
                                    <figcaption>
                                        <h4>
                                            <a href="{{ url('chi-tiet/' . $post->slug . '-' . $post->id) }}">{{ $post->name }}</a></h4>
                                        <div class="content">

                                        </div>

                                        <a class="ct-btn"
                                           href="{{ url('chi-tiet/' . $post->slug . '-' . $post->id) }}"><span>Chi tiết</span></a>
                                    </figcaption>
                                </figure>
                            </li>
                        @endforeach

                    </ul>
                </section>

                @if (count($posts) > 0)
                <div class="pager">
                        {{--<span id="MainContent_ctl00_ListViewListContent_DataPager1"><input type="submit"--}}
                                                                                           {{--name="ctl00$MainContent$ctl00$ListViewListContent$DataPager1$ctl00$ctl00"--}}
                                                                                           {{--value="|&lt;&lt;"--}}
                                                                                           {{--disabled="disabled"--}}
                                                                                           {{--class="aspNetDisabled">&nbsp;<span>1</span>&nbsp;<input--}}
                                    {{--type="submit" name="ctl00$MainContent$ctl00$ListViewListContent$DataPager1$ctl02$ctl00"--}}
                                    {{--value=" &gt;&gt;|" disabled="disabled" class="aspNetDisabled">&nbsp;</span>--}}
                    <div class="archive-pagination pagination">
                        {{ $posts->links('frontend.paginate') }}
                    </div>
                </div>
                @else
                    <h2 id="ozj2gw5uuehngv057stsn" class="fon-tracked">Chúng tôi đang xây dựng nội dung</h2>
                @endif

            </div>

            @include('frontend.sidebar')

        </div>
    </section>


@endsection