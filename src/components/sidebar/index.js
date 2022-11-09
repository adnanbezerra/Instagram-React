import Usuario from "./usuario"
import Sugestoes from "./sugestoes"
import catana from '../../assets/images/catanacomics.svg'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario userImage={catana} userNickname="catanacomics" userName="Catana" />
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
