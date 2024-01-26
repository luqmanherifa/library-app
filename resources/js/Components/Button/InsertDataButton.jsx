import React from "react";

const InsertDataButton = ({ handleInsertAction, text }) => {
    return (
        <button
            onClick={() => {
                handleInsertAction();
            }}
            className="rounded-lg bg-green-500 px-4 py-2 text-center text-base font-medium text-gray-50 hover:bg-green-700"
        >
            <div className="flex items-center gap-2 text-base">
                <span className="hidden lg:block">Insert {text}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="white"
                >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
            </div>
        </button>
    );
};

export default InsertDataButton;
