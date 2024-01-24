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
                className={`group flex w-full items-center rounded-lg border px-3 py-2 text-slate-500 hover:border hover:border-slate-300 hover:bg-white hover:text-slate-700 ${
                    activeButton === buttonText
                        ? "border-slate-300 bg-white"
                        : "border-slate-50 bg-slate-50"
                }`}
                onClick={() => handleComponentChange(buttonText)}
            >
                <svg
                    className={`h-4 w-5 transition duration-75 group-hover:text-slate-700 ${
                        activeButton === buttonText
                            ? "text-slate-700"
                            : "text-slate-500"
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
                        activeButton === buttonText && "text-slate-700"
                    }`}
                >
                    {text}
                </span>
            </button>
        </li>
    );
};

export default DashboardButton;
