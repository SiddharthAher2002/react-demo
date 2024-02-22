<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $first_name = fake()->firstName();
        return [
            'first_name' => $first_name,
            'last_name' => fake()->lastName(),
            'contact' => fake()->numberBetween(7000000000,9999999999),
            'email' => fake()->unique()->safeEmail(),
            'password' => $first_name.'@123',
            'created_at' => fake()->dateTime('now'),
            'updated_at' => fake()->dateTime('now'),
        ];
    }
}
