import React from 'react';

import './styles.css';

import arrowRightIcon from '../../assets/arrow-right.png';
import gamerImg from '../../assets/gamer.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-text-title">
          Quais jogos a galera gosta mais?
        </h1>
        <h3 className="home-text-subtitle">
          Clique no botão abaixo e saiba quais são os jogos que os gamers 
          estão escolhendo!
        </h3>
        <div className="home-actions">
          <button className="home-btn">
            QUERO SABER QUAIS SÃO
          </button>
          <div className="home-btn-icon">
            <img src={arrowRightIcon} alt="Seta para a direita"/>
          </div>
        </div>
      </div>
      <img className="home-image" src={gamerImg} alt="Imagem do jogador"/>
    </div>
  );
}

export default Home;