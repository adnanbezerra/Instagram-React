import Topo from "./topo";
import Fundo from "./fundo";
import Conteudo from "./conteudo";

export default function Post(props) {

    return (
        <div class="post">
            <Topo user={props.posterName} url={props.posterImage}/>

            <Conteudo postUrl={props.postImg}/>

            <Fundo likerUrl={props.likerUrl} likerName={props.likerName} likesNumber={props.likesNumber}/>
        </div>
    )
}