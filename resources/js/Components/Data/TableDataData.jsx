import React from "react";

const TableDataData = ({ text }) => {
    return (
        <td className="border-r px-4 py-4">
            <span className="line-clamp-1">{text}</span>
        </td>
    );
};

export default TableDataData;
