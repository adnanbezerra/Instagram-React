export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.userImage} alt="" />
            <div class="texto">
                <strong>{props.userNickname}</strong>
                {props.userName}
            </div>
        </div>
    )
}