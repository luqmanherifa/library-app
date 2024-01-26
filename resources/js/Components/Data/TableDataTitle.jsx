import React from "react";

const TableDataTitle = ({ text }) => {
    return (
        <th
            scope="row"
            className="whitespace-nowrap border-r px-4 py-4 font-medium text-gray-600"
        >
            <span className="line-clamp-1">{text}</span>
        </th>
    );
};

export default TableDataTitle;
