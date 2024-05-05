import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Planning from '../Components/Planning';
import Search from '../Components/Search';
import "./Home.css"

function Home() {
    const [vuelos, setVuelos] = useState([]);

    const handleVuelosChange = (nuevosVuelos) => {
        setVuelos(nuevosVuelos);
    };

    return (
        <div>
            <Navbar />
            <div className="container-izquierdo">
                <Planning onVuelosChange={handleVuelosChange} />
            </div>
            <div className="container-derecho">
                <Search vuelos={vuelos} />
            </div>
        </div>
    );
}

export default Home;
