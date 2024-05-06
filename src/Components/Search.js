import React, { useState } from 'react';
import CardsFly from './CardsFly';
import "./Search.css";
import Lottie from 'react-lottie';
import animationData from '../Resources/airplaneLoading.json';
import { Paginator } from 'primereact/paginator';
import CardFlySoloIda from './CardFlySoloIDa';

function Search({ vuelos, tipoVuelo }) {
    const [first, setFirst] = useState(0);
    const rows = 3;

    const onPageChange = (event) => {
        setFirst(event.first);
    };

    return (
        <div className="container-search">
            {vuelos.length === 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: animationData,
                        }}
                        height={200}
                        width={200}
                    />
                </div>
            ) : (
                <>
                    <div className='titulito'>
                        <strong style={{ fontFamily: 'Inc', fontSize: '30px', textAlign: 'center' }}>
                            Explora estas opciones
                        </strong>
                    </div>

                    {vuelos.slice(first, first + rows).map((vuelo, index) => (
                        tipoVuelo === "idaVuelta" ? <CardsFly key={index} vuelo={vuelo} /> : <CardFlySoloIda key={index} vuelo={vuelo} />
                    ))}


                    <Paginator first={first} rows={rows} totalRecords={vuelos.length} onPageChange={onPageChange} />
                </>
            )}
        </div>
    );
}

export default Search;
