import React from "react";

const ShowInput = ({
    selectedShowId,
    setIsShowMode,
    setSelectedShowAction,
    handleUpdateAction,
    handleDeleteSubmit,
}) => {
    return (
        <div className="flex items-center justify-center space-x-2 rounded-b border-t border-gray-300 px-6 pb-6 pt-5 lg:justify-start">
            <button
                data-modal-hide="defaultModal"
                type="button"
                className="rounded-lg bg-yellow-400 px-6 py-2.5 text-center text-sm font-medium text-gray-50 hover:bg-yellow-700"
                onClick={() => {
                    setIsShowMode(false);
                    setSelectedShowAction(null);
                    handleUpdateAction(selectedShowId.id);
                }}
            >
                Update
            </button>
            <button
                data-modal-hide="defaultModal"
                type="button"
                className="rounded-lg bg-red-500 px-6 py-2.5 text-center text-sm font-medium text-gray-50 hover:bg-red-700"
                onClick={() => {
                    setIsShowMode(false);
                    setSelectedShowAction(null);
                    handleDeleteSubmit(selectedShowId.id);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default ShowInput;
