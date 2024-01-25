import React from "react";

const LabelData = ({ htmlFor, text, css, optional }) => {
    return (
        <label
            htmlFor={htmlFor}
            className="mb-2 block text-sm font-medium text-slate-900"
        >
            <span className={`${css}`}>{text}</span>{" "}
            <span className="text-slate-400">{optional}</span>
        </label>
    );
};

export default LabelData;
