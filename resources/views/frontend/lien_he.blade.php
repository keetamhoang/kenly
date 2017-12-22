@extends('frontend')

@section('styles')
    <link href="/files/css/contact.css" rel="stylesheet">
    <style>
        .alert {
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 15px;
            font-weight: bold;
            border: 1px solid;
        }

        .alert-danger {
            color: red;
        }

        .alert-success {
            color: green;
        }
    </style>
@endsection

@section('content')
    <div class="container-fluid">
        <div class="col-xs-push-12">
            <div class="maps">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.6093546337547!2d105.77872201196323!3d20.98386832973797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345333762131eb%3A0x1aaf9815b5c5da79!2zTmfDtSAxMywgTeG7mSBMYW8sIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1513778255289" ></iframe>

            </div>
        </div>
    </div>
    <section class="wrapper">
        <section class="content contact">
            <div class="container">
                <div class="row sub_content">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="dividerHeading">
                            <h4><span>Liên hệ</span></h4>
                        </div>

                        @include('flash_message')

                        <p>Trong trường hợp quý khách có bất kì thắc mắc hoặc đóng góp nào, xin vui lòng liên hệ với
                            chúng tôi theo thông tin dưới đây. Chúng tôi sẽ phản hồi lại quý khách trong thời gian
                            sớm nhất.</p>
                        <section id="contactForm">
                            <form action="{{ url('gui-lien-he') }}" method="post">
                            {{csrf_field()}}
                            <div class="row">
                                <div class="form-group">
                                    <div class="col-lg-5 ">
                                        <input name="name" type="text" id="MainContent_txtName"
                                               class="form-control" placeholder="Họ và Tên của bạn">
                                        <span id="MainContent_RequiredFieldValidator1" style="display:none;">Vui lòng điền Họ và Tên của bạn</span>
                                    </div>
                                    <div class="col-lg-7 ">
                                        <input name="email" type="text" id="txtEmail"
                                               class="form-control" placeholder="Vui lòng nhập Email của bạn.">
                                        <span id="MainContent_revEmail" style="display:none;">Địa chỉ email của bạn không hợp lệ.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <div class="col-md-5">
                                        <input name="phone" type="text"
                                               id="txtMobilePhone" class="form-control"
                                               placeholder="Số điện thoại của bạn">
                                        <span id="MainContent_RequiredFieldValidator2" style="display:none;">Vui lòng nhập tiêu đề bạn muốn liên hệ</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-7">
                                        <input name="title" type="text" id="txtSubject"
                                               class="form-control" placeholder="Vấn đề bạn muốn liên hệ">
                                        <span id="MainContent_rfvUserSubject" style="display:none;">Vui lòng nhập tiêu đề bạn muốn liên hệ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <div class="col-md-12">
                                            <textarea name="content" rows="7" cols="20"
                                                      id="MainContent_txtMessage" class="form-control"
                                                      placeholder="Nội dung liên hệ"></textarea>
                                        <span id="MainContent_RequiredFieldValidatorMessage" style="display:none;">Vui lòng không để trống nội dung</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <button id="MainContent_ButtonSend" class="btn hvr-bounce-to-left"
                                       type="submit"><span
                                                class="btn-text">Gửi liên hệ</span> <strong class="icon"><i
                                                    class="fa fa-envelope"></i></strong></button>
                                </div>
                            </div>
                            </form>
                        </section>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="sidebar">
                            <div class="widget_info">

                                <div class="dividerHeading">
                                    <h4><span>THÔNG TIN LIÊN HỆ</span></h4>
                                </div>
                                <p>Kenly Việt Nam là công ty hoạt động trong lĩnh vực kiến trúc, xây dựng, xây lắp nội thất. Đi lên từ một văn phòng thiết kế bởi những KTS trẻ, nhiệt huyết và sáng tạo. Trải qua nhiều năm dưới sự dìu dắt giúp đỡ của các KTS uy tín và giỏi trong nước và quốc tế cùng sự thử thách của thị trường về chất lượng bản vẽ và sản phẩm thi công. Kenly Việt Nam đã trở thành sự lựa chọn tin cậy đối với khách hàng, đối tác cho các công trình thiết kế và thi công trọn gói nhà phố, nhà vườn, biệt thự, nội thất cao cấp. Thiết kế của Kenly đề cao tính sáng tạo, hài hòa về phong thủy và các tiêu chí: Kỹ thuật - Công Năng - Thẩm Mĩ. Hãy đến với chúng tôi để được tư vấn kĩ càng và đưa các quyết định sáng suốt và hợp lý về ngôi nhà của bạn.</p>


                                <ul class="widget_info_contact">
                                    <li><i class="fa fa-map-marker"></i>
                                        <p><strong>Địa chỉ </strong>: Số 50, dịch vụ 06, khu đô thị Mỗ Lao, Hà Đông, Hà Nội</p>
                                    </li>
                                    <li><i class="fa fa-phone"></i>
                                        <p><strong>Điện thoại</strong><a class="phone"
                                                                          onclick="goog_report_conversion (&#39;tel:+84969485908&#39;)"
                                                                          href="tel:+84969485908">: 0969.485.908 và 0963.492.559</a></p>
                                    </li>
                                    <li><i class="fa fa-envelope"></i>
                                        <p><strong>Email</strong>: <a target="_blank" rel="nofollow"
                                                                      href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;source=mailto&amp;to=design.kenhome@gmail.com">design.kenhome@gmail.com</a>
                                        </p>
                                    </li>
                                    <li><i class="fa fa-globe"></i>
                                        <p><strong>Web</strong>: <a href="http://kenlyvietnam.vn">http://kenlyvietnam.vn</a>
                                        </p>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </section>
@endsection