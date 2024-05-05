import React, { useState } from 'react';
import "./CardFly.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Link } from 'react-router-dom';

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
            <Dialog visible={displayDialog} onHide={hideDialog} style={{ width: '50vw', height: '40vh', backgroundColor: "white", borderRadius: "15px", overflowY: 'auto', maxHeight: '70vh' }} showHeader={false} maskStyle={{ backgroundColor: "rgba(0, 123, 255, 0.3)" }}>
                <h2 style={{ textAlign: 'center', fontSize: '25px' }}>{vuelo.airline}</h2>
                <div className='tiempo_vuelo' style={{ marginTop: '20px', marginLeft: '50px' }}>
                    {vuelo.outbound_trip_time && <p><strong>Tiempo de ida:</strong> {vuelo.outbound_trip_time}</p>}
                    {vuelo.return_trip_time && <p><strong>Tiempo de vuelta:</strong> {vuelo.return_trip_time}</p>}
                </div>
                <div className="escalas" style={{ marginTop: '20px', marginLeft: '50px' }}>
                    {vuelo.outbound_trip_number_of_scales !== undefined && (
                        <p><strong>Número de escalas en el viaje de ida:</strong> {vuelo.outbound_trip_number_of_scales}</p>
                    )}
                    {vuelo.return_trip_number_of_scales !== undefined && (
                        <p><strong>Número de escalas en el viaje de vuelta:</strong> {vuelo.return_trip_number_of_scales}</p>
                    )}
                </div>
                <div className="aeropuerto" style={{ marginTop: '20px', marginLeft: '50px' }}>
                    {vuelo.outbound_trip_scales && <p><strong>Aeropuerto de salida:</strong> {vuelo.outbound_trip_scales}</p>}
                    {vuelo.return_trip_scales && <p><strong>Aeropuerto de llegada:</strong> {vuelo.return_trip_scales}</p>}
                </div>
                <div className='link_oferta' style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    <Link to={vuelo.offer_link}>
                        <strong>Ver oferta de vuelo</strong>
                    </Link>
                </div>
                <div className="buttons" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button className="buttonClose" label="Cerrar" onClick={hideDialog} />
                </div>
            </Dialog>
        </div>
    );
}

export default CardFly;
