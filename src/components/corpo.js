import Esquerda from "./esquerda";
import Sidebar from "./sidebar/index";

export default function Corpo() {
    return (
        <div class='corpo'>
            <Esquerda />
            <Sidebar />
        </div>
    )
}