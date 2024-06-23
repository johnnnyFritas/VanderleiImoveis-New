const menuLateralImagem = document.getElementById('menuLateral');

const botaoFiltroInicial = document.getElementById('botaoFiltroInicial');

const loginImagem = document.getElementById('areaLogin');

import {Carregando} from './FuncoesHome.js';
const ativador = new Carregando();

ativador.carregamento();
ativador.ativaInicio();
ativador.ativaMenuLateral(menuLateralImagem);
ativador.ativaLogin(loginImagem);
ativador.ativaFiltro(botaoFiltroInicial);