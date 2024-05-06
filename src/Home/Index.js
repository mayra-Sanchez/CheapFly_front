import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Planning from '../Components/Planning';
import Search from '../Components/Search';
import "./Home.css"

function Home() {
    const [vuelos, setVuelos] = useState([]);
    const [tipoViaje, setTipoViaje] = useState("idaVuelta");

    const handleVuelosChange = (nuevosVuelos) => {
        setVuelos(nuevosVuelos);
    };

    const handleTipoViajeChange = (tipo) => {
        setTipoViaje(tipo);
    };

    return (
        <div>
            <Navbar />
            <div className="container-izquierdo">
                <Planning onVuelosChange={handleVuelosChange} onTipoViajeChange={handleTipoViajeChange} />
            </div>
            <div className="container-derecho">
                <Search vuelos={vuelos} tipoVuelo={tipoViaje} />
            </div>
        </div>
    );
}

export default Home;
