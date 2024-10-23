"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically handle actual authentication
    router.push('/chat'); // Navigate to the chat page after successful sign-in
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 bg-gray-700 rounded-lg text-gray-300"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 bg-gray-700 rounded-lg text-gray-300"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}