import React from 'react';
import {PhoneIcon , MapPinIcon , EnvelopeIcon} from '@heroicons/react/20/solid';
import {useForm, SubmitHandler} from 'react-hook-form';

type Inputs={
    name:string,
    email:string,
    subject:string,
    message:string, 
}

type Props = {};

function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => 
    {
    window.location.href=`mailto:akhileshpujar796@gmail?subject= ${data.subject} &body=Hi, my name is 
     ${data.name},${data.message} (${data})`;
    }
  return (
    <div
    className='h-screen relative flex overflow-hidden
    flex-col md:text-left md:flex-row w-full justify-evenly 
    mx-auto items-center z-0'
    >
     <h3 className='absolute  uppercase
    tracking-[20px] text-2xl top-20 text-gray-500'>
        Contact
     </h3>
     <div className='flex flex-col space-y-0 mt-[50px]'>
        <h4 className='text-4xl font-semibold text-center'> 
        {" "}
            <span className='decoration-[#F7AB0A]/50 underline'>
                Let's Talk
            </span>
        </h4>
        <div className='space-y-7 '>
            <div className='flex items-center space-x-4  justify-center'>
            <PhoneIcon className='text-[#597ae8] h-7 w-7 animate-pulse '/>
            <p className='text-2xl'>+91 9110852088</p>
            </div>

            <div className='flex items-center space-x-4 justify-center'>
            <EnvelopeIcon className='text-[#f6644a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>akhileshpujar796@gmail.com</p>
            </div>

            <div className='flex items-center space-x-4 justify-center'>
            <MapPinIcon className='text-[#24a62c] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Pune,India</p>
            </div>

        </div>

        
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-4 w-fit  space-x-1 shadow-md my-4 shadow-red-500 p-3 '>

            <div className='flex space-x-2 '>
                <input {...register('name')} className='contactInput hover:text-white' type="text" placeholder='Enter Your Name'/>
                <input {...register('email')} className='contactInput hover:text-blue-400'type="email" placeholder='Mail'/>
            </div>
            <input {...register('subject')} className='contactInput hover:text-green-500'type="text" placeholder='Subject'/>

            <textarea {...register('message')} className='contactInput hover:text-yellow-500' placeholder='Message' />

            <button className='bg-[#F7AB0A] py-3 px-5 rounded-md text-black
            text-lg font-serif
            ' type='submit'> Submit</button>
                 
        </form>
     </div>

    </div>
  )
}

export default Contact