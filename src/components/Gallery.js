import React from 'react';
import '../styles/gallery.css';
import '../styles/content.css'


const Gallery = props => {
    const isActive = props.photos.active;
    let content;
    if(isActive){
        content =
            <React.Fragment>
                <h1>Gallery</h1>
                <div className="photos">
                    {props.photos.content.map(photo => {
                        return <img src={photo} alt="photo" width='100%' height='100%' className={"photo"}/>
                    })}
                </div>
            </React.Fragment>
    }

    return(
        <div className="gallery">
            {content}
        </div>
    )
};

export default Gallery;