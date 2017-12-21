<footer class="fadeInLeft visible" style="visibility: visible; animation-name: fadeInLeft;">
    <div class="row">
        <div class="col-xs-4 share-post">

            <div class="fb-like" data-href="{{ url('chi-tiet/' . $post->slug . '-' . $post->id) }}" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
            <div class="g-plusone" data-size="medium"></div>
        </div>
        <div class="col-xs-8 post-meta"><i class="fa fa-user"></i><span>{{ !empty($post->created_by) ? $post->created_by : 'Kenly Việt Nam' }}</span> <i
                    class="fa fa-calendar"></i><span>{{ \Carbon\Carbon::parse($post->created_at)->format('H:i d/m/Y') }}</span> <i
                    class="fa fa-eye"></i><span>{{ $post->view_count }} lượt xem</span></div>
    </div>
    <div class="fb-comments" data-href="{{ url('chi-tiet/' . $post->slug . '-' . $post->id) }}" data-width="100%" data-numposts="8"></div>
    </div>
</footer>