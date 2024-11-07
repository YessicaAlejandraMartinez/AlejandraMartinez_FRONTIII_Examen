//import React from 'react'
const Card = ({ cancion, artista}) => {
    return (
    <>
        <h2 className="h2">Tu Musica y Artista Favorito:</h2>
    <div className="card">
        <p className="text-gray-700">
            <span className="span">Cancion:</span> {cancion}
        </p>
        <p className="text-gray-700">
            <span className="span">Artista:</span> {artista}
        </p>
    </div>
    </>
    )
    }

    export default Card;