import Usuario from "./usuario"
import Sugestoes from "./sugestoes"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario userImage="./instagram/assets/img/catanacomics.svg" userNickname="catanacomics" userName="Catana" />
            <Sugestoes />
            
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}
