'use client';
import { useState } from "react";
import sendEmail from "../hooks/sendEmail";
import { AxiosError } from "axios";

const Formulario = () => {

    const [ values, setValues ] = useState({
        email:'',
        text:'',
    });

    const handleChange = (e) => {
        setValues({...values, [e.target.id]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await sendEmail(values.email, values.text)
        } catch (error) {
            if(error instanceof AxiosError) {
                console.log(error)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-11/12 sm:w-fit mx-auto">
            <input      onChange={handleChange} id="email"  value={values.email}  className="text-[15px] pl-2      w-full sm:w-[500px]  h-8 border-[1px]       border-gray-300 focus:outline-none hover:border-gray-400 focus:border-gray-600 shadow-md rounded-lg"              type="email" placeholder="ejemplo@ejemplo.com" />
            <textarea   onChange={handleChange} id="text"   value={values.text}   className="text-[15px] pl-2 py-1 w-full sm:w-[500px]  h-32 border-[1px] border-gray-300 focus:outline-none hover:border-gray-400 focus:border-gray-600 shadow-md rounded-lg resize-none"  type="email" placeholder="Escribe tu mensaje aquí..." />
            <button     className="bg-[#0E121F] text-white rounded-3xl py-1 hover:bg-[#444547] transition-all w-full sm:w-[500px]">Enviar</button>
        </form>
    ) 
}

export default Formulario