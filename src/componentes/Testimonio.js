import React from 'react'
import '../css/Testimonio.css';

function Testimonio(){
    return(
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={require('../imagenes/karina.png') }
                alt='Foto de Kari'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Karina Simabaña</p>
                <p className='cargo-testimonio'>Estudiante de Ingenieria en Sistemas en la UCE</p>
                <p className='texto-testimonio'>Estudiante de Ingenieria en Sistemas en la UCEEstudiante de Ingenieria en Sistemas en la UCEEstudiante de Ingenieria en Sistemas en la UCEEstudiante de Ingenieria en Sistemas en la UCEEstudiante de Ingenieria en Sistemas en la UCEEstudiante de Ingenieria en Sistemas en la UCEEstudiante de Ingenieria en Sistemas en la UCEEstudiante de Ingenieria en Sistemas en la UCEEstudiante de Ingenieria en Sistemas en la UCE</p>
            </div>
        </div>
    );
}
export default Testimonio; //exportacion por defecto