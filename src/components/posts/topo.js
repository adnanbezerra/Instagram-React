export default function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.url} alt="" />
                {props.user}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}