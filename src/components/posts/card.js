import React from 'react';

export default function Card(props) {

    const [heart, setHeart] = React.useState(<ion-icon name="heart-outline" onClick={likeHeart}></ion-icon>);

    let isClicked = false;
    function likeHeart() {
        if (isClicked) {
            setHeart(<ion-icon name="heart-outline" onClick={likeHeart}></ion-icon>)
            isClicked = false;

        } else {
            setHeart(<ion-icon name="heart" onClick={likeHeart}></ion-icon>);
            isClicked = true;

        }

    }

    function likeImage() {
        setHeart(<ion-icon name="heart" onClick={likeHeart}></ion-icon>);
        isClicked = true;
    }

    return (
        <div>
            <div class="conteudo">
                <img src={props.postUrl} onClick={likeImage} alt="" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {heart}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likerUrl} alt="" />
                    <div class="texto">
                        Curtido por <strong>{props.likerName}</strong> e <strong>outras {props.likesNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}