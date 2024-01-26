import React from "react";

const Home = ({ auth }) => {
    return (
        <div className="mx-auto max-w-xs lg:max-w-none">
            <h3 className="w-full text-lg font-medium text-gray-600">
                Welcome to Dashboard, {auth?.user?.name}!
            </h3>
        </div>
    );
};

export default Home;
