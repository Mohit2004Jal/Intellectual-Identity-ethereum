import React from "react";
import { NavLink } from "react-router-dom";
import { FooterDock } from "../Dock/footer_dock";

export default function Footer() {
    return (
        <footer className="bg-black font-Oswald">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="mb-6 md:mb-4">
                        <FooterDock />
                    </div>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <div>
                            <h2 className="font-Roboto text-yellow-500 mb-6 text-sm font-semibold uppercase">IP</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">Own your intellectual property</li>
                                <li>with the use case of NFTs.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-Roboto text-yellow-500 mb-6 text-sm font-semibold uppercase">Services</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <NavLink
                                        className="navbar-item"
                                        activeclassname="is-active"
                                        to="/"
                                    >
                                        IP Registration
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="navbar-item"
                                        activeclassname="is-active"
                                        to="/bidders"
                                    >
                                        Bidders
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-Roboto text-yellow-500 mb-6 text-sm font-semibold uppercase">
                                Contact Info
                            </h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">302-103-133</li>
                                <li>ips@gov.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-neutral-500 mx-auto lg:my-8" />
                <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-white text-center mx-auto">
                        © {new Date().getFullYear()} <NavLink to="/" className="hover:underline">Intellectual Property™</NavLink>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}