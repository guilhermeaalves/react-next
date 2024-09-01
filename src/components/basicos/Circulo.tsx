interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo (props: CirculoProps) {
    console.log(props);
    return (
        <div className={`
            flex justify-center items-center
            h-64 w-64 bg-purple-900 
            text-3xl text-gray-200

            ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}
            `}>

            {props.texto}
        </div>
    )
}