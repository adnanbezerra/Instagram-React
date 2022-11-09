import Topo from "./topo";
import Card from "./card";

export default function Post(props) {
    return (
        <div class="post">
            <Topo user={props.posterName} url={props.posterImage} />

            <Card postUrl={props.postImg} likerUrl={props.likerUrl} likerName={props.likerName} likesNumber={props.likesNumber} />
        </div>
    )
}