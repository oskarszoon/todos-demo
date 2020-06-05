<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function getAll(Request $request)
    {
        $userId = $request->get('userId');
        return response()->json(Todo::where('user_id', $userId)->orderBy('id', 'desc')->get());
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'title' => 'required'
        ]);

        $todo = Todo::create([
            'title' => $request->get('title'),
            'user_id' => $request->get('userId'),
        ]);

        return response()->json($todo, 201);
    }

    public function update($id, Request $request)
    {
        $todo = Todo::where([
            'id' => $id,
            'user_id' => $request->get('userId')
        ])->firstOrFail();
        $todo->update($request->all());

        return response()->json($todo, 200);
    }

    public function delete($id, Request $request)
    {
        Todo::where([
            'id' => $id,
            'user_id' => $request->get('userId')
        ])->firstOrFail()->delete();

        return response('Deleted Successfully', 200);
    }
}
