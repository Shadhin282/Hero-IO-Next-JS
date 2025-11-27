"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthContext from "@/Authentication/AuthContext";
import { toast } from "react-toastify";
import Image from "next/image";

export default function Register() {
  const router = useRouter();
  const redirect =  "/home";

  const { createUser, setUser, googleSign, updateUser } =
    useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      toast.error("Password must include uppercase, lowercase & min 6 chars");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            toast.success("Account created successfully");
            router.push(redirect);
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogle = () => {
    googleSign()
      .then((res) => {
        setUser(res.user);
        toast.success("Google sign-in successful");
        router.push(redirect);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="dark:bg-black/90 shadow-2xl p-10 rounded-2xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">
          Create an account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
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
            Sign up
          </button>

          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-700 hover:underline">
              Log in
            </Link>
          </p>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full border border-indigo-600 text-indigo-700 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-indigo-700 hover:text-white"
          >
            
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google sign in"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
}
