import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/37607384?s=460&u=4ed86c9d95e3fba2ed44b1f34814a8c43eaa371c&v=4" alt="Luis V Capelletto"/>
        <div>
          <strong>Luís V. Capelletto</strong>
          <span>Filosofia</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de filosofia avançada. 
        <br/> <br/>
        Apaixonado por se entreter em pensamentos profundos e passar minhas reflexões a seres 
        mundanos da selva de concreto. Mais de 100.000 pessoas foram iluminadas pelos meus conhecimentos.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;