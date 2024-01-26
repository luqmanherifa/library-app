import React from "react";

const TableHeaderData = ({
    text,
    border = "border-r border-gray-300",
    width = "w-20 lg:w-12",
}) => {
    return (
        <th scope="col" className={`px-4 py-5 ${border} ${width}`}>
            <span className="line-clamp-1 font-bricolage">{text}</span>
        </th>
    );
};

export default TableHeaderData;
