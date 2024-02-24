import Image from "next/image";
import Link from "next/link";

import Logo from '~/images/logo.png'

export function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center top-0 sticky py-1 px-8 bg-[#EBEAE7]">
        <Link href='/' className="">
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={100}
            className="h-16 w-auto object-cover"
          />
        </Link>
        <div className="flex space-x-4">
          <Link href='/#home' className="text-gray-600 hover:text-gray-800 hover:underline">
            Home
          </Link>
          <Link href="/#about" className="text-gray-600 hover:text-gray-800 hover:underline">
            About
          </Link>
          <Link href="/#wellness" className="text-gray-600 hover:text-gray-800 hover:underline">
            Wellness
          </Link>
          {/* <Link href="#contact" className="text-gray-600 hover:text-gray-800 hover:underline">
            Contact
          </Link> */}
          <Link href='/gallery' className="text-gray-600 hover:text-gray-800 hover:underline">
            Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}