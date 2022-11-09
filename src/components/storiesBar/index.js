import Story from "./story";
import gag from '../../assets/images/9gag.svg';
import meowed from '../../assets/images/meowed.svg';
import barked from '../../assets/images/barked.svg';
import natan from '../../assets/images/nathanwpylestrangeplanet.svg';
import wawi from '../../assets/images/wawawicomics.svg';
import respondeAi from '../../assets/images/respondeai.svg';
import filomoderna from '../../assets/images/filomoderna.svg';
import memeria from '../../assets/images/memeriagourmet.svg';

export default function Stories() {
    const users = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];
    const imgSrcs = [gag, meowed, barked, natan, wawi, respondeAi, filomoderna, memeria];
    const arrayUsers = [];

    for (let i = 0; i < users.length; i++) {
        arrayUsers.push({ nome: users[i], url: imgSrcs[i] });
    }

    return (
        <div class="stories">
            {arrayUsers.map((storyUser) => <Story user={storyUser.nome} imgSrc={storyUser.url} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}