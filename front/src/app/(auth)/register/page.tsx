import React from 'react'
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

export default function register() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[550px] bg-white rounded-xl px-10 py-5 shadow-md'>
                <h1 className='text-4xl font-extrabold 
                bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center'>
                    Clash
                </h1>
                <h1 className='text-3xl font-bold mt-2'>Register</h1>
                <p>Welcome to Clash</p>
                <form action="" className='mt-4'>
                <div className='mt-4'>
                        <Label htmlFor='name'>Name</Label>
                        <Input id='name' type='text' name='name' placeholder='Enter your name...'/>
                    </div>    
                    <div className='mt-4'>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' type='email' name='email' placeholder='Enter your email...'/>
                    </div>
                    <div className='mt-4'>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' type='password' name='password' placeholder='Enter your password...'/>
                    </div>
                    <div className='mt-4'>
                        <Label htmlFor='cpassword'>Confirm Password</Label>
                        <Input id='cpassword' type='password' name='confirm_password' placeholder='Confirm your password...'/>
                    </div>
                    <div className='mt-4'>
                        <Button type='submit' className='w-full'>Submit</Button>
                    </div>
                </form>
                <p className='text-center mt-2'>Already have an account ? 
                    <strong>
                        <Link href='/login' className='text-slat-500'> Login</Link>
                    </strong>
                </p>
            </div>
        </div>
    )
}
