import React from "react";

const UpdateInput = ({ text }) => {
    return (
        <div className="flex items-center justify-center space-x-2 rounded-b border-t border-gray-300 px-6 pb-6 pt-5 lg:justify-start">
            <button
                type="submit"
                className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-50 hover:bg-yellow-600"
            >
                Update {text}
            </button>
        </div>
    );
};

export default UpdateInput;
