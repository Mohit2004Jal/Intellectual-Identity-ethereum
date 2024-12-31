"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../../components/lib/utils";

export function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        (<div
            className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black font-Oswald">
            <h2 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r to-themeTwo from-themeThree font-Lobster">
                Contact Us
            </h2>
            <p className="text-sm max-w-sm mt-2 text-neutral-300 font-Roboto">
                Fill out the form below and we will get back to you as soon as possible.
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
                <div
                    className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="email@mail.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="1234567890" type="number" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                        id="message"
                        placeholder="Type your message here"
                        className={cn(
                            "bg-zinc-800 text-neutral-300 p-2 rounded-md",
                            "focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600 "
                        )}
                    ></textarea>
                </LabelInputContainer>

                <button
                    className="relative group bg-gradient-to-br from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_##27272a_inset,0px_-1px_0px_0px_##27272a_inset]"
                    type="submit"
                >
                    Contact Us &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>)
    );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover:opacity-100 block transition-opacity duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            />
            <span
                className="group-hover:opacity-100 blur-sm block transition-opacity duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        (<div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>)
    );
};
