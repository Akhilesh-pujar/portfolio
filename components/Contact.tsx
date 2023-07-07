import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

type Props = {};

function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:akhileshpujar796@gmail?subject= ${data.subject} &body=Hi, my name is 
     ${data.name},${data.message} (${data})`;
    }
    return (
        <div
            className='h-screen relative flex overflow-hidden
    flex-col md:text-left md:flex-row w-full justify-center 
    mx-auto items-center z-0 '
        >
            <h3 className='absolute  uppercase
    tracking-[20px] text-2xl top-20 text-gray-500 text-center'>
                Contact
            </h3>
            <div className='flex flex-col mt-[80px]'>
                <h4 className='text-4xl font-semibold text-center'>
                    {" "}
                    <span className='decoration-[#F7AB0A]/50 underline text-center font-light text-teal-400'>
                        Let's Talk
                    </span>
                </h4>
                <div className='space-y-7 '>
                    <div className='flex items-center space-x-4  justify-center'>
                        <PhoneIcon className='text-[#597ae8] h-7 w-7 animate-pulse mt-4' />
                        <p className='text-2xl mt-4'>+91 9110852088</p>
                    </div>

                    <div className='flex items-center space-x-4 justify-center'>
                        <EnvelopeIcon className='text-[#f6644a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>akhileshpujar796@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-4 justify-center'>
                        <MapPinIcon className='text-[#24a62c] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Pune,India</p>
                    </div>

                </div>


                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-4  w-full shadow-md hover:shadow-blue-400 shadow-red-400 p-7 justify-center '>

                    <div className='flex space-x-6  rounded-lg sm:w-full '>
                        <input {...register('name')} className='w-full  bg-opacity-50   focus:border-indigo-500  h-18 text-base 
                     py-1 px-3 resize-none leading-6  duration-200 ease-in-out hover:text-yellow-500
                     
                      outline-none bg-slate-400/10 rounded-sm border-b
                       border-[#242424] text-gray-500 transition-all placeholder-gray-400
                      focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40   text-left' type="text" placeholder='Enter Your Name' />
                        <input {...register('email')} className='w-full  bg-opacity-50   focus:border-indigo-500  h-15 text-base 
                     py-1 px-3 resize-none leading-6  duration-200 ease-in-out hover:text-yellow-500
                     
                      outline-none bg-slate-400/10 rounded-sm border-b
                       border-[#242424] text-gray-500 transition-all placeholder-gray-400
                      focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40   text-left' type="email" placeholder='Mail' />
                    </div>
                    <input {...register('subject')} className='w-full  bg-opacity-50   focus:border-indigo-500  h-10 text-base 
                     py-1 px-3 resize-none leading-6  duration-200 ease-in-out hover:text-yellow-500
                     
                      outline-none bg-slate-400/10 rounded-sm border-b
                       border-[#242424] text-gray-500 transition-all placeholder-gray-400
                      focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40   text-left' type="text" placeholder='Subject' />

                    <textarea {...register('message')} className='w-full  bg-opacity-50   focus:border-indigo-500  h-32 text-base 
                     py-1 px-3 resize-none leading-6  duration-200 ease-in-out hover:text-yellow-500
                     
                     outline-none bg-slate-400/10 rounded-sm border-b
  border-[#242424] text-gray-500 transition-all placeholder-gray-400
  focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40   text-left
                     ' placeholder='Message' />

                    <button className='bg-[#F7AB0A] py-3 px-5 rounded-md text-black
            text-lg font-serif
            ' type='submit'> Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Contact