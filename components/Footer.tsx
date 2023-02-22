import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer>
            <div>
                <Link href="" className="flex items-center ">
                    <Image
                        src="/logo.png"
                        height={35}
                        width={40}
                        alt="blog logo"
                    />
                    <span className="ml-2 text-lg font-medium text-primary">
                        Coder's Blog
                    </span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
