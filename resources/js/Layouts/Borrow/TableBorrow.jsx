import ActionButton from "@/Components/Button/ActionButton";
import TableDataData from "@/Components/Data/TableDataData";
import TableDataNumber from "@/Components/Data/TableDataNumber";
import TableDataTitle from "@/Components/Data/TableDataTitle";
import TableHeaderData from "@/Components/Data/TableHeaderData";
import React from "react";

const TableBorrow = ({
    borrow,
    selectedShowAction,
    selectedUpdateAction,
    startNumber,
    handleShowAction,
    handleUpdateAction,
    handleCancelShowAction,
    handleCancelUpdateAction,
    handleDeleteSubmit,
}) => {
    return (
        <div className="custom-scrollbar relative overflow-x-auto rounded-lg border border-gray-300">
            <table className="w-full table-fixed text-left text-sm text-gray-500">
                <thead className="border-b border-gray-300 bg-white text-xs uppercase text-gray-600">
                    <tr>
                        <TableHeaderData text="No" width="w-14 lg:w-10" />
                        <TableHeaderData text="ID" width="w-14 lg:w-10" />
                        <TableHeaderData text="Name" width="w-32" />
                        <TableHeaderData text="Contact" />
                        <TableHeaderData text="Book Title" />
                        <TableHeaderData text="Borrow Date" />
                        <TableHeaderData text="Return Date" />
                        <TableHeaderData text="Status" />
                        <TableHeaderData
                            text="Action"
                            width="w-36 lg:w-28"
                            border=""
                        />
                    </tr>
                </thead>
                <tbody>
                    {borrow?.length > 0 ? (
                        borrow.map((item, index) => (
                            <tr
                                key={item.id}
                                className="border-b bg-white hover:bg-gray-50"
                            >
                                <TableDataNumber
                                    startNumber={startNumber}
                                    index={index}
                                />
                                <TableDataTitle text={item.id} />
                                <TableDataTitle text={item.name} />
                                <TableDataData text={item.contact} />
                                <TableDataData text={item.book_title} />
                                <TableDataData
                                    text={`${new Date(
                                        item.borrow_date
                                    ).toLocaleDateString("id-ID", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    })}`}
                                />
                                <TableDataData
                                    text={`${new Date(
                                        item.return_date
                                    ).toLocaleDateString("id-ID", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    })}`}
                                />
                                <TableDataData text={item.status} />

                                <ActionButton
                                    item={item}
                                    handleShowAction={handleShowAction}
                                    handleUpdateAction={handleUpdateAction}
                                    handleDeleteSubmit={handleDeleteSubmit}
                                    selectedShowAction={selectedShowAction}
                                    selectedUpdateAction={selectedUpdateAction}
                                    handleCancelShowAction={
                                        handleCancelShowAction
                                    }
                                    handleCancelUpdateAction={
                                        handleCancelUpdateAction
                                    }
                                />
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="11"
                                className="py-4 pl-10 font-medium text-red-500 lg:pl-0 lg:text-center"
                            >
                                Data not found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableBorrow;
