import React, { useState } from 'react';
import "./CardFly.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function CardFly({ vuelo }) {
    const [displayDialog, setDisplayDialog] = useState(false);

    const showDialog = () => {
        setDisplayDialog(true);
    };

    const hideDialog = () => {
        setDisplayDialog(false);
    };

    return (
        <div className="CardFly">
            <Card title={vuelo.airline}>
                <div className="card-content">
                    <p className="m-0">Precio: {vuelo.price}</p>
                    <div className="buttons">
                        <Button className="buttonCard" label="Ver detalles" onClick={showDialog} />
                    </div>
                </div>
            </Card>


            <Dialog visible={displayDialog} onHide={hideDialog} style={{ width: '50vw', height: '40vh', backgroundColor: "white", borderRadius: "15px" }} 
            showHeader={false}
            maskStyle={{ backgroundColor: "rgba(0, 123, 255, 0.3)" }}
            >
                <h2 style={{ textAlign: 'center', fontSize: '25px' }}>{vuelo.airline}</h2>
                <p>Tiempo de ida: {vuelo.outbound_trip_time}</p>
                <p>Tiempo de vuelta: {vuelo.return_trip_time}</p>
                <p>Número de escalas en el viaje de ida: {vuelo.outbound_trip_number_of_scales}</p>
                <p>Número de escalas en el viaje de vuelta: {vuelo.return_trip_number_of_scales}</p>
                <p>Aeropuerto de salida: {vuelo.outbound_trip_scales}</p>
                <p>Aeropuerto de llegada: {vuelo.return_trip_scales}</p>
                <div className="buttons" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button className="buttonClose" label="Cerrar" onClick={hideDialog} />
                </div>
            </Dialog>

        </div>
    );
}

export default CardFly;
