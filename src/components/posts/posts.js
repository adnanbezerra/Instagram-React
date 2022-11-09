import Post from "./post"

export default function Posts() {
    const posts = [
        {
            posterName: "meowed",
            posterImage: "./instagram/assets/img/meowed.svg",
            postImg: "./instagram/assets/img/gato-telefone.svg",
            likerUrl: "./instagram/assets/img/respondeai.svg",
            likerName: "respondeai",
            likesNumber: "101.523"
        },
        {
            posterName: "barked",
            posterImage: "./instagram/assets/img/barked.svg",
            postImg: "./instagram/assets/img/dog.svg",
            likerUrl: "./instagram/assets/img/adorable_animals.svg",
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