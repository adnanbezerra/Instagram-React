export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.userImage} />
            <div class="texto">
                <strong>{props.userNickname}</strong>
                {props.userName}
            </div>
        </div>
    )
}