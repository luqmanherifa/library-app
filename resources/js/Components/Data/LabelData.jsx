import React from "react";

const LabelData = ({ htmlFor, text, css, optional }) => {
    return (
        <label
            htmlFor={htmlFor}
            className="mb-2 block text-sm font-medium text-gray-900"
        >
            <span className={`${css}`}>{text}</span>{" "}
            <span className="text-gray-400">{optional}</span>
        </label>
    );
};

export default LabelData;
