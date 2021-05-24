<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Book;

class BookController extends Controller
{
    public function store(Request $request){
        // if(!empty($request->file)){}
        $book = new Book;
        $book->author = $request->author;
        $book->title = $request->title;
        $book->description = $request->description;
        $book->date_publish = $request->date_publish;
        $book->nm_page = $request->nm_page;

        $pdfName = $request->file('archive_path')->storePublicly('public/books');
        $coverName = $request->file('cover_path')->storePublicly('public/books');

        $book->archive_path = basename($pdfName);
        $book->cover_path = basename($coverName);

        $book->save();
        return response()->json($book);
    }

    public function index(){
        return response()->json(Book::get());
    }

    public function show($id){
        return response()->json(Book::where('id', $id)->first());
    }

    public function update($id, Request $request){
        $book = Book::where('id', $id)->first();
        $book->author = $request->author;
        $book->title = $request->title;
        $book->description = $request->description;
        $book->date_publish = $request->date_publish;
        $book->nm_page = $request->nm_page;
        $book->save();
        return response()->json($book);
    }

    public function destroy($id){
        $book = Book::where('id', $id)->first();

        Storage::delete([
            'public/books/' . $book->archive_path,
            'public/books/' . $book->cover_path,
         ]);

        $book->delete();
        return response()->json($book);
    }
}
