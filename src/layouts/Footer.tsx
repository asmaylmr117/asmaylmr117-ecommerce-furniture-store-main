'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

type FormTypes = {
  email: string;
};

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes>();
  const [email, setEmail] = useState('');

  const onSubmit: SubmitHandler<FormTypes> = async (data, e) => {
    console.log('Form submitted:', data); 
    reset();
  };

  return (
    <div className="main__container flex flex-col items-center justify-center mt-[50px]">
      <div className="w-full border-t border-t-[#0000002B] pt-[48px] flex flex-col px-[25px] med:flex-row med:justify-between ipad:px-[100px]">
        <div className="flex flex-col">
          <h1 className="text-[black] text-[21px] mont font-[700]">Furnitura.ru</h1>
          <p className="text-[#9F9F9F] mont text-[16px] font-[400] mt-[35px]">
            Saint Petersburg,
            <br />
            Marshal Blucher Avenue, 8k1,
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#9F9F9F] text-[16px] mont font-[500] mt-[35px]">Links</h1>
          <Link href="/" className="text-black mont text-[16px] font-[500] mt-[35px] hover:underline duration-300">
            Home
          </Link>
          <Link href="/shop" className="text-black mont text-[16px] font-[500] mt-[35px] hover:underline duration-300">
            Products
          </Link>
          <Link href="/about" className="text-black mont text-[16px] font-[500] mt-[35px] hover:underline duration-300">
            Contacts
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-start">
          <h1 className="text-[#9F9F9F] text-[16px] mont font-[500] mt-[35px]">Contact Us</h1>
          <input
            type="email"
            {...register('email', {
              required: 'Enter Email',
              pattern: {
                value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: 'Enter a valid Email',
              },
            })}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="border-b border-b-[black] w-[200px] mt-[15px] text-[#9F9F9F] text-[14px] mont font-[300] outline-none h-[40px]"
            suppressHydrationWarning 
          />
          {errors?.email && <div className="text-[red] text-[11px]">{errors.email.message}</div>}
          <button
            type="submit"
            className="bg-none mt-[10px] hover:underline"
            suppressHydrationWarning 
          >
            Send
          </button>
        </form>
      </div>
      <p className="text-[16px] font-[400] text-black my-[38px] border-t border-t-[#0000002B] w-[90%] pt-[35px]">
        2024 Furnitura.ru
      </p>
    </div>
  );
};

export default Footer;