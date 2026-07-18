import React, { Fragment, useState } from 'react'
import { Link } from 'react-router'

const ForgetPassword = () => {
  const [method, setMethod] = useState('mobile')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')

  const isMobile = method === 'mobile'

  let fieldLabel = 'Email address'
  let toggleText = 'Use mobile instead'
  if (isMobile) {
    fieldLabel = 'Mobile number'
    toggleText = 'Use email instead'
  }

  const handleToggle = () => {
    if (isMobile) {
      setMethod('email')
    } else {
      setMethod('mobile')
    }
  }

  const handleSendCode = () => {
    console.log('Send reset code to:', isMobile ? mobile : email)
  }

  let inputField = (
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="you@example.com"
      className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:border-[#C8643C]"
    />
  )
  if (isMobile) {
    inputField = (
      <div className="flex items-center border border-gray-300 rounded-2xl px-5 py-4 focus-within:border-[#C8643C]">
        <span className="text-lg font-semibold text-[#333333] mr-3">+91</span>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="98765 43210"
          maxLength={11}
          className="w-full text-lg outline-none placeholder:text-gray-400"
        />
      </div>
    )
  }

  return (
    <Fragment>

    <nav className="flex p-2.5 bg-white shadow-sm">
      <Link to="/" className="text-4xl font-bold ml-4 m-2.5">
          <span className="text-[#333333]">hunar</span>
          <span className="text-[#C8643C]">hub</span>
        </Link>
    </nav>

    <div className="min-h-screen bg-[#FAF5EB] px-4 py-12 mt-10.5">
        
      <div className="max-w-[560px] mx-auto">
        <Link to="/" className="block w-fit mx-auto text-4xl font-bold">
          <span className="text-[#333333]">hunar</span>
          <span className="text-[#C8643C]">hub</span>
        </Link>

        <div className="bg-white rounded-3xl ml-14 w-[460px] shadow-sm p-8 mt-10">
          <h1 className="text-3xl font-bold text-[#333333]">
            Forgot your password?
          </h1>
          <p className="text-gray-400 text-lg mt-3 ">
            No worries — enter the mobile number or email on your account and
            we'll send a reset code.
          </p>

          <div className="flex justify-between items-center mt-17">
            <label className="text-lg font-semibold text-[#333333]">
              {fieldLabel}
            </label>
            <button
              onClick={handleToggle}
              className="text-[#C8643C] font-semibold cursor-pointer"
            >
              {toggleText}
            </button>
          </div>

          <div className="mt-3">{inputField}</div>

          <button
            onClick={handleSendCode}
            className="w-full bg-[#C8643C] text-white text-xl font-semibold rounded-2xl py-4 mt-8 cursor-pointer hover:bg-[#b5562f]"
          >
            Send reset code
          </button>
        </div>

        <p className="text-center text-gray-500 text-lg mt-8">
          Remembered it?{' '}
          <Link to="/signin" className="text-[#C8643C] font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
    </Fragment>
  )
}

export default ForgetPassword




