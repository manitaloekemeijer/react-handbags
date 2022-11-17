import React from 'react';

function Tile({imgName, altName, titleText, children}) {
    // console.log(props);
    return (
        <>
            <section>
                {imgName && <img src={imgName} alt={altName}/>}
                {titleText && <h2>{titleText}</h2>}
                {children}
            </section>
        </>
    );
}

export default Tile;