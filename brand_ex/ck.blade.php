@foreach($discounts as $discount)
    <tr>
        <td> {{ $discount->name }} </td>
        <td> {{ $discount->discount }} </td>
    </tr>
@endforeach