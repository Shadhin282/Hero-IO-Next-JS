"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useContext } from "react";
import Link from "next/link";
import AuthContext from "@/Authentication/AuthContext";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import Image from "next/image";

export default function Login() {
  const { logIn, googleSign, setUser, loading } = useContext(AuthContext);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect =  "/home";

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((res) => {
        if (loading) return <Loader />;

        setUser(res.user);
        toast.success("Successfully signed in");
        
          router.push(redirect);
      
      })
      .catch(() => {
        toast.error("Invalid credentials");
      });
  };

  const handleGoogle = () => {
    googleSign()
      .then((res) => {
        setUser(res.user);
        toast.success("Google login successful");
        router.push(redirect);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="dark:bg-black/90 shadow-2xl p-10 rounded-2xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Welcome back</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-3 rounded-full hover:bg-indigo-800"
          >
            Log in
          </button>

          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-indigo-700 hover:underline">
              Sign up
            </Link>
          </p>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full border border-indigo-600 text-indigo-700 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-indigo-700 hover:text-white"
          >
            <Image
              alt="goolge login"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              width={300}
              height={300}
              className="w-5 h-5"
            />
            Log in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
