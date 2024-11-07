import { useState } from 'react'
import Card from './Card'
const Formulario = () => {
    const [datoUsuario, setDatoUsuario]= useState({
        cancion: '',
        artista: ''
    });
    const [error, setError]= useState(false);
    const [showCard, setShowCard]= useState(false);

    const handleChange= (e) => {
        const {name, value} = e.target;
        setDatoUsuario(prev => ({
            ...prev,
            [name]: value
        }));
        setError(false);
        setShowCard(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const validCancion = datoUsuario.cancion.trim().length >= 6 && datoUsuario.cancion.charAt(0) !== ' ';
        const validArtista= datoUsuario.artista.trim().length >= 3;

        if (!validCancion || !validArtista){
            setError(true);
            setShowCard(false);
            return;
        }
        setError(false);
        setShowCard(true);
    };

    return (
        <div className='contenedor'>
            <h1 className='titulo'>Musica y Artista Favorito</h1>
            <form onSubmit={handleSubmit} className='form' >
                <label>Cancion Favorita</label>
                <input 
                    type="text"
                    name="cancion"
                    value={datoUsuario.cancion}
                    onChange= {handleChange}
                    className="input"
                    placeholder='Ingresa tu Cancion Favorita'
                />

                <label>Artista Favorito</label>
                <input 
                    type="text"
                    name="artista"
                    value={datoUsuario.artista}
                    onChange= {handleChange}
                    className="input"
                    placeholder='Ingresa tu Artista Favorito'
                />
                <button
                    type='submit'
                    className='submit-button'
                >Enviar</button>
            </form>
            {error && (<p className='error-message'>Por favor revisa que la informacion sea correcta</p>)}
            {showCard && <Card cancion={datoUsuario.cancion} artista={datoUsuario.artista}/>}
        </div>
    )
}

export default Formulario