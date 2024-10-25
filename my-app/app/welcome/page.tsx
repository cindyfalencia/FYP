"use client"

import React from 'react';
import {useRouter} from 'next/navigation';
import { useTheme } from "next-themes"
import Link from "next/link"

export default function WelcomePage(){
    const { theme } = useTheme()
    const router = useRouter();

    const handleGetStarted = () => {
        router.push('/signin');
    }

    return(
        <div className="flex size-full flex-col items-center justify-center">
            <div className="mt-2 text-4xl font-bold">Welcome to Reimagined AI</div>
            <p className="text-lg mb-5">Your personal AI companion awaits.</p>
            <Link
                className="mt-1 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold hover:bg-blue-700"
                href="/login"
            >
                Start Chatting
            </Link>
        </div>
    );
}