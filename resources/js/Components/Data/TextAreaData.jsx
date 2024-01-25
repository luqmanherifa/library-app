import React from "react";

const TextAreaData = ({
    type,
    id,
    name,
    value,
    onChange,
    css = "bg-slate-50",
    placeholder,
    required = true,
    autoFocus,
    disabled,
}) => {
    return (
        <textarea
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`block w-full rounded-lg border border-slate-300 p-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-slate-50 ${css}`}
            required={required}
            autoFocus={autoFocus}
            disabled={disabled}
        />
    );
};

export default TextAreaData;
