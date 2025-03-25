'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import cart from "@/assets/cart.svg"
import logo from "@/assets/logo.png"
import { useState, useEffect } from 'react'
import { useAuth } from '@/app/AuthContext'
import './Header.css' 

const Header = () => {
  const router = useRouter()
  const [cartCount, setCartCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isLoggedIn, logout } = useAuth()

  const updateCartCount = () => {
    const products = JSON.parse(localStorage.getItem('products') || '[]')
    const totalCount = products.reduce((acc: number, item: any) => acc + item.count, 0)
    setCartCount(totalCount)
  }

  useEffect(() => {
    updateCartCount()
    window.addEventListener('storage', updateCartCount)
    const interval = setInterval(updateCartCount, 1000)
    return () => {
      window.removeEventListener('storage', updateCartCount)
      clearInterval(interval)
    }
  }, [])

  const goToCart = () => router.push("/cart")
  const goToMain = () => router.push("/")
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <>
      <header className='main__container h-[100px] flex flex-row justify-between items-center px-[10px] py-[20px] mm:px-[54px] bg-white shadow-md'>
        <div className='flex flex-row items-center cursor-pointer' onClick={goToMain}>
          <Image src={logo} alt='logo' className='w-[50px] h-[32px]' />
          <h1 className='hidden text-[20px] mont font-[600] ml-[8px] sml:flex s:text-[28px] text-gray-800'>
            Accessories
          </h1>
        </div>

        <nav className='hidden md:flex flex-row items-center gap-8'>
          <Link className='mont font-[500] text-[17px] text-gray-700 custom-underline' href="/">Home</Link>
          <Link className='mont font-[500] text-[17px] text-gray-700 custom-underline' href="/shop">Shop</Link>
          <Link className='mont font-[500] text-[17px] text-gray-700 custom-underline' href="/about">Contacts</Link>
          <Link className='mont font-[500] text-[17px] text-gray-700 custom-underline' href="/signup">Signup</Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className='mont font-[500] text-[17px] text-red-600 custom-underline'
            >
              Logout
            </button>
          ) : (
            <Link className='mont font-[500] text-[17px] text-gray-700 custom-underline' href="/login">Login</Link>
          )}
        </nav>

        <div className='flex flex-row items-center gap-6'>
          <div onClick={goToCart} className='relative flex items-center cursor-pointer group'>
            <Image
              src={cart}
              alt='cart'
              className='w-[22px] h-[22px] group-hover:w-[25px] group-hover:h-[25px] transition-all duration-300'
            />
            {cartCount > 0 && (
              <span className='absolute top-[-12px] right-[-12px] bg-red-600 text-white text-[12px] font-bold rounded-full w-[20px] h-[20px] flex items-center justify-center shadow-md'>
                {cartCount}
              </span>
            )}
          </div>

          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className='focus:outline-none'>
              <svg className='w-8 h-8 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <nav className='md:hidden flex flex-col items-center bg-white shadow-lg absolute top-[100px] left-0 w-full z-10 transition-all duration-300 ease-in-out'>
          <Link className='mont font-[500] text-[17px] text-gray-700 hover:bg-gray-100 custom-underline py-3 w-full text-center' href="/" onClick={toggleMenu}>Home</Link>
          <Link className='mont font-[500] text-[17px] text-gray-700 hover:bg-gray-100 custom-underline py-3 w-full text-center' href="/shop" onClick={toggleMenu}>Catalog</Link>
          <Link className='mont font-[500] text-[17px] text-gray-700 hover:bg-gray-100 custom-underline py-3 w-full text-center' href="/about" onClick={toggleMenu}>Contacts</Link>
          <Link className='mont font-[500] text-[17px] text-gray-700 hover:bg-gray-100 custom-underline py-3 w-full text-center' href="/signup" onClick={toggleMenu}>Signup</Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout()
                toggleMenu()
              }}
              className='mont font-[500] text-[17px] text-red-600 hover:bg-gray-100 custom-underline py-3 w-full text-center'
            >
              Logout
            </button>
          ) : (
            <Link className='mont font-[500] text-[17px] text-gray-700 hover:bg-gray-100 custom-underline py-3 w-full text-center' href="/login" onClick={toggleMenu}>Login</Link>
          )}
        </nav>
      )}
    </>
  )
}

export default Header