import React from 'react';
import './../styles/style.css';

export default function Input(props) {
    return (
        <>
            <input onChange={props.onChange} value={props.value} type="text" name="search-txt" id="search-txt" placeholder="Digite o nome da cidade"></input>
        </>
    );
};
