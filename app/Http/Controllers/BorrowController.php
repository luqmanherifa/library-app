<?php

namespace App\Http\Controllers;

use App\Models\Borrow;
use Illuminate\Http\Request;

class BorrowController extends Controller
{
    public function index()
    {
        $borrow = Borrow::paginate(10);
        return response()->json($borrow);
    }

    public function search(Request $request)
    {
        $searchQuery = $request->input('search');

        $query = Borrow::query();

        if (!empty($searchQuery)) {
            $query->where(function ($q) use ($searchQuery) {
                $q->where('id', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('name', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('contact', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('book_title', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('borrow_date', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('return_date', 'LIKE', '%' . $searchQuery . '%')
                    ->orWhere('status', 'LIKE', '%' . $searchQuery . '%');
            });
        }

        $borrow = $query->paginate(10);

        return response()->json($borrow);
    }

    public function detail($slug_borrow)
    {
        $borrow = Borrow::where('slug_borrow', $slug_borrow)->first();

        if (!$borrow) {
            return response()->json(['message' => 'Borrow data not found.'], 404);
        }

        return response()->json(['data' => $borrow]);
    }

    public function show($id)
    {
        $borrow = Borrow::find($id);

        if (!$borrow) {
            return response()->json(['message' => 'Borrow data not found.'], 404);
        }

        return response()->json(['data' => $borrow]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'contact' => 'required|string',
            'book_title' => 'required|string',
            'borrow_date' => 'required|date',
            'return_date' => 'required|date',
            'status' => 'required|in:Borrowing,Returned',
        ]);

        $borrow = Borrow::create($validatedData);

        return response()->json(['message' => 'Borrow data successfully saved.', 'data' => $borrow], 201);
    }

    public function update(Request $request, $id)
    {
        $borrow = Borrow::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string',
            'contact' => 'required|string',
            'book_title' => 'required|string',
            'borrow_date' => 'required|date',
            'return_date' => 'required|date',
            'status' => 'required|in:Borrowing,Returned',
        ]);

        $borrow->update($validatedData);

        return response()->json(['message' => 'Borrow data successfully updated.', 'data' => $borrow]);
    }

    public function destroy($id)
    {
        $borrow = Borrow::find($id);

        if (!$borrow) {
            return response()->json(['message' => 'Borrow data not found.'], 404);
        }

        $borrow->delete();

        return response()->json(['message' => 'Borrow data successfully deleted.']);
    }
}
