"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Join() {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('India');
  const [gender, setGender] = useState('Male');
  const [emailSignUp, setEmailSignUp] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log({
      email,
      password,
      firstName,
      lastName,
      dob,
      country,
      gender,
      emailSignUp
    });
    // Handle form submission logic (e.g., send data to an API)
  };

  return (
    <div className="w-full h-[833px] bg-white text-center text-[18px] text-[#8d8d8d] font-inter flex justify-center items-center">
      <div className="relative w-[324px] h-[833px] text-[#111]">
        {/* Image Header */}
        <div className="absolute top-[28px] left-0 w-full text-[#111]">
          <Image className="absolute top-0 left-[calc(50%-162px)] w-[324px] h-[17px] object-cover" width={324} height={17} alt="" src="/images/Frame.png" />
          <b className="absolute top-[46px] left-[46.48px] leading-[26px] flex items-center justify-center w-[231.2px] h-[31px]">BECOME A NIKE MEMBER</b>
          <div className="absolute top-[104px] left-[21.06px] text-[14px] leading-[22px] text-[#8d8d8d] flex items-center justify-center w-[282.1px] h-[60px]">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="absolute top-[210px] left-0 w-full h-[561px] text-left text-[14px]">
          {/* Agreement Text */}
          <div className="absolute top-[452px] left-0 w-full h-[59px] text-center text-[12px]">
            <div className="absolute top-[4px] left-[7.44px] leading-[16px] flex items-center w-[309.3px] h-[30px]">
              <span className="w-full">
                <span>By creating an account, you agree to Nike's </span>
                <span className="underline font-medium">Privacy Policy</span>
                <span> and </span>
                <span className="underline font-medium">Terms of Use</span>
                <span>.</span>
              </span>
            </div>
          </div>

          {/* Form Fields */}
          {['Email address', 'Password', 'First Name', 'Last Name'].map((label, index) => (
            <div key={index} className={`absolute w-full top-[${5 + index * 53}px] right-0 left-0 rounded-[3px] bg-white border border-[#e5e5e5] box-border h-[40px]`}>
              <input
                type={label === 'Password' ? 'password' : 'text'}
                value={label === 'Email address' ? email : label === 'Password' ? password : label === 'First Name' ? firstName : lastName}
                onChange={(e) => {
                  if (label === 'Email address') setEmail(e.target.value);
                  if (label === 'Password') setPassword(e.target.value);
                  if (label === 'First Name') setFirstName(e.target.value);
                  if (label === 'Last Name') setLastName(e.target.value);
                }}
                className="w-full h-full px-4 py-2 text-sm text-[#111] bg-white border border-[#e5e5e5] rounded-[3px] outline-none"
                placeholder={label}
              />
            </div>
          ))}

          {/* Date of Birth Section */}
          <div className="absolute w-full top-[217px] right-0 left-0 h-[69px] text-[11px]">
            <div className="absolute top-[47px] left-[11.38px] text-center flex items-center justify-center w-[301.5px] h-[14px]">
              Get a Nike Member Reward every year on your Birthday.
            </div>
            <div className="absolute top-[12px] left-[16px] text-[13px] flex items-center w-[78px] h-[16px]">Date of Birth</div>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="absolute w-full top-0 right-0 left-0 rounded-[3px] border border-[#e5e5e5] box-border h-[40px] px-4 text-sm text-[#111]"
            />
          </div>

          {/* Country Section */}
          <div className="absolute w-full top-[296px] right-0 left-0 rounded-[3px] bg-white border border-[#e5e5e5] box-border h-[40px]">
            <Image className="absolute top-[17px] right-[7px] w-[10px] h-[7.1px] overflow-hidden" width={10} height={7} alt="" src="/images/Frame.png" />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="absolute top-[11.5px] left-[17px] leading-[17px] flex items-center w-[290.2px] h-[17px] bg-white border-none outline-none"
            >
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          {/* Gender Selection */}
          <div className="absolute w-full top-[346px] right-0 left-0 h-[40px] text-center text-[13px]">
            <div className="absolute h-[calc(100%+3px)] w-[calc(100%-170.1px)] top-0 right-[170.1px] bottom-[-3px] left-0">
              <div className="absolute top-0 left-[calc(50%-76.95px)] rounded-[3px] bg-white border border-[#e5e5e5] box-border w-[153.9px] h-[40px]">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={() => setGender('Male')}
                  className="mr-2"
                />
                Male
              </div>
            </div>
            <div className="absolute h-[calc(100%+3px)] w-[calc(100%-170.1px)] top-0 right-[-0.01px] bottom-[-3px] left-[170.11px]">
              <div className="absolute top-0 left-[calc(50%-76.95px)] rounded-[3px] bg-white border border-[#e5e5e5] box-border w-[153.9px] h-[40px]">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={() => setGender('Female')}
                  className="mr-2"
                />
                Female
              </div>
            </div>
          </div>

          {/* Sign-up for emails */}
          <div className="absolute top-[calc(50%+125.84px)] left-[calc(50%-162px)] flex flex-row items-start justify-start px-[43px] py-0 text-[11px]">
            <input
              type="checkbox"
              checked={emailSignUp}
              onChange={(e) => setEmailSignUp(e.target.checked)}
              className="w-[20px] absolute top-[4px] left-0 rounded-[3px] border border-[#bcbcbc] box-border h-[20px] z-0"
            />
            <div className="w-[247px] relative leading-[14px] flex items-center flex-shrink-0 z-1">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits
            </div>
          </div>

          {/* Join Us Button */}
          <button type="submit" className="absolute top-[calc(50%+235.5px)] left-[calc(50%-162px)] rounded-[3px] bg-black border border-black box-border w-[324px] h-[40px] text-center text-[15px] text-white">
            JOIN US
          </button>
        </form>

        {/* Already a Member? Sign In */}
        <div className="absolute w-[calc(100%-56px)] top-[776px] right-[28px] left-[28px] h-[24px] text-[11px]">
          <div className="absolute top-[10px] left-[87.63px] leading-[14px] flex items-center w-[148.9px] h-[14px]">
            <span className="w-full">
              <span>Already a Member? </span>
              <Link href="/login">
                <span className="underline font-medium text-[#111]">Sign In.</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
