<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $table = "todos";

    protected $casts = [
        'completed' => 'boolean',
    ];
}
