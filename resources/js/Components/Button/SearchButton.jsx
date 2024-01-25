import React from "react";

const SearchButton = ({
    searchQuery,
    handleSearchInputChange,
    searchPlaceholder,
}) => {
    return (
        <form className="mb-5">
            <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-slate-900"
            >
                Search
            </label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <svg
                        className="h-4 w-4 text-slate-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-4 pl-12 text-sm text-slate-900 placeholder-slate-400 focus:bg-slate-50"
                    placeholder={`${searchPlaceholder}`}
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    required
                />
            </div>
        </form>
    );
};

export default SearchButton;
