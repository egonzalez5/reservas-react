import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario.jsx';
import Cita from './components/Cita.jsx';


function App() {

  //Citas en local Storage
  // LocalStorage solo almacena strin, USAMOS JSON.PARSE
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  // UseEffect se ejecuta cada vez que el state cambia
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  
  }, [citas]);

  const crearCita = cita => {
    guardarCitas([ ...citas, cita ]);
}
  //Función para eliminar cita por id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'


  return (
    <Fragment>
      <div className="container mt-3">
      <h1>Administrador de mascotas</h1>

        <div className="row">
          <div className="col-md-6 mt-4">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          
          <div className="col-md-6 mt-4">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
