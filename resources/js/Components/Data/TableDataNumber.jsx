import React from "react";

const TableDataNumber = ({ startNumber, index }) => {
    return (
        <th className="border-r px-4 py-4 font-normal">
            <span className="line-clamp-1">{startNumber + index}</span>
        </th>
    );
};

export default TableDataNumber;
