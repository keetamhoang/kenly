<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>
        Cty TNHH Tư vấn thiết kế và xây dựng Kenly Việt Nam | kenlyvietnam.vn
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Language" content="vi">
    <meta http-equiv="content-language" content="vi">
    <link href="/files/css/Site.css"
          rel="stylesheet">
    <link href="/files/css/default.css"
          rel="stylesheet">
    <link href="/files/css/fb.css"
          rel="stylesheet">

    <link href="/css/style.css"
          rel="stylesheet">

    @yield('css')
    @yield('styles')

    <link rel="shortcut icon" type="image/x-icon" href="/files/images/favicon.ico">
    <meta property="og:site_name" content="Cty TNHH Tư vấn thiết kế và xây dựng Kenly Việt Nam">
    <meta property="og:locale" itemprop="inLanguage" content="vi_VN">
    <meta property="og:type" content="article">
    <meta name="DC.title" content="Cty TNHH Tư vấn thiết kế và xây dựng Kenly Việt Nam">
    <meta name="geo.region" content="VN-DN">
    <meta name="dc.publisher" content="Cty TNHH Tư vấn thiết kế và xây dựng Kenly Việt Nam">
    <meta name="dc.creator.name" content="Cty TNHH Tư vấn thiết kế và xây dựng Kenly Việt Nam">
    <meta name="dc.creator.email" content="vohuyhoang112@gmail.com">
    <meta name="author" content="Cty TNHH Tư vấn thiết kế và xây dựng Kenly Việt Nam">
    <meta name="copyright" content="Cty TNHH Tư vấn thiết kế và xây dựng Kenly Việt Nam">
    <meta property="og:url" content="http://kenlyvietnam.vn">
    <meta property="twitter:url" content="http://kenlyvietnam.vn">
    <meta property="og:site_name" content="kenlyvietnam.vn">
    <meta property="og:title" content="Kenly Việt Nam">
    <meta property="twitter:title" content="Kenly Việt Nam">
    <meta property="og:description"
          content="Công ty tư vấn thiết kế kiến trúc tại Việt Nam. Thiết kế và xây dựng - Kenly Tư vấn Thi công kiến trúc nội thất chung cư, biệt thự, nhà ở đẹp, nhà phố. Thi công nội thất &amp; xây dựng. Xây nhà trọn gói .">
    <meta property="twitter:description"
          content="Công ty tư vấn thiết kế kiến trúc tại Việt Nam. Thiết kế và xây dựng - Kenly Tư vấn Thi công kiến trúc nội thất chung cư, biệt thự, nhà ở đẹp, nhà phố. Thi công nội thất &amp; xây dựng. Xây nhà trọn gói .">
    <meta name="description"
          content="Thiết kế nhà đẹp tại Việt Nam. Công ty tư vấn thiết kế kiến trúc, Thiết kế và xây dựng - Kenly Tư vấn Thi công kiến trúc nội thất chung cư, biệt thự, nhà ở đẹp, nhà phố trọn gói.">

</head>
<body>

@include('header')

<div class="main-content">

    @yield('content')

</div>

@include('footer')

<script src="/files/js/jquery-1.10.2.min.js"></script>
<script src="/files/js/script.js"></script>

<script src="/files/js/default.js"></script>
<script>

    jQuery("#slider-container").wowSlider({
        effect: "brick,domino,slices,blinds",
        prev: "",
        next: "",
        duration: 20 * 100,
        delay: 20 * 100,
        width: 1920,
        height: 660,
        autoPlay: true,
        autoPlayVideo: false,
        playPause: true,
        stopOnHover: true,
        loop: true,
        bullets: 1,
        caption: false,
        captionEffect: "parallax",
        controls: true,
        controlsThumb: ["/files/images/tn-Slider1.png", "/files/images/tn-Slider2.png", "/files/images/tn-Slider3.jpg", "/files/images/tn-Slider4.jpg"]
        ,
        responsive: 2,
        fullScreen: true,
        gestures: 2,
        onBeforeStep: 0,
        images: 0
    });
</script>
<script>

    $('.slick-bolg').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(document).ready(function (e) {
        if ($('#main-menu .menu-button').length == 2) {
            $('#main-menu .menu-button:first').remove();
        }
    });
</script>

@yield('js')
@yield('scripts')
<script src="https://uhchat.net/code.php?f=8d37c8"></script>
</body>
</html>