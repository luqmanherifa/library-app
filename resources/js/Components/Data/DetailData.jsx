import React from "react";

const DetailData = ({ text1, text2, css = "font-medium", css2 }) => {
    return (
        <tr>
            <td className={`w-36 text-gray-900 lg:w-60 ${css}`}>
                <span className="line-clamp-1">{text1}</span>
            </td>
            <td className="bg-white pr-10 font-normal text-gray-700">
                <div className="flex gap-2">
                    <span className={`${css}`}>:</span>
                    <span className={`${css2}`}>{text2}</span>
                </div>
            </td>
        </tr>
    );
};

export default DetailData;
