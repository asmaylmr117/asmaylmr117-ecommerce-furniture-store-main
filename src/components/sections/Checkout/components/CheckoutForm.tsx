'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"

interface FormTypes {
  name: string;
  secondName: string;
  phone: string;
  email: string;
}

const CheckoutForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormTypes>()
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [secondName, setSecondName] = useState<string>("")
  const [successMessage, setSuccessMessage] = useState<string>("")

  const botToken: string = '7227389692:AAH1WjqnYs_DYeHPd6TM-B_0XnC1Pfshuf0'
  const chatId: string = '6395634863'

  const onSubmit: SubmitHandler<FormTypes> = async (data) => {
    try {
      const message: string = `
New Form Submission:
Name: ${data.name}
Last Name: ${data.secondName}
Phone: ${data.phone}
Email: ${data.email}
            `

      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      )

      if (response.ok) {
        setSuccessMessage("Form submitted successfully!")
        reset()
        setTimeout(() => setSuccessMessage(""), 3000)
      } else {
        throw new Error("Failed to send message to Telegram")
      }
    } catch (error) {
      console.error("Error sending to Telegram:", error)
      setSuccessMessage("Failed to submit form. Please try again.")
      setTimeout(() => setSuccessMessage(""), 3000)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[320px] xs:w-[360px] sm:w-[400px] flex flex-col justify-start items-center mt-[40px] px-[10px] sm:px-[20px] md:ml-[40px] lg:ml-[60px] md:mr-[40px] lg:mr-[60px]"
      >
        <h1 className="text-[20px] sm:text-[22px] text-black font-[600] mont">Contact Information</h1>
        <div className="flex flex-col justify-start items-start mt-[25px] w-full">
          <p className="text-black font-[500] text-[14px] sm:text-[16px] mont">Name</p>
          <input
            type="text"
            className="w-full h-[60px] bg-none rounded-[8px] border border-black px-[15px] outline-none text-[14px]"
            {...register("name", {
              required: "Enter your first name",
            })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          {errors?.name && <div className="text-[red] text-[10px] mt-[5px]">{errors.name.message}</div>}
        </div>
        <div className="flex flex-col justify-start items-start mt-[25px] w-full">
          <p className="text-black font-[500] text-[14px] sm:text-[16px] mont">Last Name</p>
          <input
            type="text"
            className="w-full h-[60px] bg-none rounded-[8px] border border-black px-[15px] outline-none text-[14px]"
            {...register("secondName", {
              required: "Enter your last name",
            })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecondName(e.target.value)}
          />
          {errors?.secondName && <div className="text-[red] text-[10px] mt-[5px]">{errors.secondName.message}</div>}
        </div>
        <div className="flex flex-col justify-start items-start mt-[25px] w-full">
          <p className="text-black font-[500] text-[14px] sm:text-[16px] mont">Phone</p>
          <input
            type="tel"
            className="w-full h-[60px] bg-none rounded-[8px] border border-black px-[15px] outline-none text-[14px]"
            {...register("phone", {
              required: "Enter phone number",
              pattern: {
                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                message: "Enter a valid phone number",
              },
            })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
          />
          {errors?.phone && <div className="text-[red] text-[10px] mt-[5px]">{errors.phone.message}</div>}
        </div>
        <div className="flex flex-col justify-start items-start mt-[25px] w-full">
          <p className="text-black font-[500] text-[14px] sm:text-[16px] mont">Email</p>
          <input
            type="email"
            className="w-full h-[60px] bg-none rounded-[8px] border border-black px-[15px] outline-none text-[14px]"
            {...register("email", {
              required: "Enter Email",
              pattern: {
                value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: "Enter a valid Email",
              },
            })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          {errors?.email && <div className="text-[red] text-[10px] mt-[5px]">{errors.email.message}</div>}
        </div>
        <button className="border border-black w-full h-[50px] bg-transparent rounded-[12px] mt-[30px] hover:bg-[#B88E2F] duration-300">
          <p className="text-[16px] sm:text-[18px] font-[400] mont text-black duration-300">
            Submit
          </p>
        </button>
      </form>
      {successMessage && (
        <div
          className={`mt-[15px] text-[14px] sm:text-[16px] mont ${
            successMessage.includes("Failed") ? "text-red-500" : "text-green-500"
          } md:ml-[40px] lg:ml-[60px]`}
        >
          {successMessage}
        </div>
      )}
    </div>
  )
}

export default CheckoutForm
