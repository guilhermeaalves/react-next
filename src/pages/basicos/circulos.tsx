import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos () {
    return (
        <div className="flex justify-evenly items-center
        h-screen w-screen">
            <Circulo texto="Bola #1" />
            <Circulo texto="Bola #2" quasePerfeito/>
            <Circulo texto="Bola #3" quasePerfeito/>
        </div>
    )
}