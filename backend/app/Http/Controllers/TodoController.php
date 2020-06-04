<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{

    public function getAll()
    {
        return response()->json(Todo::orderBy('id', 'desc')->get());
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'title' => 'required'
        ]);

        $todo = Todo::create($request->all());

        return response()->json($todo, 201);
    }

    public function update($id, Request $request)
    {
        $todo = Todo::findOrFail($id);
        $todo->update($request->all());

        return response()->json($todo, 200);
    }

    public function delete($id)
    {
        Todo::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
