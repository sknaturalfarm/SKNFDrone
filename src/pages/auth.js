import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <Head>
        <title>{isSignIn ? "Sign In" : "Sign Up"} | SK Naturalfarm</title>
      </Head>

      <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-green-100 via-white to-green-50">
        {/* Left section with logo and navigation */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-10 bg-white shadow-xl z-10">
          <Link href="/" className="mb-6 flex items-center space-x-4">
            <Image
              src="/logo-mark.png"
              alt="logo"
              width={150}
              height={150}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-green-700">SK Naturalfarm</span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isSignIn ? "Welcome Back!" : "Create an Account"}
          </h1>
          <p className="text-gray-600 mb-8">
            {isSignIn
              ? "Sign in to continue exploring smart drone solutions."
              : "Sign up to start your journey with SK Naturalfarm."}
          </p>

          {/* Auth Form */}
          <form className="w-full max-w-sm space-y-4">
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p className="text-sm text-center text-gray-600">
              {isSignIn ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(false)}
                    className="text-green-600 underline"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(true)}
                    className="text-green-600 underline"
                  >
                    Sign In
                  </button>
                </>
              )}
            </p>
          </form>
        </div>

        {/* Right section (optional image or branding) */}
        <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/drone-banner.jpg')` }}>
          {/* Add an image in public/drone-banner.jpg or replace with custom drone image */}
          <div className="h-full w-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold px-6 text-center">
              Elevating Agriculture & Defense with Smart Drones
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
