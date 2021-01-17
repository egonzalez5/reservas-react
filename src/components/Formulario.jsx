import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false)

    const actualizarState = e => {
        actualizarCita({...cita, [e.target.name] : e.target.value})
    }
    // Extraer valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();

        //Validaciones
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
        hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return
        }
        actualizarError(false);

        //Id unico
        cita.id = uuidv4();

        //Crear cita
        crearCita(cita);

        //Reiniciar formulario
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alert alert-danger">Debe completar todos los campos</p>
            : null}
            <form
                onSubmit={submitCita}
            >
                <label class="form-label">Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="form-control mb-2"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}       
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="form-control mb-2"
                    placeholder="Nombre dueño de mascota"
                    onChange={actualizarState}
                    value={propietario}         
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="form-control mb-2"
                    onChange={actualizarState}
                    value={fecha}         
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="form-control mb-2"
                    onChange={actualizarState}
                    value={hora}          
                />
                <label>Síntomas</label>
                <textarea
                    className="form-control mb-2"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario
