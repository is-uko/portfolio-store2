"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <span
        className={
          isOpen ? "fixed h-screen w-screen bg-black bg-opacity-80" : "hidden"
        }
        onClick={handleClick}
      ></span>
      <nav
        className={
          isOpen
            ? "absolute top-0 left-0 duration-300"
            : "absolute top-0 -left-40 duration-300"
        }
      >
        <ul className="pl-10 pt-5">
          <li className="pb-3">
            <Link className="text-white" href="/products/1">
              PRODUCTS
            </Link>
          </li>
          <li className="pb-3">
            <Link className="text-white" href="/about">
              ABOUT
            </Link>
          </li>
          <li className="pb-3">
            <Link className="text-white" href="/company">
              COMPANY
            </Link>
          </li>
          <li>
            <Link className="text-white" href="mailto:contact@example.com">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-between max-w-[1360px] mx-auto px-[40px] py-10">
        <Link href="/">
          <Image
            className="h-5 w-auto -z-10"
            src="/img/logo.svg"
            alt=""
            width={500}
            height={500}
          ></Image>
        </Link>
        <button className="text-5xl z-10" onClick={handleClick}>
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-black translate-y-0.5 rotate-45 duration-300"
                : "block w-8 h-0.5 bg-black -translate-y-1 duration-300"
            }
          />
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-black -rotate-45 duration-300"
                : "block w-8 h-0.5 bg-black translate-y-0.5 duration-300"
            }
          />
        </button>
      </div>
    </div>
  );
}
