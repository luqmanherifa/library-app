<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BorrowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 100) as $index) {
            DB::table('borrow')->insert([
                'name' => $faker->name,
                'contact' => $faker->phoneNumber,
                'book_title' => ucwords($faker->words(rand(1, 3), true)),
                'borrow_date' => $faker->date,
                'return_date' => $faker->date,
                'status' => $faker->randomElement(['Borrowing', 'Returned']),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
