import React, { Component } from 'react';
import imagenPrincipal from '../images/inicio.png'
import './Principal.css'

class Principal extends Component {
    render() {
        return (
            <div className='imagen-portada'>
                <img className='img-fluid' src={imagenPrincipal} alt='imagen-principal'/>     
            </div>
        );
    }
}

export default Principal;

