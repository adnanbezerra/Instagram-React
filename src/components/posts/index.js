import Post from "./post";
import meowed from '../../assets/images/meowed.svg';
import gatoTelefone from '../../assets/images/gato-telefone.svg';
import respondeAi from '../../assets/images/respondeai.svg';
import barked from '../../assets/images/barked.svg';
import dog from '../../assets/images/dog.svg';
import adorableAnimals from '../../assets/images/adorable_animals.svg';

export default function Posts() {
    const posts = [
        {
            posterName: "meowed",
            posterImage: meowed,
            postImg: gatoTelefone,
            likerUrl: respondeAi,
            likerName: "respondeai",
            likesNumber: "101.523"
        },
        {
            posterName: "barked",
            posterImage: barked,
            postImg: dog,
            likerUrl: adorableAnimals,
            likerName: "adorable_animals",
            likesNumber: "99.159"
        }
    ]
    return (
        <div class="posts">
            {posts.map((post) => <Post posterName={post.posterName} posterImage={post.posterImage} postImg={post.postImg} likerUrl={post.likerUrl} likerName={post.likerName} likesNumber={post.likesNumber} />)}
        </div>
    )
}