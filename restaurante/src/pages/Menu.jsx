/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getMenuRequest } from "../api/menu.api";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate();
    const [carta, setCarta] = useState([]);

    const cargarMenu = async () => {
        try {
            const resp = await getMenuRequest();
            console.log(resp.data);
            setCarta(resp.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        cargarMenu();
    }, []);
    return (
        <div>
            {/* Tarjeta de mesas */}
            <div>
                <h1 className="text-5xl text-white font-bold text-center py-3">
                    Menú
                </h1>
                <div className="flex justify-between">
                    <div>
                        <Link
                            to="/MenuForm/"
                            className="bg-indigo-500 px-2 block text-center py-2 rounded-xl text-white w-full mb-2"
                        >
                            Nuevo Item
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
            <div className="columns-2 mt-4 flex">
                {carta.map((menu) => (
                    <div
                        className="bg-zinc-700 rounded-md mx-4 my-4 py-4 px-4 "
                        key={menu.idMenu}
                    >
                        <h2 className="text-xl font-bold text-white">
                            {menu.tituloMenu}
                        </h2>
                        <p className="text-white">{menu.descripcionMenu}</p>
                        <p className="text-white">Gs {menu.costoMenu}</p>
                        <img
                            className="w-52"
                            /* src={`data:image/jpeg;base64,${menu.imagenMenu}`} */
                            src={menu.imagenMenu}
                        ></img>
                        <div className="flex gap-1 mt-5 justify-center h-10">
                            {/* <button
                className="bg-red-500 px-2 py-1 mr-4 text-white rounded-md"
                onClick={() => {
                  liberarMesa(mesa.idMesa);
                }}
              >
                Liberar
              </button> */}
                            <button
                                className="bg-slate-800 px-2 py-1 text-white rounded-md"
                                onClick={() =>
                                    navigate(`/MenuForm/${menu.idMenu}`)
                                }
                            >
                                Editar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
