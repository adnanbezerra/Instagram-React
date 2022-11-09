export default function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.suggestionImage} alt="" />
                <div class="texto">
                    <div class="nome">{props.suggestionName}</div>
                    <div class="razao">{props.suggestionReason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>

    )
}