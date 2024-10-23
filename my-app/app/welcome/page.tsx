"use client"

import React from 'react';
import {useRouter} from 'next/navigation';

export default function WelcomePage(){
    const router = useRouter();

    const handleGetStarted = () => {
        router.push('/signin');
    }

    return(
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
            <h1 className="text-4xl font-bold mb-6">Welcome to Reimagined AI</h1>
            <p className="text-lg mb-6">Your personal AI companion awaits.</p>
            <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                onClick={handleGetStarted}>Get Started</button>
        </div>
    );
}