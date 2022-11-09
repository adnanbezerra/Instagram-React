import Stories from "./storiesBar/stories"
import Posts from "./posts/index"

export default function Esquerda() {
    return (
        <div class='esquerda'>
            <Stories />
            <Posts />
        </div>
    )
}