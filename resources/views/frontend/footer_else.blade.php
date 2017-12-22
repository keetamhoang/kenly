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
{{--<div class="note">--}}
    {{--<i class="fa fa-tags"></i><strong> Chủ đề: </strong><a--}}
            {{--title="Những bài viết liên quan đến: Nhà cấp 4"--}}
            {{--href="http://thietkenhakasai.com/tag/nha-cap-4.aspx">Nhà cấp 4</a>, <a--}}
            {{--title="Những bài viết liên quan đến: nhà đẹp 2 mặt tiền"--}}
            {{--href="http://thietkenhakasai.com/tag/nha-dep-2-mat-tien.aspx">nhà đẹp 2 mặt tiền</a>, <a--}}
            {{--title="Những bài viết liên quan đến: Nhà Phố"--}}
            {{--href="http://thietkenhakasai.com/tag/nha-pho.aspx">Nhà Phố</a>--}}
{{--</div>--}}
<div id="MainContent_pCorrelative" class="recentposts list-entry other">

    <h2 class="recentposts-title fadeInDown visible fon-tracked" id="xt1j6aiayzepgygrf60s4"
        style="visibility: visible; animation-name: fadeInDown;">Liên quan</h2>
    <ul class="row fadeInUp visible" style="visibility: visible; animation-name: fadeInUp;">
        @php $relas = \App\Models\Post::where('category_id', $post->category_id)->inRandomOrder()->limit(8)->get() @endphp

        @foreach($relas as $rela)
            <li class="col-sm-6">
                <article class="entry-item entry-hover clearfix">
                    <div class="entry-thumb">
                        <a href="{{ url('chi-tiet/'.$rela->slug.'-'.$rela->id) }}">
                            <img src="{{ $rela->image }}"
                                 alt="{{ $rela->name }}">
                        </a>
                    </div>
                    <div class="entry-content">
                        <h3 class="entry-title"><a
                                    href="{{ url('chi-tiet/'.$rela->slug.'-'.$rela->id) }}">{{ $rela->name }}</a></h3>
                        <div class="post-meta"><i class="fa fa-calendar"></i>
                            <time>{{ \Carbon\Carbon::parse($rela->created_at)->format('H:i d/m/Y') }}</time>
                            <i class="fa fa-eye"></i><span>{{ $rela->view_count }}</span></div>
                    </div>
                </article>
            </li>
        @endforeach

    </ul>

</div>