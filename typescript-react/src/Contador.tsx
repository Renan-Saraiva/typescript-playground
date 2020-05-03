import React from 'react'

interface ContadorProps {
    contador: number;
}

export default (props: ContadorProps) => {
    return (
        <p>{props.contador}</p>
    )
}