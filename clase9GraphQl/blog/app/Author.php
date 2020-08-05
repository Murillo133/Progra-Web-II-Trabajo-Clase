<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = ['name', 'birth_date', 'genre', 'nationality'];

    public function posts()
    {
        return $this->hasMany('App\Post');
    }
}
