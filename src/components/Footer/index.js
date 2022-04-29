import React from 'react';
import { FooterBase } from './styles';
import GitHub from '../../assets/img/GitHub.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={GitHub} alt="Logo GitHub" />
      </a>
      <p>
        Confira Meu Repositorio do gitHub
        {' '}
        <a href="https://github.com/samuelbatista3rios?tab=repositories">
          Clicando aqui!!
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
