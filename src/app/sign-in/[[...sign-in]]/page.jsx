"use client";
import { SignIn } from "@clerk/nextjs";
import "../../../styles/globals.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[750px] items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-indigo-700" />
          <div className="relative z-20 flex flex-col space-y-6">
            <div className="text-5xl font-bold">SiteGenie</div>
            <div className="flex items-center text-lg">
              Try our service by Signing Up <ArrowRight className="ml-2" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:p-8">
          <div className="w-full max-w-md mx-auto flex flex-col justify-center space-y-6">
            <SignIn className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700" />
          </div>
        </div>
      </div>
    </>
  );
}
