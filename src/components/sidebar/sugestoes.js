import Titulo from "./titulo"
import Sugestao from "./sugestao"
import badVibes from "../../assets/images/bad.vibes.memes.svg";
import chirbDart from "../../assets/images/chibirdart.svg";
import razoes from  "../../assets/images/razoesparaacreditar.svg";
import adorable from "../../assets/images/adorable_animals.svg";

export default function Sugestoes() {
    const sugestoes = [
        {
            suggestionImage: badVibes,
            suggestionName: "bad.vibes.memes",
            suggestionReason: "Segue você"
        },
        {
            suggestionImage: chirbDart,
            suggestionName: "chibirdart",
            suggestionReason: "Segue você"
        },
        {
            suggestionImage: razoes,
            suggestionName: "razoesparaacreditar",
            suggestionReason: "Novo no Instagram"
        },
        {
            suggestionImage: adorable,
            suggestionName: "adorable_animals",
            suggestionReason: "Segue você"
        }
    ]

    return (
        <div className="sugestoes">

            <Titulo />
            {sugestoes.map((sugestao) => <Sugestao suggestionImage={sugestao.suggestionImage} suggestionName={sugestao.suggestionName} suggestionReason={sugestao.suggestionReason} />)}

        </div>
    )
}