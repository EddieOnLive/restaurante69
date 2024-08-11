/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { crearMesuRequest } from "../api/menu.api";

function MenuForm() {
    const [item, setItem] = useState({
        titulo: "",
        descripcion: "",
        costo: "",
        imagen: "",
    });
    const params = useParams();

    return (
        <>
            <div className="flex justify-center">
                <div className="bg-slate-300 cont w-96 rounded-md p-4 m x-auto mt-10 flex flex-col columns-1 items-center container">
                    <h1 className="text-4xl font-bold text-center py-3 text-black">
                        Nuevo Item
                    </h1>
                    <div>
                        <Formik
                            initialValues={item}
                            enableReinitialize={true}
                            onSubmit={async (values) => {
                                if (params.id) {
                                    console.log("UPDATE");
                                } else {
                                    await crearMesuRequest(values);
                                }
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                values,
                                isSubmitting,
                            }) => (
                                <Form>
                                    <div className="flex flex-col">
                                        <label className="block uppercase text-center font-bold">
                                            Titulo
                                        </label>
                                        <input
                                            type="text"
                                            name="titulo"
                                            placeholder="Hanvorgesa"
                                            className="px-2 py-1 rounded-sm w-full text-center"
                                            onChange={handleChange}
                                            value={values.titulo || ""}
                                            required
                                        />
                                        <label className="block uppercase text-center font-bold">
                                            Descripcion
                                        </label>
                                        <input
                                            type="text"
                                            name="descripcion"
                                            placeholder="4 quezo 2 karne"
                                            className="px-2 py-1 rounded-sm w-full text-center"
                                            onChange={handleChange}
                                            value={values.descripcion || ""}
                                            required
                                        />
                                        <label className="block uppercase text-center font-bold">
                                            Costo
                                        </label>
                                        <input
                                            type="text"
                                            name="costo"
                                            placeholder="5000"
                                            className="px-2 py-1 rounded-sm w-full text-center"
                                            onChange={handleChange}
                                            value={values.costo || ""}
                                            required
                                        />
                                        <label className="block uppercase text-center font-bold">
                                            Foto
                                        </label>
                                        <input
                                            type="file"
                                            name="imagen"
                                            placeholder="fotico"
                                            className="px-2 py-1 rounded-sm w-full"
                                            onChange={handleChange}
                                            value={values.imagen || ""}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="block bg-indigo-500 px-2 py-1 mt-4 text-white w-full rounded-md"
                                    >
                                        {isSubmitting
                                            ? "Guardando..."
                                            : "Guardar"}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <Link
                        to="/"
                        className="bg-indigo-500 px-2 block text-center py-2 rounded-xl mb-2 text-white w-full mt-9"
                    >
                        Volver
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MenuForm;
