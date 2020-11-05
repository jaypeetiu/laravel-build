<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SignupTest extends TestCase
{
    use RefreshDatabase, MakesGraphQLRequests;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /** @test */
    public function user_signup()
    {
        $response = $this->graphQL(
            /** @lang GraphQL */
            '
            mutation Signup($input: SignupInput) {
                signup(input: $input) {
                    status
                    message
                }
            }
        ',
            [
                'input' => [
                    'name' => 'Test',
                    'email' => 'test@test.com',
                    'password' => 'toor'
                ],
            ]
        );
        $response->assertJsonStructure([
            'data' => [
                'signup' => [
                    'status',
                    'message',
                ],
            ],
        ]);
    }
}
