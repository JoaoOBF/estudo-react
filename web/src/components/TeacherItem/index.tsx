

import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/27364645?s=460&u=fa1ae4516699ce86ad4f97d6cb563123e7f3294f&v=4" alt="Eduardo Franco"/>
                <div>
                    <strong>João Otavio</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Entusiasta das melgores tecnologias de química avançada. 
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;