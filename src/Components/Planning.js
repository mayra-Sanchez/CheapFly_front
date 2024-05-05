import React, { useState } from "react";
import "./Planning.css";
import { endpoints } from "../Services/Index";

function Planning({ onVuelosChange }) {
    const [tipoViaje, setTipoViaje] = useState("idaVuelta");
    const [city_of_origin, setCityOfOrigin] = useState("");
    const [destination_city, setDestinationCity] = useState("");
    const [departure_date, setDepartureDate] = useState("");
    const [return_date, setReturnDate] = useState("");
    const [adults, setAdults] = useState(1);

    const handleTipoViajeChange = (tipo) => {
        setTipoViaje(tipo);
    };
    
    const handleBuscarVuelo = async () => {
        try {
            
            const formattedDepartureDate = departure_date.split('-').reverse().join('-');
            const formattedReturnDate = return_date.split('-').reverse().join('-');
            
            const vuelos = await endpoints.getVuelos(city_of_origin, destination_city, formattedDepartureDate, formattedReturnDate, adults);
            console.log("Vuelos encontrados:", vuelos);

            onVuelosChange(vuelos);
            
        } catch (error) {
            console.error('Error al buscar vuelos:', error);
        }
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
                    <input type="text" id="origin" value={city_of_origin} onChange={(e) => setCityOfOrigin(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="destination">Destino:</label>
                    <input type="text" id="destination" value={destination_city} onChange={(e) => setDestinationCity(e.target.value)} />
                </div>
            </div>
            {tipoViaje === "idaVuelta" && (
                <div className="dates">
                    <div className="date-input">
                        <label htmlFor="dateIda">Fecha de ida:</label>
                        <input type="date" id="dateIda" value={departure_date} onChange={(e) => setDepartureDate(e.target.value)} />
                    </div>
                    <div className="date-input">
                        <label htmlFor="dateVuelta">Fecha de vuelta:</label>
                        <input type="date" id="dateVuelta" value={return_date} onChange={(e) => setReturnDate(e.target.value)} />
                    </div>
                </div>
            )}
            {tipoViaje === "soloIda" && (
                <div className="dates">
                    <div className="date-input">
                        <label htmlFor="dateIda">Fecha de ida:</label>
                        <input type="date" id="dateIda" value={departure_date} onChange={(e) => setDepartureDate(e.target.value)} />
                    </div>
                </div>
            )}
            <div className="people">
                <label htmlFor="quantity">Pasajeros:</label>
                <input type="number" id="quantity" value={adults} onChange={(e) => setAdults(e.target.value)} />
            </div>
            <div className="search-container">
                <button className="search-button" onClick={handleBuscarVuelo}>Buscar</button>
            </div>
        </div>
    );
}

export default Planning;