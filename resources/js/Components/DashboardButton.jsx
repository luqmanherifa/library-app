import React from "react";

const DashboardButton = ({
    activeButton,
    handleComponentChange,
    buttonText,
    svg,
    text,
}) => {
    return (
        <li>
            <button
                type="button"
                className={`group flex w-full items-center rounded-lg border px-3 py-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700 ${
                    activeButton === buttonText
                        ? "border-gray-100 bg-gray-300"
                        : "border-gray-100 bg-gray-100"
                }`}
                onClick={() => handleComponentChange(buttonText)}
            >
                <svg
                    className={`h-4 w-5 transition duration-75 group-hover:text-gray-700 ${
                        activeButton === buttonText
                            ? "text-gray-700"
                            : "text-gray-500"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    width="1em"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                >
                    <path d={svg} />
                </svg>
                <span
                    className={`ml-3 ${
                        activeButton === buttonText && "text-gray-700"
                    }`}
                >
                    {text}
                </span>
            </button>
        </li>
    );
};

export default DashboardButton;
