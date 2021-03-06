<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function save(Request $request)
    {
        $todo = new Todo();
        $todo->label = $request->label;
        $todo->completed = false;
        $todo->save();

        return 1;
    }

    public function update($id, Request $request)
    {
        $todo = Todo::findOrFail($id);
        $todo->label = $request->label;
        $todo->completed = $request->completed;
        $todo->save();

        return 1;
    }

    public function delete($id)
    {
        Todo::findOrFail($id)->delete();
        return 1;
    }

    public function todos()
    {
        return Todo::where('completed', false)->get();
    }

    public function completed()
    {
        return Todo::where('completed', true)->get();
    }
}
