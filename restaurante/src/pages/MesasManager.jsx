/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMesasRequest, updateMesasRequest } from "../api/mesas.api";

function MesasManager() {
    const navigate = useNavigate();
    const [mesas, setMesas] = useState([]);

    const cargarMesas = async () => {
        try {
            const resp = await getMesasRequest();
            setMesas(resp.data);
            console.log(resp.data);
        } catch (error) {
            console.error(error);
        }
    };

    const liberarMesa = async (id) => {
        try {
            const resp = await updateMesasRequest(id);
            navigate(0);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        cargarMesas();
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-5xl text-white font-bold text-center py-3">
                    Mesas
                </h1>
                <div className="flex justify-between">
                    <div>
                        <Link
                            to="/MesasForm/"
                            className="bg-indigo-500 px-2 block text-center py-2 rounded-xl text-white w-full mb-2"
                        >
                            Nueva Mesa
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/"
                            className="bg-indigo-500 px-2 block text-center py-2 rounded-xl mb-2 text-white w-full"
                        >
                            Volver
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                {/* Tarjeta de mesas */}
                <div className="columns-2 mt-4 flex">
                    {mesas.map((mesa) => (
                        <div
                            className="bg-zinc-700 rounded-md mx-4 my-4 py-4 px-4 "
                            key={mesa.idMesa}
                        >
                            <h2 className="text-xl font-bold text-white">
                                Mesa {mesa.idMesa}
                            </h2>
                            <h2 className="text-xl font-bold text-white">
                                Sillas: {mesa.sillasMesas}
                            </h2>
                            <p className="text-white">
                                {mesa.reservadoMesas == 1
                                    ? "Reservada"
                                    : "Libre"}
                            </p>
                            <div className="flex gap-1 mt-5 justify-center h-10">
                                <button
                                    className="bg-red-500 px-2 py-1 mr-4 text-white rounded-md"
                                    onClick={() => {
                                        liberarMesa(mesa.idMesa);
                                    }}
                                >
                                    Liberar
                                </button>
                                <button
                                    className="bg-slate-800 px-2 py-1 text-white rounded-md"
                                    onClick={() =>
                                        navigate(`/MesasForm/${mesa.idMesa}`)
                                    }
                                >
                                    Editar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MesasManager;
