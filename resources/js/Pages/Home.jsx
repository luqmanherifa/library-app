import { Head } from "@inertiajs/react";
import React from "react";

const Home = ({ auth }) => {
    console.log(auth);
    return (
        <>
            <Head title="Home" />
            <div className="bg-white">
                <div className="flex justify-center items-center h-screen">
                    <div>
                        <h1 className="text-4xl text-gray-600 font-semibold">
                            Welcome to Library App
                        </h1>
                        <div className="flex justify-center gap-1 mt-5">
                            <a
                                href={auth?.user ? "/dashboard" : "/login"}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                {auth?.user ? "Go to Dashboard" : "Login"}
                            </a>
                            {!auth?.user && (
                                <a
                                    href="/register"
                                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                >
                                    Register
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
