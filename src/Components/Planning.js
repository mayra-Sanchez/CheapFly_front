import React, { useState } from "react";
import "./Planning.css";

function Planning() {
    const [tipoViaje, setTipoViaje] = useState("idaVuelta");

    const handleTipoViajeChange = (tipo) => {
        setTipoViaje(tipo);
    };

    return (
        <div className="container-planning">
            <div className="centered-content">
                <h2>Planea tu viaje</h2>
                <div className="buttons">
                    <button className={tipoViaje === "idaVuelta" ? "selected" : ""} onClick={() => handleTipoViajeChange("idaVuelta")}>Ida y vuelta</button>
                    <button className={tipoViaje === "soloIda" ? "selected" : ""} onClick={() => handleTipoViajeChange("soloIda")}>Solo ida</button>
                </div>
            </div>
            <div className="inputs">
                <div>
                    <label htmlFor="origin">Origen:</label>
                    <input type="text" id="origin" />
                </div>
                <div>
                    <label htmlFor="destination">Destino:</label>
                    <input type="text" id="destination" />
                </div>
            </div>
            {tipoViaje === "idaVuelta" && (
                <div className="dates">
                    <div className="date-input">
                        <label htmlFor="dateIda">Fecha de ida:</label>
                        <input type="date" id="dateIda" />
                    </div>
                    <div className="date-input">
                        <label htmlFor="dateVuelta">Fecha de vuelta:</label>
                        <input type="date" id="dateVuelta" />
                    </div>
                </div>
            )}
            {tipoViaje === "soloIda" && (
                <div className="dates">
                    <div className="date-input">
                        <label htmlFor="dateIda">Fecha de ida:</label>
                        <input type="date" id="dateIda" />
                    </div>
                </div>
            )}
            <div className="people">
                <label htmlFor="quantity">Pasajeros:</label>
                <input type="number" id="quantity" min="1" />
            </div>
            <div className="search-container">
                <button className="search-button">Buscar</button>
            </div>
        </div>
    );
}

export default Planning;
