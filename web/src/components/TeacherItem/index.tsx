import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css'

//"https://avatars3.githubusercontent.com/u/27364645?s=460&u=fa1ae4516699ce86ad4f97d6cb563123e7f3294f&v=4"


export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnnection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }
    
    return (
        <article className="teacher-item">
            <header>
                <img src={ teacher.avatar } alt={ teacher.name }/>
                <div>
                    <strong>{ teacher.name }</strong>
                    <span>{ teacher.subject }</span>
                </div>
            </header>

            <p>{ teacher.bio }</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ { teacher.cost }</strong>
                </p>
                <a 
                    target="_blank" 
                    onClick={createNewConnnection} 
                    href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;