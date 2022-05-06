import Story from "./story";

export default function Stories() {
    const users = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];
    const imgSrcs = ['./instagram/assets/img/9gag.svg', './instagram/assets/img/meowed.svg', './instagram/assets/img/barked.svg', './instagram/assets/img/nathanwpylestrangeplanet.svg', './instagram/assets/img/wawawicomics.svg', './instagram/assets/img/respondeai.svg', './instagram/assets/img/filomoderna.svg', './instagram/assets/img/memeriagourmet.svg']
    const arrayUsers = [];

    for(let i = 0; i < users.length; i++) {
        arrayUsers.push( { nome: users[i], url: imgSrcs[i] } );
    }

    return (
        <div class="stories">
            {arrayUsers.map( (storyUser) => <Story user={storyUser.nome} imgSrc={storyUser.url} /> )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}