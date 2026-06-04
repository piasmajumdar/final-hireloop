"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button, Card, Alert } from "@heroui/react";
// GravityUI icons
import { Eye, EyeSlash, ArrowRight } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
    const router = useRouter();

    // Form States
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: null, message: "" }); // type: 'success' | 'danger' | null

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: "" });

        const { email, password } = formData;

        if (!email || !password) {
            setStatus({ type: "danger", message: "All fields are required." });
            setIsLoading(false);
            return;
        }

        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (error) {
                setStatus({
                    type: "danger",
                    message: error.message || "Invalid email or password. Please try again.",
                });
            } else {
                setStatus({
                    type: "success",
                    message: "Signed in successfully! Redirecting...",
                });
                setFormData({ email: "", password: "" });

                // Optional: Redirect fallback if callbackURL doesn't pick up natively
                router.push("/");
            }
        } catch (err) {
            setStatus({
                type: "danger",
                message: "An unexpected error occurred.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
            <Card className="w-full max-w-md p-6 border border-gray-200 dark:border-gray-800 shadow-xl rounded-2xl bg-white dark:bg-black">

                <Card.Header className="flex flex-col items-center text-center gap-1 pb-6">
                    <Card.Title className="text-2xl font-bold text-gray-900 dark:text-white">
                        Welcome Back
                    </Card.Title>
                    <Card.Description className="text-small text-gray-500">
                        Sign in to access your platform account
                    </Card.Description>
                </Card.Header>

                <Card.Content>
                    {status.type && (
                        <div className="mb-4 animate-fade-in text-left">
                            <Alert
                                status={status.type === "danger" ? "danger" : "success"}
                                className={`p-3 rounded-xl text-white ${status.type === "success"
                                        ? "bg-green-600/20 border border-green-500/30"
                                        : "bg-red-600/20 border border-red-500/30"
                                    }`}
                            >
                                <div className="flex flex-col gap-0.5 w-full">
                                    <span className={`font-bold block ${status.type === "success" ? "text-green-400" : "text-red-400"
                                        }`}>
                                        {status.type === "success" ? "Success" : "Error"}
                                    </span>
                                    <span className="text-sm opacity-90 block text-gray-200">
                                        {status.message}
                                    </span>
                                </div>
                            </Alert>
                        </div>
                    )}

                    <form onSubmit={handleSignin} className="flex flex-col gap-4">
                        <Input
                            required
                            type="email"
                            name="email"
                            label="Email Address"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {/* Pure CSS positioning layout completely avoids framework prop-bleed warnings */}
                        <div className="relative w-full flex items-center">
                            <Input
                                required
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                className="w-full pr-12"
                                value={formData.password}
                                onChange={handleChange}
                                type={isVisible ? "text" : "password"}
                            />
                            <button
                                className="absolute right-3 z-20 focus:outline-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                type="button"
                                onClick={toggleVisibility}
                                style={{ top: "calc(50% - 10px)" }} // Vertically centers the eye toggle button perfectly
                            >
                                {isVisible ? (
                                    <EyeSlash className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>

                        <Button
                            type="submit"
                            color="accent"
                            className="mt-2 font-semibold w-full flex items-center justify-center gap-2"
                            isLoading={isLoading}
                        >
                            <span>Sign In</span>
                            {!isLoading && <ArrowRight className="w-4 h-4" />}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-gray-500">New to Hire loop? </span>
                        <Link
                            href="/auth/signup"
                            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium hover:underline"
                        >
                            Sign Up
                        </Link>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}