import Evento from "@/components/basicos/evento";

export default function PaginaEventos () {
    return (
        <div className={`
            flex flex-wrap gap-5 items-center justify-center h-screen
        `}>
            <Evento />
            <Evento />
            <Evento />
        </div>
    )
}