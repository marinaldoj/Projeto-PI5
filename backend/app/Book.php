<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $guard = [];

    protected $appends = ['links'];

    public function getLinksAttribute(): array
    {
        return [
            'file' => url('/storage/books/' . $this->archive_path),
            'cover' => url('/storage/books/' . $this->cover_path),
        ];
    }
}
