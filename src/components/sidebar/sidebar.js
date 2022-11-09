import Usuario from "./usuario"
import Sugestoes from "./sugestoes"
import Links from "./links"
import Copyright from "./copyright"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario userImage="./instagram/assets/img/catanacomics.svg" userNickname="catanacomics" userName="Catana" />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    )
}
