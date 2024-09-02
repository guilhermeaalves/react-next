export default function ImagemAleatoria () {

    const url = 'https://source.unsplash.com/featured/300x300?'
    let pesquisa: string = ''

    function urlImagem () {
        return `${url}${pesquisa}`
    }


    function renderizarBotao(valor: string) {
        return (
            <button className={`
                bg-purple-400 px-4 py-2 rounded-md
            `} onClick={() => {
                pesquisa = valor
                console.log(urlImagem());
            }}>
                {valor}
            </button>
        )
    }

    return (
        <div className={`
            flex flex-col gap-3
        `}>
            {renderizarBotao('abstract')}
            {renderizarBotao('city')}
            {renderizarBotao('person')}
        </div>
    )
}