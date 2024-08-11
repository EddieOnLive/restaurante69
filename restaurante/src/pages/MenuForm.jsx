/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  crearMesuRequest,
  getMenuRequestUno,
  updateMenuRequest,
} from "../api/menu.api";

function MenuForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [item, setItem] = useState({
    titulo: "",
    descripcion: "",
    costo: "",
    imagen: "",
  });
  const [imagen, setImagen] = useState(null);
  const [imgEdit, setImgEdit] = useState(null);

  const imageRef = useRef(null);

  const toBase64 = async (file) => {
    const reader = new FileReader();
    const result = await new Promise((resolve, reject) => {
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
    return result;
  };

  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagen(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        imageRef.current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const editMenu = async () => {
    try {
      const response = await getMenuRequestUno(params.id);
      console.log(response.data.costoMenu);
      setItem({
        titulo: response.data.tituloMenu,
        descripcion: response.data.descripcionMenu,
        costo: response.data.costoMenu,
        imagen: response.data.imagenMenu,
      });
      setImgEdit(response.data.imagenMenu);
      setImagen(response.data.imagenMenu);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      editMenu();
    }
  }, []);
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
                  let img;
                  if (imgEdit != imagen) {
                    img = await toBase64(imagen);
                  } else {
                    img = imagen;
                  }
                  await updateMenuRequest(params.id, {
                    titulo: values.titulo,
                    descripcion: values.descripcion,
                    costo: values.costo,
                    imagen: img,
                  });
                  navigate("/menu/");
                } else {
                  const img = await toBase64(imagen);
                  await crearMesuRequest({
                    titulo: values.titulo,
                    descripcion: values.descripcion,
                    costo: values.costo,
                    imagen: img,
                  });
                  navigate("/Menu/");
                }
              }}
            >
              {({ handleSubmit, handleChange, values, isSubmitting }) => (
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
                    {imagen && (
                      <img
                        ref={imageRef}
                        src={imagen}
                        alt="Imagen seleccionada"
                        className="object-scale-down h-16 w-16"
                      />
                    )}
                    <input
                      type="file"
                      name="imagen"
                      placeholder="fotico"
                      className="px-2 py-1 rounded-sm w-full"
                      onChange={handleFotoChange}
                      ref={imageRef}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block bg-indigo-500 px-2 py-1 mt-4 text-white w-full rounded-md"
                  >
                    {isSubmitting ? "Guardando..." : "Guardar"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <Link
            to="/menu"
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
