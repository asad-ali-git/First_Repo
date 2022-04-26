<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'password' => 'required|confirmed|min:6',
        ]);
        $request->user()->update([
            'password' => bcrypt($request->password),
        ]);

        return response()->json([
            'message' => 'Password updated successfully',
            'success' => true,
        ], 200);
    }
}