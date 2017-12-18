@extends('admin')

@section('content')
    <h3 class="h3-title">Sửa thương hiệu</h3>

    @include('flash_message')

    <form action="{{ url('admin/brands/update') }}" class="form-horizontal" method="post" enctype="multipart/form-data">
        {{csrf_field()}}
        <div class="form-body">
            <input type="hidden" name="id" value="{{ $brand->id }}">
            <div class="form-group">
                <label class="col-md-3 control-label">Tên thương hiệu</label>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Điền tên thương hiệu" name="name" value="{{ $brand->name }}">
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">Link</label>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Điền link website" name="link" value="{{ $brand->link }}">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-md-3">Ảnh</label>
                <div class="col-md-9">
                    <div class="fileinput fileinput-new" data-provides="fileinput">
                        <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                            <img src="{{ !empty($brand->image) ? $brand->image :  'http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image'}}" alt="" /> </div>
                        <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 400px; max-height: 500px;"> </div>
                        <div>
                                                                <span class="btn default btn-file">
                                                                    <span class="fileinput-new"> Chọn ảnh </span>
                                                                    <span class="fileinput-exists"> Thay đổi </span>
                                                                    <input type="file" name="image"> </span>
                            <a href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput"> Xóa </a>
                        </div>
                    </div>
                    <div class="clearfix margin-top-10"></div>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-3 control-label">Chiết khấu theo ngành hàng</label>
                <div class="col-md-6">
                    <table class="table table-hover table-striped table-bordered discount-category" style="margin-bottom: 5px;">

                        <tbody>
                        <tr style="background: red;color: #fff;">
                            <td class="col-md-6" style="text-align: center;font-weight: bold;">
                                Ngành hàng
                            </td>
                            <td class="col-md-3" style="text-align: center;font-weight: bold;">
                                Chiết khấu cho khách (%)
                            </td>
                            <td class="col-md-3" style="text-align: center;font-weight: bold;">
                                Chiết khấu thực (%)
                            </td>
                        </tr>

                        @php $discountCategories = \App\Components\Functions::getCkBuyBrandId($brand->id) @endphp

                        @if (count($discountCategories))
                            @foreach($discountCategories as $discount)
                                <tr>
                                    <td class="col-md-6">
                                        <div class="form-group" style="margin: 0px;">
                                            <input type="text" class="form-control unicase-form-control text-input" name="categories[]" value="{{ $discount->name }}">
                                        </div>
                                    </td>
                                    <td class="col-md-3">
                                        <div class="form-group" style="margin: 0px;">
                                            <input type="text" class="form-control unicase-form-control text-input" name="discounts[]" value="{{ $discount->discount }}">
                                        </div>
                                    </td>
                                    <td class="col-md-3">
                                        <div class="form-group" style="margin: 0px;">
                                            <input type="text" class="form-control unicase-form-control text-input" name="discounts_real[]" value="{{ $discount->discount_real }}">
                                        </div>
                                    </td>
                                </tr>
                            @endforeach

                            <tr>
                                <td class="col-md-6">
                                    <div class="form-group" style="margin: 0px;">
                                        <input type="text" class="form-control unicase-form-control text-input" name="categories[]">
                                    </div>
                                </td>
                                <td class="col-md-3">
                                    <div class="form-group" style="margin: 0px;">
                                        <input type="text" class="form-control unicase-form-control text-input" name="discounts[]">
                                    </div>
                                </td>
                                <td class="col-md-3">
                                    <div class="form-group" style="margin: 0px;">
                                        <input type="text" class="form-control unicase-form-control text-input" name="discounts_real[]">
                                    </div>
                                </td>
                            </tr>
                        @else
                            <tr>
                                <td class="col-md-6">
                                    <div class="form-group" style="margin: 0px;">
                                        <input type="text" class="form-control unicase-form-control text-input" name="categories[]">
                                    </div>
                                </td>
                                <td class="col-md-3">
                                    <div class="form-group" style="margin: 0px;">
                                        <input type="text" class="form-control unicase-form-control text-input" name="discounts[]">
                                    </div>
                                </td>
                                <td class="col-md-3">
                                    <div class="form-group" style="margin: 0px;">
                                        <input type="text" class="form-control unicase-form-control text-input" name="discounts_real[]">
                                    </div>
                                </td>
                            </tr>
                        @endif
                        </tbody>
                    </table>
                    <div>
                        <a class="btn red btn-outline sbold uppercase" id="add-row"> Thêm dòng </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-actions">
            <div class="row">
                <div class="col-md-offset-3 col-md-9">
                    <button type="submit" class="btn green">Cập nhật</button>
                    <a type="button" class="btn default" href="{{ url('admin/brands') }}">Trở về</a>
                </div>
            </div>
        </div>
    </form>
@endsection

@section('scripts')
    <script>
        $(document).ready(function () {
            $('#add-row').click(function (e) {
                var html = '<tr>' +
                    '<td class="col-md-6">' +
                    '<div class="form-group" style="margin: 0px;">' +
                    '<input type="text" class="form-control unicase-form-control text-input" name="categories[]">' +
                    '</div>' +
                    '</td>' +
                    '<td class="col-md-3">' +
                    '<div class="form-group" style="margin: 0px;">' +
                    '<input type="text" class="form-control unicase-form-control text-input" name="discounts[]">' +
                    '</div>' +
                    '</td>' +
                    '<td class="col-md-3">' +
                    '<div class="form-group" style="margin: 0px;">' +
                    '<input type="text" class="form-control unicase-form-control text-input" name="discounts_real[]">' +
                    '</div>' +
                    '</td>' +
                    '</tr>';

                $('.discount-category').append(html);
            });
        });
    </script>
@endsection