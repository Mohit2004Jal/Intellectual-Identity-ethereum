import React from "react";
import { FloatingDock } from "../magicui/dock";
import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX, 
} from "@tabler/icons-react";

export function FooterDock() {
    const links = [
        {
            title: "X",
            icon: (
                <IconBrandX className="w-full text-neutral-300" />
            ),
            href: "www.x.com",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="w-full text-neutral-300" />
            ),
            href: "www.github.com",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="w-full text-neutral-300" />
            ),
            href: "www.instagram.com",
        },
        {
            title: "Facebook",
            icon: (
                <IconBrandFacebook className="w-full text-neutral-300" />
            ),
            href: "www.facebook.com",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="w-full text-neutral-300" />
            ),
            href: "www.linkedin.com",
        },
    ];
    return (
        (<div className="flex items-center justify-center w-full">
            <FloatingDock
                // mobileClassName="translate-y-20"
                items={links} />
        </div>)
    );
}