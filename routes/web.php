<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SupplierController;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard2', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/dashboard', function () {
    return inertia('Dashboard/Index');
})->name('dashboard.index');
Route::get('/products', function () {
    return inertia('Dashboard/Index');
})->name('products.index');
Route::get('/inventory', function () {
    return inertia('Dashboard/Index');
})->name('inventory.index');
Route::resource('/categories', CategoryController::class)
    ->middleware([
        'categories.store' => HandlePrecognitiveRequests::class
    ]);
Route::resource('/suppliers', SupplierController::class)
    ->middleware([
        'suppliers.store' => HandlePrecognitiveRequests::class
    ]);
Route::get('/discounts', function () {
    return inertia('Dashboard/Index');
})->name('discounts.index');
Route::get('/monitoring', function () {
    return inertia('Dashboard/Index');
})->name('monitoring.index');
Route::get('/reports', function () {
    return inertia('Dashboard/Index');
})->name('reports.index');
Route::get('/staff', function () {
    return inertia('Dashboard/Index');
})->name('staff.index');
Route::get('/settings', function () {
    return inertia('Dashboard/Index');
})->name('settings.index');

require __DIR__.'/auth.php';
