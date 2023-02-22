import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between py-6">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image
                        src="/logo.png"
                        height={35}
                        width={40}
                        alt="blog logo"
                    />
                    <span className="font-bold ml-2 text-primary">
                        Coder's Blog
                    </span>
                </div>
            </Link>

            <ul className="flex gap-4 items-center">
                <li>
                    <Link className="font-medium text-gray-600" href="">
                        Products
                    </Link>
                </li>
                <li>
                    <Link className="font-medium text-gray-600" href="">
                        pricing
                    </Link>
                </li>
                <li>
                    <Link className="font-medium text-gray-600" href="">
                        Docs
                    </Link>
                </li>
                <li>
                    <Link className="font-medium text-gray-600" href="">
                        Company
                    </Link>
                </li>
            </ul>

            <ul className="flex gap-4 items-center">
                <li>
                    <Link
                        className="font-medium text-gray-600 hover:gray-400"
                        href=""
                    >
                        Log in
                    </Link>
                </li>
                <li>
                    <Link
                        className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all"
                        href=""
                    >
                        Sign up
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
