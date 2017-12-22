<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $fillable = [
        'name', 'short_desc', 'desc', 'slug', 'created_by', 'view_count', 'phone', 'category_id', 'image', 'status', 'type', 'is_highlight'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'created_by', 'id');
    }
}
