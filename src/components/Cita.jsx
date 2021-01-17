import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div class="card card-body mb-2">

        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button
            className="btn btn-danger"
            onClick={() => eliminarCita(cita.id)}
        >Eliminar</button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;
