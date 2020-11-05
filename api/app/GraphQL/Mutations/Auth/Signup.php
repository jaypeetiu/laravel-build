<?php

namespace App\graphql\Mutations;

use App\Models\User;
use Rebing\GraphQL\Support\Mutation;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;

class Signup
{
    
    public function resolve($rootValue, array $args)
    {
        try{

            $user = User::create([
                'name' => $args['name'],
                'email' => $args['email'],
                'password' => $args['password']
            ]);
            $user->save();
            
            return [
                'status' => 'successful',
                'message' => 'OK'
            ];
        } catch(\Throwable $th){
            throw $th;

            return [
                'status' => 'error',
            ];
        }
    }
}