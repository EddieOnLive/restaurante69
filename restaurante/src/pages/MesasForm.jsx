/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

function MesasForm() {
    const [mesa, setMesa] = useState([]);

    return (
        <>
            <div className="flex justify-center">
                <div className="bg-slate-300 cont w-96 rounded-md p-4 m x-auto mt-10 flex flex-col columns-1 items-center container">
                    <h1 className="text-4xl font-bold text-center py-3 text-black">
                        Nueva Mesa
                    </h1>
                    <div>
                        <Formik
                            initialValues={mesa}
                            enableReinitialize={true}
                            onSubmit={console.log("Submit")}
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
                                            Cantidad de Sillas
                                        </label>
                                        <input
                                            type="number"
                                            name="titulo"
                                            placeholder="14"
                                            className="px-2 py-1 rounded-sm w-40"
                                            onChange={handleChange}
                                            value={values.titulo || ""}
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
                        <Link
                            to="/mesasManager"
                            className="bg-indigo-500 px-2 block text-center py-2 rounded-xl mb-2 text-white w-full mt-4"
                        >
                            Volver
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MesasForm;
