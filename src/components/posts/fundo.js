export default function Fundo(props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likerUrl} />
                <div class="texto">
                    Curtido por <strong>{props.likerName}</strong> e <strong>outras {props.likesNumber} pessoas</strong>
                </div>
            </div>
        </div>
    )
}