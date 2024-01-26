import React from "react";

const PaginationButton = ({
    searchQuery,
    currentPage,
    lastPage,
    isFirstPage,
    isLastPage,
    handleNextPage,
    handlePrevPage,
    handleFirstPage,
    handleLastPage,
}) => {
    return (
        <div className="mt-5 flex justify-center">
            <button
                className={`flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium text-gray-50 ${
                    isFirstPage
                        ? "bg-gray-400"
                        : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={handleFirstPage}
                disabled={isFirstPage}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.25em"
                    viewBox="0 0 320 512"
                    fill="white"
                >
                    <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
                </svg>
            </button>
            <button
                className={`ml-1 flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium text-gray-50 ${
                    currentPage === 1
                        ? "bg-gray-400"
                        : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.25em"
                    viewBox="0 0 256 512"
                    fill="white"
                >
                    <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                </svg>
            </button>
            <span className="mx-2 flex h-8 items-center justify-center rounded-lg bg-gray-600 px-3 text-sm font-medium text-gray-50 lg:hidden">
                Page {currentPage} of {lastPage}
            </span>
            <span className="mx-2 hidden h-8 w-40 items-center justify-center rounded-lg bg-gray-600 px-3 text-sm font-medium text-gray-50 lg:flex">
                Page {currentPage} of {lastPage}
            </span>
            <button
                className={`mr-1 flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium text-gray-50 ${
                    currentPage === lastPage
                        ? "bg-gray-400"
                        : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={() => handleNextPage(searchQuery)}
                disabled={currentPage === lastPage}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.25em"
                    viewBox="0 0 256 512"
                    fill="white"
                >
                    <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
            </button>
            <button
                className={`flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium text-gray-50 ${
                    isLastPage ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={handleLastPage}
                disabled={isLastPage}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.25em"
                    viewBox="0 0 320 512"
                    fill="white"
                >
                    <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
                </svg>
            </button>
        </div>
    );
};

export default PaginationButton;
