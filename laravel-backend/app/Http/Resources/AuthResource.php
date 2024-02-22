<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Customer;
class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $inputCred = $request->post();
        $customer = Customer::where('email',$inputCred['email'])->first();
        if($customer){
            if($this->Auth($inputCred,$customer)){
                $cusData = $this->getCustomerData($customer);
                return ['status'=>'200','data'=>$cusData];
            }else{
                return ['status'=>'401','error'=>'Invalid Credentials','data'=>[]];
            }
        }else{
            return ['status'=>'404','error'=>'Email is not registered','data'=>[]];
        }
    }
    public function Auth($credentials,$customer){
        if($customer->password == $credentials['password']){
            return true;
        }else{
            return false;
        }
    }
    public function getCustomerData($customer){
        return [
            'first_name' => $customer->first_name,
            'last_name' => $customer->last_name,
            'contact' => $customer->contact,
            'email' => $customer->email
        ];
    }
}
