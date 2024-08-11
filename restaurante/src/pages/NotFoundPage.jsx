/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="">
            <h1 className="text-6xl text-white mb-3">
                Página no encontrada...
            </h1>
            <Link
                to="/"
                className="bg-indigo-500 hover:bg-indigo-700 text-white px-2 py-1"
            >
                Volver
            </Link>
        </div>
    );
}

export default NotFoundPage;
