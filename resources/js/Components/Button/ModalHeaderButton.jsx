import React from "react";

const ModalHeaderButton = ({ text, onClick }) => {
    return (
        <div className="flex items-start justify-between rounded-t border-b px-6 pb-4 pt-5">
            <h3 className="text-xl font-semibold text-gray-900">{text}</h3>
            <button
                type="button"
                className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                data-modal-hide="defaultModal"
                onClick={onClick}
            >
                <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
        </div>
    );
};

export default ModalHeaderButton;
