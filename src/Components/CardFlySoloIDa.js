import React, { useState } from 'react';
import "./CardFly.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function CardFlySoloIda({ vuelo }) {

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
            <Dialog visible={displayDialog} onHide={hideDialog} style={{ width: '50vw', height: '35vh', backgroundColor: "white", borderRadius: "15px", overflowY: 'auto', maxHeight: '70vh' }} showHeader={false} maskStyle={{ backgroundColor: "rgba(0, 123, 255, 0.3)" }}>
                <h2 style={{ textAlign: 'center', fontSize: '25px' }}>{vuelo.airline}</h2>
                <div className='tiempo_vuelo' style={{ marginTop: '20px', marginLeft: '50px' }}>
                    <strong> Tiempo de vuelo: </strong>{vuelo.flight_time}
                </div>
                <div className="escalas" style={{ marginTop: '20px', marginLeft: '50px' }}>
                    <strong> Número de escalas: </strong>{vuelo.number_of_scales}
                </div>
                <div className="aeropuerto" style={{ marginTop: '20px', marginLeft: '50px' }}>
                    <strong> Escala en: </strong>{vuelo.scales}
                </div>
                <div className='link_oferta' style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    <a href={`http://${vuelo.offer_link}`} target="_blank" rel="noopener noreferrer">
                        <strong>Ver oferta de vuelo</strong>
                    </a>
                </div>
                <div className="buttons" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button className="buttonClose" label="Cerrar" onClick={hideDialog} />
                </div>
            </Dialog>
        </div>
    );
}

export default CardFlySoloIda;
