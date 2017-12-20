@extends('frontend')

@section('styles')
    <link href="/files/css/Other.css" rel="stylesheet">
@endsection

@section('content')
    <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 id="62heekvgcju2dspi5kck" class="fon-tracked">PHONG CÁCH SỐNG</h1>
                </div>

                <section class="breadcrumb col-md-6">
                    <a class="home" href="{{ url('/') }}"><span itemprop="title">Trang chủ</span></a>
                    <span>&nbsp;<i class="fa fa-angle-right"></i>&nbsp;</span><span><span itemprop="title">Phong cách sống</span></span>
                </section>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="col-md-8">

                <h2 id="ozj2gw5uuehngv057stsn" class="fon-tracked">Chúng tôi đang xây dựng nội dung</h2>

            </div>

            @include('frontend.sidebar')

        </div>
    </section>


@endsection