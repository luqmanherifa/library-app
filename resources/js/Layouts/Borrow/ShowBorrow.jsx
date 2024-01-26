import ModalHeaderButton from "@/Components/Button/ModalHeaderButton";
import ShowInput from "@/Components/Button/ShowInput";
import DetailData from "@/Components/Data/DetailData";
import React from "react";

const ShowBorrow = ({
    setIsShowMode,
    setSelectedShowAction,
    selectedShowId,
    handleDeleteSubmit,
    handleUpdateAction,
    handleCancelShowAction,
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 py-5 lg:py-10">
            <div className="modal-bg absolute inset-0 bg-gray-500 opacity-50"></div>
            <div className="modal custom-scrollbar relative max-h-full overflow-x-auto overflow-y-auto rounded-xl bg-white lg:overflow-x-hidden">
                <div className="relative max-h-full w-80 lg:w-[36rem]">
                    <div className="relative bg-white">
                        <ModalHeaderButton
                            text="Show Borrow"
                            onClick={handleCancelShowAction}
                        />
                        <div className="space-y-6 px-6 py-5">
                            <table>
                                <tbody>
                                    <DetailData
                                        text1="ID Borrow"
                                        text2={selectedShowId.id}
                                        css={"font-bold"}
                                        css2={"font-bold"}
                                    />
                                    <DetailData
                                        text1="Name"
                                        text2={selectedShowId.name}
                                        css="flex items-start font-bold"
                                        css2={"font-bold"}
                                    />
                                    <DetailData
                                        text1="Contact"
                                        text2={selectedShowId.contact}
                                    />
                                    <DetailData
                                        text1="Book Title"
                                        text2={selectedShowId.book_title}
                                    />
                                    <DetailData
                                        text1="Borrow Date"
                                        text2={`${new Date(
                                            selectedShowId.borrow_date
                                        ).toLocaleDateString("id-ID", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        })}`}
                                    />
                                    <DetailData
                                        text1="Return Date"
                                        text2={`${new Date(
                                            selectedShowId.return_date
                                        ).toLocaleDateString("id-ID", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        })}`}
                                    />
                                    <DetailData
                                        text1="Status"
                                        text2={selectedShowId.status}
                                    />
                                </tbody>
                            </table>
                        </div>

                        <ShowInput
                            selectedShowId={selectedShowId}
                            setIsShowMode={setIsShowMode}
                            setSelectedShowAction={setSelectedShowAction}
                            handleUpdateAction={handleUpdateAction}
                            handleDeleteSubmit={handleDeleteSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowBorrow;
