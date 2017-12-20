<div class="col-md-4">
    <aside class="sidebar fadeInRight visible"
           style="visibility: visible; animation-name: fadeInRight;">
        <header>
            <h3>THIẾT KẾ XÂY DỰNG</h3>
        </header>
        <ul class="vertical-menu">
            @php $categories = \App\Models\Category::whereNotNull('parent_id')->get() @endphp

            @foreach($categories as $category)
                <li><a href="/du-an/{{ $category->slug }}">{{ $category->name }}</a></li>
            @endforeach
        </ul>
    </aside>
    <aside class="sidebar fadeInRight visible"
           style="visibility: visible; animation-name: fadeInRight;">
        <header>
            <h3>Tư vấn</h3>
        </header>
        <div class="block-content support">

            <div class="item clearfix">
                <div class="thumbnail">
                    <img src="/files/images/logo.jpg">
                </div>
                <div>
                    <h5>Nguyễn Luân</h5>
                    <p><i class="fa fa-phone-square" aria-hidden="true"></i><a class="phone"
                                                                               onclick="goog_report_conversion (&#39;tel:+84969485908&#39;)"
                                                                               href="tel:+84969485908">0969.485.908 và 0963.492.559</a>
                    </p>
                    <p class="email"><i class="fa fa-envelope-o"></i> <a target="_blank" rel="nofollow"
                                                                         href="mailto:design.kenhome@gmail.com">design.kenhome@gmail.com</a>
                    </p>
                    <p><i class="fa fa-facebook"></i> <a target="_blank" rel="nofollow"
                                                         title="Kích vào đây để liên hệ với chúng tôi bằng Facebook"
                                                         href="https://www.facebook.com/messages/t/nguyen.luan.777">Kích
                            vào để chat</a></p>
                </div>
            </div>

        </div>
    </aside>
    <aside class="sidebar video fadeInRight visible"
           style="visibility: visible; animation-name: fadeInRight;">
        <header>
            <h3>Video nổi bật</h3>
        </header>
        <div class="video-container" id="ytvideo">
            <iframe width="360" height="203" src="https://www.youtube.com/embed/XOvqytCFlx8?&amp;rel=0" allowfullscreen=""></iframe>
        </div>
        <div class="nano has-scrollbar">
            <div class="nano-content" tabindex="0" style="right: -17px;">

                <ul class="list-video list">


                    <li class="currentvideo"><a rel="nofollow"
                                                href="https://www.youtube.com/watch?v=XOvqytCFlx8&amp;t=14s">Đẹp
                            ngỡ ngàng nhà phố 2 mặt tiền</a></li>

                    <li><a rel="nofollow" href="https://www.youtube.com/watch?v=J9yz-7s052U">45 mẫu nhà
                            cấp 4 nhỏ đẹp, kiến trúc độc, lạ năm 2016</a></li>

                    <li><a rel="nofollow" href="https://www.youtube.com/watch?v=A3yHzHyvRJk">Tư vấn
                            thiết kế kiến trúc nhà ống 2,3 tầng đẹp và hiện đại</a></li>

                </ul>
            </div>
            <div class="nano-pane">
                <div class="nano-slider" style="height: 88px; transform: translate(0px, 0px);"></div>
            </div>
        </div>
    </aside>
    <aside class="sidebar fadeInRight visible"
           style="visibility: visible; animation-name: fadeInRight;">
        <header>
            <h3>Dự án nổi bật</h3>
        </header>
        <ul class="list-entry">
            @php $highlights = \App\Models\Post::where('is_highlight', 1)->orderBy('created_at', 'desc')->limit(10)->get() @endphp

            @foreach($highlights as $highlight)
                <li class="clearfix">
                    <article class="entry-item entry-hover">
                        <div class="entry-thumb"><a
                                    href="{{ url('chi-tiet/'.$highlight->slug.'-'.$highlight->id) }}">
                                <img src="{{ $highlight->image }}"
                                     alt="{{ $highlight->name }}"></a>
                        </div>
                        <h4 class="entry-title"><a
                                    href="{{ url('chi-tiet/'.$highlight->slug.'-'.$highlight->id) }}">{{ $highlight->name }}</a></h4>
                        <div class="post-meta"><i class="fa fa-calendar"></i>
                            <time>{{ \Carbon\Carbon::parse($highlight->created_at)->format('H:i d/m/Y') }}</time>
                        </div>
                    </article>
                </li>
            @endforeach
        </ul>
    </aside>

    {{--<aside class="row banner-sidebar fadeInRight visible"--}}
           {{--style="visibility: visible; animation-name: fadeInRight;">--}}

        {{--<p class="col-md-12 col-sm-6">--}}
            {{--<a rel="nofollow" href="http://thietkenhakasai.com/dich-vu-2/Default.aspx" target="_blank">--}}
                {{--<img src="./files/images/links-1.jpg" alt="nhà phố 3 tầng hiện đại"></a>--}}
        {{--</p>--}}

        {{--<p class="col-md-12 col-sm-6">--}}
            {{--<a rel="nofollow" href="https://www.youtube.com/watch?v=XOvqytCFlx8&amp;t=14s"--}}
               {{--target="_blank">--}}
                {{--<img src="./files/images/links-2.png" alt="nhà phố 2 tầng hiện đại"></a>--}}
        {{--</p>--}}

    {{--</aside>--}}
</div>