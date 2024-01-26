import DashboardButton from "@/Components/DashboardButton";
import DataBorrow from "@/Layouts/Borrow/DataBorrow";
import Home from "@/Layouts/Home";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import logoImage from "../../../public/library.png";

export default function Dashboard({ auth }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState("Home");
    const [activeButton, setActiveButton] = useState("Home");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
        setActiveButton(componentName);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case "Home":
                return <Home auth={auth} />;
            case "Borrow":
                return <DataBorrow />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Head title="Dashboard" />

            <div className="fixed top-0 z-50 w-full bg-white">
                <div className="border-b border-gray-300">
                    <div className="mx-auto flex h-16 justify-between text-gray-50 max-w-none">
                        <div className="flex w-40 items-center ml-5">
                            <a href="/" className="flex items-center gap-3">
                                <img src={logoImage} alt="" className="w-8" />
                                <p className="font-bricolage text-xl font-bold text-amber-700 hover:text-amber-600">
                                    Library
                                </p>
                            </a>
                        </div>

                        <div className="mr-5 w-40 justify-end flex">
                            {auth?.user && (
                                <div>
                                    <div className="mt-3 flex justify-end">
                                        <button
                                            id="dropdownInformationButton"
                                            data-dropdown-toggle="dropdownInformation"
                                            className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-gray-50 hover:bg-blue-800"
                                            type="button"
                                            onClick={toggleDropdown}
                                        >
                                            <span className="line-clamp-1">
                                                {auth.user.name}
                                            </span>
                                            <svg
                                                className="ml-2.5 h-2.5 w-2.5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    {isDropdownOpen && (
                                        <div
                                            id="dropdownInformation"
                                            className="relative z-10 mt-2 w-44 divide-y divide-gray-100 rounded-lg border border-gray-300 bg-white"
                                        >
                                            <div className="px-4 py-3 text-sm text-gray-900">
                                                <div className="flex gap-2">
                                                    <span className="line-clamp-1 font-semibold">
                                                        {auth.user.name}
                                                    </span>
                                                </div>
                                            </div>
                                            <ul
                                                className="py-1 text-sm text-gray-700"
                                                aria-labelledby="dropdownInformationButton"
                                            >
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="block px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        Home
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Logout
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <aside
                id="logo-sidebar"
                className="fixed left-0 top-0 z-40 h-screen w-56 -translate-x-full border-r border-gray-300 pt-[4rem] transition-transform sm:translate-x-0 block"
                aria-label="Sidebar"
            >
                <div className="custom-scrollbar h-full overflow-y-hidden bg-gray-100 px-5 pb-20 hover:overflow-y-auto">
                    <ul className="mt-6 space-y-0.5 font-medium">
                        <DashboardButton
                            activeButton={activeButton}
                            handleComponentChange={handleComponentChange}
                            buttonText="Home"
                            svg="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                            text="Home"
                        />
                        <DashboardButton
                            activeButton={activeButton}
                            handleComponentChange={handleComponentChange}
                            buttonText="Borrow"
                            svg="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                            text="Borrow"
                        />
                    </ul>
                </div>
            </aside>

            <div className="p-6 ml-56">
                <div className="pb-20 mt-16">
                    {activeComponent && (
                        <div className="w-full">{renderComponent()}</div>
                    )}
                </div>
            </div>
        </div>
    );
}
