'use client'
import {useForm, SubmitHandler} from "react-hook-form"
import { useState } from "react"
type formTypes = {
    name: string,
    secondName: string,
    phone: number,
    email: string,
}
const CheckoutForm = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<formTypes>()
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [secondName, setSecondName] = useState("")
    const onSubmit: SubmitHandler<formTypes> = async (data, e) =>{
        reset()
      }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[360px] ssml:w-[420px] xsml:w-[555px] sml:w-[608px] flex flex-col justify-start items-center mt-[50px] xsml:px-[40px]">
        <h1 className="text-[22px] text-black font-[600] mont">Contact Information</h1>
        <div className="flex flex-col justify-start items-start mt-[35px]">
            <p className="text-black font-[500] text-[16px] mont">Name</p>
            <input type="text" className="w-[360px] ssml:w-[420px] h-[75px] bg-none rounded-[10px] border border-black px-[25px] outline-none" 
            {...register("name", {
                required: "Enter your first name",
              })}
            onChange={e => setName(e.target.value)}
            />
            {errors?.name && <div className='text-[red] text-[11px]'>{errors.name.message}</div>}
        </div>
        <div className="flex flex-col justify-start items-start mt-[35px]">
            <p className="text-black font-[500] text-[16px] mont"> Last Name</p>
            <input 
            type="secondName" 
            className="w-[360px] ssml:w-[420px] h-[75px] bg-none rounded-[10px] border border-black px-[25px] outline-none" 
            {...register("secondName", {
                required: "Enter your last name",
              })}
            onChange={e => setSecondName(e.target.value)}
            />
        {errors?.secondName && <div className='text-[red] text-[11px]'>{errors.secondName.message}</div>}
        </div>
        <div className="flex flex-col justify-start items-start mt-[35px]">
            <p className="text-black font-[500] text-[16px] mont">Phone</p>
            <input 
            type="phone" 
            className="w-[360px] ssml:w-[420px] h-[75px] bg-none rounded-[10px] border border-black px-[25px] outline-none"
            {...register("phone", {
                required: "Enter phone number",
                pattern: {
                  value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  message: "Enter a valid phone number",
                },
              })}
              onChange={e => setPhone(e.target.value)}/>
            {errors?.phone && <div className='text-[red] text-[11px]'>{errors.phone.message}</div>}
        </div>
        <div className="flex flex-col justify-start items-start mt-[35px]">
            <p className="text-black font-[500] text-[16px] mont">Email</p>
            <input
            type='email'
            {...register("email", {
              required: "Enter Email",
              pattern: {
                value:
                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: "Enter a valid Email",
              },
            })}
            onChange={e => setEmail(e.target.value)}
            className="w-[360px] ssml:w-[420px] h-[75px] bg-none rounded-[10px] border border-black px-[25px] outline-none" />
            {errors?.email && <div className='text-[red] text-[11px]'>{errors.email.message}</div>}
        </div>
        <button className="border border-black w-[360px] ssml:w-[420px] h-[64px] bg-none rounded-[15px] mt-[40px]"><p className="text-[20px] font-[400] mont text-[black]">Submit</p></button>
    </form>
  )
}

export default CheckoutForm