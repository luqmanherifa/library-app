import InsertDataButton from "@/Components/Button/InsertDataButton";
import PaginationButton from "@/Components/Button/PaginationButton";
import SearchButton from "@/Components/Button/SearchButton";
import TitleData from "@/Components/Data/TitleData";
import TotalData from "@/Components/Data/TotalData";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InsertBorrow from "./InsertBorrow";
import ShowBorrow from "./ShowBorrow";
import TableBorrow from "./TableBorrow";
import UpdateBorrow from "./UpdateBorrow";

const DataBorrow = () => {
    const [borrow, setBorrow] = useState([]);
    const [total, setTotal] = useState(0);

    const [isInsertMode, setIsInsertMode] = useState(false);
    const [isShowMode, setIsShowMode] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const [selectedShowAction, setSelectedShowAction] = useState(null);
    const [selectedUpdateAction, setSelectedUpdateAction] = useState(null);

    const [selectedShowId, setSelectedShowId] = useState(null);
    const [selectedUpdateId, setSelectedUpdateId] = useState(null);

    const [searchQuery, setSearchQuery] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === lastPage;

    const startNumber = (currentPage - 1) * 10 + 1;

    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        book_title: "",
        borrow_date: "",
        return_date: "",
        status: "",
    });

    const handleInsertSubmit = (e) => {
        e.preventDefault();

        axios
            .post("/api/borrow", formData)
            .then((response) => {
                fetchData();
                setCurrentPage(lastPage);
                setIsInsertMode(false);
                setFormData({
                    name: "",
                    contact: "",
                    book_title: "",
                    borrow_date: "",
                    return_date: "",
                    status: "",
                });
                toast(`Borrow data for ${formData.name} has been inserted.`, {
                    type: "success",
                    theme: "light",
                });
            })
            .catch((error) => {
                toast(`Error alert: ${error}`, {
                    type: "error",
                    theme: "light",
                });
            });
    };

    const handleUpdateSubmit = (id, formData) => {
        axios
            .put(`/api/borrow/${id}`, formData)
            .then((response) => {
                setIsUpdateMode(false);
                setSelectedUpdateAction(null);
                setSelectedUpdateId(null);
                setSearchQuery("");
                setFormData({
                    name: "",
                    contact: "",
                    book_title: "",
                    borrow_date: "",
                    return_date: "",
                    status: "",
                });
                if (searchQuery === "") {
                    fetchData();
                }
                toast(`Borrow data for ${formData.name} has been updated.`, {
                    type: "warning",
                    theme: "light",
                });
            })
            .catch((error) => {
                toast(`Error alert: ${error}`, {
                    type: "error",
                    theme: "light",
                });
            });
    };

    const handleDeleteSubmit = (id) => {
        const confirmation = window.confirm(
            "Apakah Anda yakin ingin menghapus?"
        );
        if (confirmation) {
            axios
                .delete(`/api/borrow/${id}`)
                .then((response) => {
                    axios
                        .get(`/api/borrow?page=${currentPage}`)
                        .then((response) => {
                            setBorrow(response.data.data);
                            setTotal(response.data.total);
                            setSelectedShowAction(null);
                            setSelectedUpdateAction(null);
                            setSearchQuery("");
                            setLastPage(response.data.last_page);
                        })
                        .catch((error) => {
                            toast(`Error alert: ${error}`, {
                                type: "error",
                                theme: "light",
                            });
                        });
                    toast(`Borrow data has been deleted.`, {
                        type: "error",
                        theme: "light",
                    });
                })
                .catch((error) => {
                    toast(`Error alert: ${error}`, {
                        type: "error",
                        theme: "light",
                    });
                });
        }
    };

    const handleInsertAction = () => {
        setIsInsertMode(true);
        setFormData({
            name: "",
            contact: "",
            book_title: "",
            borrow_date: "",
            return_date: "",
            status: "",
        });
    };

    const handleShowAction = (id) => {
        setIsShowMode(true);
        setSelectedShowAction(id);
        const selectedData = borrow.find((borrow) => borrow.id === id);
        setSelectedShowId(selectedData);
    };

    const handleUpdateAction = (id) => {
        setIsUpdateMode(true);
        setSelectedUpdateAction(id);
        setSelectedUpdateId(id);
        const selectedData = borrow.find((borrow) => borrow.id === id);
        setFormData(selectedData);
    };

    const handleCancelInsertAction = () => {
        setIsInsertMode(false);
    };

    const handleCancelShowAction = () => {
        setIsShowMode(false);
        setSelectedShowAction(null);
    };

    const handleCancelUpdateAction = () => {
        setIsUpdateMode(false);
        setSelectedUpdateAction(null);
    };

    const handleFormInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < lastPage) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
        }
    };

    const handleFirstPage = () => {
        if (currentPage > 1) {
            setCurrentPage(1);
        }
    };

    const handleLastPage = () => {
        if (lastPage > 1) {
            setCurrentPage(lastPage);
        }
    };

    const fetchData = () => {
        axios
            .get(`/api/borrow/search?search=${searchQuery}&page=${currentPage}`)
            .then((response) => {
                setBorrow(response.data.data);
                setTotal(response.data.total);
                setLastPage(response.data.last_page);
            })
            .catch((error) => {
                toast(`Error alert: ${error}`, {
                    type: "error",
                    theme: "light",
                });
            });
    };

    useEffect(() => {
        fetchData();
    }, [currentPage, searchQuery]);

    useEffect(() => {
        setCurrentPage(lastPage);
    }, [lastPage]);

    return (
        <div>
            <ToastContainer />

            <div className="mb-5 flex justify-between">
                <TitleData text="Borrow" />
                <div className="flex gap-3">
                    <InsertDataButton
                        handleInsertAction={handleInsertAction}
                        text="Borrow"
                    />
                    <TotalData total={total} text="Borrow" />
                </div>
            </div>

            <SearchButton
                searchQuery={searchQuery}
                handleSearchInputChange={handleSearchInputChange}
                searchPlaceholder="Search for borrow data..."
            />

            <TableBorrow
                borrow={borrow}
                selectedShowAction={selectedShowAction}
                selectedUpdateAction={selectedUpdateAction}
                startNumber={startNumber}
                handleDeleteSubmit={handleDeleteSubmit}
                handleShowAction={handleShowAction}
                handleUpdateAction={handleUpdateAction}
                handleCancelShowAction={handleCancelShowAction}
                handleCancelUpdateAction={handleCancelUpdateAction}
            />

            <PaginationButton
                searchQuery={searchQuery}
                currentPage={currentPage}
                lastPage={lastPage}
                isFirstPage={isFirstPage}
                isLastPage={isLastPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleFirstPage={handleFirstPage}
                handleLastPage={handleLastPage}
            />

            {isInsertMode ? (
                <InsertBorrow
                    formData={formData}
                    handleInsertSubmit={handleInsertSubmit}
                    handleCancelInsertAction={handleCancelInsertAction}
                    handleFormInputChange={handleFormInputChange}
                />
            ) : null}

            {isShowMode ? (
                <ShowBorrow
                    setIsShowMode={setIsShowMode}
                    setSelectedShowAction={setSelectedShowAction}
                    selectedShowId={selectedShowId}
                    handleDeleteSubmit={handleDeleteSubmit}
                    handleUpdateAction={handleUpdateAction}
                    handleCancelShowAction={handleCancelShowAction}
                />
            ) : null}

            {isUpdateMode ? (
                <UpdateBorrow
                    selectedUpdateId={selectedUpdateId}
                    formData={formData}
                    handleUpdateSubmit={handleUpdateSubmit}
                    handleCancelUpdateAction={handleCancelUpdateAction}
                    handleFormInputChange={handleFormInputChange}
                />
            ) : null}
        </div>
    );
};

export default DataBorrow;
