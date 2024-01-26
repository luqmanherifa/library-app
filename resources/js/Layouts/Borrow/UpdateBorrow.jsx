import ModalHeaderButton from "@/Components/Button/ModalHeaderButton";
import UpdateInput from "@/Components/Button/UpdateInput";
import InputData from "@/Components/Data/InputData";
import LabelData from "@/Components/Data/LabelData";
import React from "react";

const UpdateBorrow = ({
    selectedUpdateId,
    formData,
    handleUpdateSubmit,
    handleCancelUpdateAction,
    handleFormInputChange,
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 py-5 lg:py-10">
            <div className="modal-bg absolute inset-0 bg-gray-500 opacity-50"></div>
            <div className="modal custom-scrollbar relative max-h-full overflow-x-auto overflow-y-auto rounded-xl bg-white lg:overflow-x-hidden">
                <div className="relative max-h-full w-80 lg:w-[36rem]">
                    <div className="relative bg-white">
                        <ModalHeaderButton
                            text="Update Borrow"
                            onClick={handleCancelUpdateAction}
                        />
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdateSubmit(selectedUpdateId, formData);
                            }}
                        >
                            <div className="space-y-6 px-6 py-5">
                                <div className="lg:w-72">
                                    <div className="mb-5">
                                        <LabelData htmlFor="name" text="Name" />
                                        <InputData
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormInputChange}
                                            placeholder="Hanni Pham"
                                            disabled={true}
                                            css="bg-gray-200"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <LabelData
                                            htmlFor="contact"
                                            text="Contact"
                                        />
                                        <InputData
                                            type="text"
                                            id="contact"
                                            name="contact"
                                            value={formData.contact}
                                            onChange={handleFormInputChange}
                                            placeholder="hannipham@nj.com"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <LabelData
                                            htmlFor="book_title"
                                            text="Book Title"
                                        />
                                        <InputData
                                            type="text"
                                            id="book_title"
                                            name="book_title"
                                            value={formData.book_title}
                                            onChange={handleFormInputChange}
                                            placeholder="Am I Overthinking This?"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <LabelData
                                            htmlFor="borrow_date"
                                            text="Borrow Date"
                                        />
                                        <InputData
                                            type="date"
                                            id="borrow_date"
                                            name="borrow_date"
                                            value={formData.borrow_date}
                                            onChange={handleFormInputChange}
                                            placeholder="28/09/2023"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <LabelData
                                            htmlFor="return_date"
                                            text="Return Date"
                                        />
                                        <InputData
                                            type="date"
                                            id="return_date"
                                            name="return_date"
                                            value={formData.return_date}
                                            onChange={handleFormInputChange}
                                            placeholder="06/10/2024"
                                        />
                                    </div>
                                    <div>
                                        <LabelData
                                            htmlFor="status"
                                            text="Status"
                                        />
                                        <select
                                            id="status"
                                            name="status"
                                            value={formData.status}
                                            onChange={(e) => {
                                                handleFormInputChange(e);
                                            }}
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:bg-gray-50"
                                            required
                                        >
                                            <option
                                                value=""
                                                className="text-gray-900"
                                                disabled
                                            >
                                                Select Status
                                            </option>
                                            <option
                                                value="Borrowing"
                                                className="text-gray-900"
                                            >
                                                Borrowing
                                            </option>
                                            <option
                                                value="Returned"
                                                className="text-gray-900"
                                            >
                                                Returned
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <UpdateInput text="Borrow" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBorrow;
