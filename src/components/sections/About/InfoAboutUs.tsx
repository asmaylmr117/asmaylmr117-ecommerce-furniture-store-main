import Image from "next/image"
import phone from "./assets/phone.svg"
import point from "./assets/point.svg"
import clock from "./assets/clock.svg"
const InfoAboutUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-[70px]">
        <div className="w-[330px] mt-[100px] flex flex-col justify-center items-center pl-[2%]">
            <div className="flex flex-row items-start justify-start w-full">
                <Image src={point} alt="point"/>
                <div className="flex flex-col ml-[20px]">
                    <h1 className="text-[24px] text-[black] font-[500] mont">Address</h1>
                    <p className="text-[16px] text-[black] font-[400] mont">Saint Petersburg, Marshal Blucher Avenue, 8k1</p>
                </div>
            </div>
            <div className="flex flex-row items-start justify-start mt-[42px] w-full">
                <Image src={phone} alt="phone"/>
                <div className="flex flex-col ml-[20px]">
                    <h1 className="text-[24px] text-[black] font-[500] mont">Phone</h1>
                    <p className="text-[16px] text-[black] font-[400] mont">+7 (994) 139-58-77</p>
                </div>
            </div>
            <div className="flex flex-row items-start justify-start mt-[42px] w-full">
                <Image src={clock} alt="clock"/>
                <div className="flex flex-col ml-[20px]">
                    <h1 className="text-[24px] text-[black] font-[500] mont">Business Hours</h1>
                    <p className="text-[16px] text-[black] font-[400] mont">Mon-Fri: 9:00 AM - 10:00 PM</p>
                    <p className="text-[16px] text-[black] font-[400] mont">Sat-Sun: 10:00 AM - 8:00 PM</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoAboutUs