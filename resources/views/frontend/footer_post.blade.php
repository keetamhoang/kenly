<footer class="fadeInLeft visible" style="visibility: visible; animation-name: fadeInLeft;">
    <div class="row">
        <div class="col-xs-4 share-post">
            <div class="fb-like fb_iframe_widget"
                 data-href="{{ url('chi-tiet/' . $post->slug . '-' . $post->id) }}"
                 data-layout="button_count" data-action="like" data-show-faces="true"
                 data-share="true" fb-xfbml-state="rendered"
                 fb-iframe-plugin-query="action=like&amp;app_id=1317643348321872&amp;container_width=230&amp;href=http%3A%2F%2Fthietkenhakasai.com%2Fnha-pho-3%2Fnha-pho-3-tang-mang-phong-cach-hien-dai-am-cung-voi-chi-phi-900-trieu-47.aspx&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;show_faces=true">
                                        <span style="vertical-align: bottom; width: 122px; height: 20px;"><iframe
                                                    name="f7f54ed8178a48" width="1000px" height="1000px" frameborder="0"
                                                    allowtransparency="true" allowfullscreen="true" scrolling="no"
                                                    title="fb:like Facebook Social Plugin"
                                                    src="./files/like.html"
                                                    style="border: none; visibility: visible; width: 122px; height: 20px;"
                                                    class=""></iframe></span></div>
            <div class="g-plusone" data-size="medium"></div>
        </div>
        <div class="col-xs-8 post-meta"><i class="fa fa-user"></i><span>{{ !empty($post->created_by) ? $post->created_by : 'Kenly Việt Nam' }}</span> <i
                    class="fa fa-calendar"></i><span>{{ \Carbon\Carbon::parse($post->created_at)->format('H:i d/m/Y') }}</span> <i
                    class="fa fa-eye"></i><span>{{ $post->view_count }} lượt xem</span></div>
    </div>
    <div class="fb-comments fb_iframe_widget"
         data-href="http://thietkenhakasai.com/nha-pho-3/nha-pho-3-tang-mang-phong-cach-hien-dai-am-cung-voi-chi-phi-900-trieu-47.aspx"
         data-numposts="5" fb-xfbml-state="rendered"><span style="height: 176px; width: 550px;"><iframe
                    id="f3a855391bad3bc" name="f3e3d33c97b858c" scrolling="no"
                    title="Facebook Social Plugin" class="fb_ltr"
                    src="./files/comments.html"
                    style="border: none; overflow: hidden; height: 176px; width: 550px;"></iframe></span>
    </div>
</footer>