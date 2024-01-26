import React from "react";

const TitleData = ({ text }) => {
    return (
        <h1 className="flex items-end gap-1 font-bricolage text-2xl font-bold text-gray-700">
            <span className="hidden lg:block">Data</span> {text}
        </h1>
    );
};

export default TitleData;
