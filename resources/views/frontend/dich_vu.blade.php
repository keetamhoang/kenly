@extends('frontend')

@section('styles')
    <link href="/files/css/Other.css" rel="stylesheet">
@endsection

@section('content')

    <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 id="4o662o738xldp3yuajujag" class="fon-tracked">Dịch vụ</h1>
                </div>

                <section class="breadcrumb col-md-6">
                    <a class="home" href="{{ url('/') }}"><span itemprop="title">Trang chủ</span></a>
                    <span>&nbsp;<i class="fa fa-angle-right"></i>&nbsp;</span><span><span itemprop="title">Dịch vụ</span></span>
                </section>


            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="col-md-8">

                <ul id="MainContent_ctl00_ListViewListContent_itemPlaceholderContainer" class="list-entry">

                    @php $posts = \App\Models\Post::where('category_id', config('const.DICH_VU'))->get() @endphp

                    @foreach($posts as $post)
                        <li class="post clearfix fadeInLeft visible"
                            style="visibility: visible; animation-name: fadeInLeft;">
                            <article class="entry-item entry-hover">
                                <figure class="entry-thumb">
                                    <a href="/dich-vu/{{ $post->slug . '-'.$post->id }}"
                                       class="thumbnail">
                                        <img src="{{ $post->image }}" alt="{{ $post->name }}"></a>
                                </figure>
                                <div class="entry-content">
                                    <header>
                                        <h2 class="entry-title fon-tracked" id="bi9nopplbdqdmnd7krde"><a
                                                    href="/dich-vu/{{ $post->slug . '-'.$post->id }}">{{ $post->name }}</a></h2>
                                    </header>
                                    <div class="post-meta"><i class="fa fa-user"></i><span>{{ !empty($post->created_by) ? $post->user->name : 'Kenly Việt Nam' }} </span><i
                                                class="fa fa-eye"></i><span id="view-1">{{ $post->view_count }} lượt xem</span></div>
                                    <div class="description">
                                        {!! $post->short_desc !!}
                                        <p><a href="/dich-vu/{{ $post->slug . '-'.$post->id }}"
                                              class="btn hvr-bounce-to-left"><span
                                                        class="btn-text">Xem thêm</span><strong class="icon"><i
                                                            class="fa fa-paper-plane"></i></strong></a></p>
                                    </div>
                                </div>
                            </article>
                        </li>
                    @endforeach

                </ul>
                <div class="pager">
                        <span id="MainContent_ctl00_ListViewListContent_DataPager1"><input type="submit"
                                                                                           name="ctl00$MainContent$ctl00$ListViewListContent$DataPager1$ctl00$ctl00"
                                                                                           value="|&lt;&lt;"
                                                                                           disabled="disabled"
                                                                                           class="aspNetDisabled">&nbsp;<span>1</span>&nbsp;<input
                                    type="submit"
                                    name="ctl00$MainContent$ctl00$ListViewListContent$DataPager1$ctl02$ctl00"
                                    value=" &gt;&gt;|" disabled="disabled" class="aspNetDisabled">&nbsp;</span>
                </div>


            </div>

            @include('frontend.sidebar')
        </div>
    </section>
@endsection

@section('scripts')
    <script>
        $(document).ready(function () {
        });
    </script>
@endsection