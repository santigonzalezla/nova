import React from "react";
import './css/serviceform.css'

const ServiceForm: React.FC = () =>
{
    return (
        <form className="hero-service-left-form">
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Correo"/>
            <select>
                <option value="1">Servicio 1</option>
                <option value="2">Servicio 2</option>
                <option value="3">Servicio 3</option>
                <option value="4">Servicio 4</option>
                <option value="5">Servicio 5</option>
                <option value="6">Servicio 6</option>
            </select>
            <button>Contáctanos</button>
        </form>
    )
}

export default ServiceForm;