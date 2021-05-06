import React from 'react';

export default function Submit(props) {
    return (
        <>
            <input onClick={props.onClick} type="submit" name="search-btn" id="search-btn" value="Buscar"></input>
        </>
    );
};