import React from 'react';
import '../styles/gallery.css';

const Gallery = props => {
    return(
        <div className="gallery">
        <h1>Gallery</h1>
        <div className="photos">
        {props.photos.content.map(photo => {
            return <img src={photo} alt="photo" width='100%' height='100%'/>
        })}
        </div>
        </div>
    )
}

export default Gallery;