import React from 'react';

function Progress(props) {
    return (
        <h2>
            Pregunta {props.current} de {props.total}
        </h2>
    );
}

export default Progress;
