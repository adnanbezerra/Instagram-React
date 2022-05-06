import Titulo from "./titulo"
import Sugestao from "./sugestao"

export default function Sugestoes() {
    const sugestoes = [
        {
            suggestionImage: "./instagram/assets/img/bad.vibes.memes.svg",
            suggestionName: "bad.vibes.memes",
            suggestionReason: "Segue você"
        },
        {
            suggestionImage: "./instagram/assets/img/chibirdart.svg",
            suggestionName: "chibirdart",
            suggestionReason: "Segue você"
        },
        {
            suggestionImage: "./instagram/assets/img/razoesparaacreditar.svg",
            suggestionName: "razoesparaacreditar",
            suggestionReason: "Novo no Instagram"
        },
        {
            suggestionImage: "./instagram/assets/img/adorable_animals.svg",
            suggestionName: "adorable_animals",
            suggestionReason: "Segue você"
        }
    ]

    return (
        <div className="sugestoes">
            
            <Titulo />
            {sugestoes.map( (sugestao) => <Sugestao suggestionImage={sugestao.suggestionImage} suggestionName={sugestao.suggestionName} suggestionReason={sugestao.suggestionReason} />)}

        </div>
    )
}