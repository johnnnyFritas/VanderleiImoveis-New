export class Carregando{
    carregamento() {
        window.addEventListener("DOMContentLoaded", function() {
            const carregandoAnimacao =()=> {
                document.getElementById("carregando-conteudo").style.display = "none";
         
                document.getElementById("main").style.display = "block";
             }
             this.setTimeout(carregandoAnimacao, 500);
         });
    }

    ativaInicio() {
        window.addEventListener('DOMContentLoaded', ()=> {
            const localAnimacao = document.getElementById('localAnimacao');
    
            const seja = document.createElement('h1');
            seja.innerHTML = 'Seja';
            seja.classList.add('h-mlr-t1');
    
            localAnimacao.appendChild(seja);
    
            const bemVindo = document.createElement('h1');
            bemVindo.innerHTML = 'Bem Vindo';
            bemVindo.classList.add('h-mlr-t1st');
    
            localAnimacao.appendChild(bemVindo);
    
            const animacaoTemporizadorSaida =()=> {
                localAnimacao.removeChild(seja);
                localAnimacao.removeChild(bemVindo);
            }
    
            setTimeout(animacaoTemporizadorSaida, 4000);
    
            const menuLateral = document.createElement('h1');
            const utilizeNosso = document.createElement('h1');
            const animacaoDepois =()=> {
                utilizeNosso.innerHTML = 'Utilize o nosso';
                utilizeNosso.classList.add('h-mlr-t1');
        
                menuLateral.innerHTML = 'Menu lateral <br> a esquerda';
                menuLateral.classList.add('h-mlr-t1st');
    
                localAnimacao.appendChild(utilizeNosso);
                localAnimacao.appendChild(menuLateral);
            }
    
            setTimeout(animacaoDepois, 4500);
    
            const animacaoTemporizadorSaidaDepois =()=> {
                localAnimacao.removeChild(utilizeNosso);
                localAnimacao.removeChild(menuLateral);
            }
    
            if(localAnimacao.children.length == 2) {
                console.log('Animação feita com sucesso, sem erros');
            }else {
                console.error('ERROR NA ANIMAÇÃO POR FAVOR VERIFIQUE O ARQUIVO');
            }
    
            setTimeout(animacaoTemporizadorSaidaDepois, 8300);
        });
    }

    ativaMenuLateral(menuLateralImagem) {
        window.addEventListener('DOMContentLoaded', ()=> {
            menuLateralImagem.addEventListener('click', ()=> {
                const menuLateralAct = document.getElementById('menuLateralAct');
        
                const localAncoras = document.getElementById('menuLateralNav');
                const ancoras = [];
        
                menuLateralAct.classList.remove('h-mlr-act');
                menuLateralAct.classList.remove('h-mlr-act-visivel-saida');
                menuLateralAct.classList.add('h-mlr-act-visivel');

                document.getElementById('overlay').classList.add('active');
        
                for(let i = 0; i < 6; i++) {
                    ancoras[i] = document.createElement('a');
                    ancoras[i].classList.remove('h-mlr-act-visivel-saida');
                    ancoras[i].classList.add('h-mlr-act-menu-a');
                    if(i == 0) {
                        ancoras[i].innerHTML = 'home';
                        ancoras[i].setAttribute('href', 'index.html');
                    }else if(i == 1) {
                        ancoras[i].innerHTML = 'central de ajuda';
                        ancoras[i].setAttribute('href', 'ajuda.html');
                    }else if(i == 2) {
                        ancoras[i].innerHTML = 'feedback';
                        ancoras[i].setAttribute('href', 'feedback.html');
                    }else if(i == 3) {
                        ancoras[i].innerHTML = 'apartamentos';
                        ancoras[i].setAttribute('href', 'pages/aps.html');
                    }else if(i == 4) {
                        ancoras[i].innerHTML = 'casas';
                        ancoras[i].setAttribute('href', 'error.html');
                    }else if(i == 5) {
                        ancoras[i].innerHTML = 'Sobre mim';
                        ancoras[i].setAttribute('href', 'sb.html');
                    }
                    localAncoras.appendChild(ancoras[i]);
                }
            });
        
            const animacaoSaida =()=> {
                const menuLateralAct = document.getElementById('menuLateralAct');
                const localAncoras = document.getElementById('menuLateralNav');
                const ancoras = document.querySelectorAll('.h-mlr-act-menu-a');
        
                menuLateralAct.classList.remove('h-mlr-act-visivel');
                menuLateralAct.classList.add    ('h-mlr-act-visivel-saida');
        
                document.getElementById('overlay').classList.remove('active');
        
                for(let i = 0; i < ancoras.length; i++) {
                    ancoras[i].classList.add('h-mlr-act-a-animacao-saida');
                }
            
                const displayNone =()=> {
                    menuLateralAct.classList.add('h-mlr-act');
                    for(let i = 0; i < ancoras.length; i++) {
                        localAncoras.removeChild(ancoras[i]);
                    }
                }
                setTimeout(displayNone, 1300);
            }
            document.getElementById('overlay').addEventListener('click', animacaoSaida);
        });
    }

    ativaLogin(loginImagem) {
        window.addEventListener('DOMContentLoaded', ()=> {
            loginImagem.addEventListener('click', ()=> {
                window.location.replace('login.html');
            });
        });
    }

    ativaFiltro(botaoFiltroInicial) {
        window.addEventListener('DOMContentLoaded', ()=> {
            botaoFiltroInicial.addEventListener('click', ()=> {
                const secaoFiltro = document.getElementById('f');

                if(secaoFiltro.children.length < 3) {
                    const titulosSelect = document.createElement('h2');
                    titulosSelect.classList.add('f-t2');
                    titulosSelect.innerHTML = 'Selecione a Cidade:';
    
                    secaoFiltro.appendChild(titulosSelect);
    
                    const select = document.createElement('select'); 
                    select.classList.add('f-selecao');
                    select.setAttribute('name', 'CDD');
    
                    secaoFiltro.appendChild(select);
    
                    for(let i = 0; i < 3; i++) {
                        const opcoes = document.createElement('option');
                        opcoes.classList.add('f-opcao');
    
                        if(i == 0) {
                            opcoes.innerHTML = 'Cidade';
                            opcoes.setAttribute('value', 'CDD');
    
                            select.appendChild(opcoes);
                        }else if(i == 1) {
                            opcoes.innerHTML = 'Salvador';
                            opcoes.setAttribute('value', 'SSA');
    
                            select.appendChild(opcoes);
                        }else if(i == 2) {
                            opcoes.innerHTML = 'Lauro de Freitas';
                            opcoes.setAttribute('value', 'LAF');
    
                            select.appendChild(opcoes);
                        }
                    }
    
                    const botaoProximaPerg = document.createElement('button');
                    botaoProximaPerg.classList.add('f-b');
                    botaoProximaPerg.innerHTML = 'Mais Informações+';
    
                    secaoFiltro.appendChild(botaoProximaPerg);
    
                    botaoProximaPerg.addEventListener('click', ()=> {
                        const titulosSelect = document.createElement('h2');
                        titulosSelect.classList.add('f-t2');
                        titulosSelect.innerHTML = 'Selecione o Seu Interesse:';
        
                        secaoFiltro.appendChild(titulosSelect);
        
                        const select2 = document.createElement('select'); 
                        select2.classList.add('f-selecao');
                        select2.setAttribute('name', 'INT');
                
                        secaoFiltro.appendChild(select2);
    
                        for(let i = 0; i < 3; i++) {
                            const opcoes = document.createElement('option');
                            opcoes.classList.add('f-opcao');
    
                            if(i == 0) {
                                opcoes.innerHTML = 'Interesse';
                                opcoes.setAttribute('value', 'INT');
                                
                                select2.appendChild(opcoes);
                            }else if(i == 1) {
                                opcoes.innerHTML = 'Compra';
                                opcoes.setAttribute('value', 'CMP');
    
                                select2.appendChild(opcoes);
                            }else if(i == 2) {
                                opcoes.innerHTML = 'Aluguel';
                                opcoes.setAttribute('value', 'ALG');
    
                                select2.appendChild(opcoes);
                            }
                        }
                        secaoFiltro.removeChild(botaoProximaPerg);
                        
                        const botaoProximaPerg2 = document.createElement('button');
                        botaoProximaPerg2.classList.add('f-b');
                        botaoProximaPerg2.innerHTML = 'Mais Informações+';
    
                        secaoFiltro.appendChild(botaoProximaPerg2);
    
                        secaoFiltro.removeChild(botaoEnviar);
    
                        const botaoEnviar2 = document.createElement('button');
                        botaoEnviar2.classList.add('f-b');
                        botaoEnviar2.innerHTML = 'Procurar';
    
                        botaoEnviar2.addEventListener('click', ()=> {
                            if(select2.value === 'INT' && select.value === 'CDD') {
                                alert('Selecione um valor para pelo menos um dos campos por favor!');
                            }else {
                                this.difusorFiltro2Respostas(select.value, select2.value);
                            }
                        });
    
                        secaoFiltro.appendChild(botaoEnviar2);
    
                        botaoProximaPerg2.addEventListener('click', ()=> {
                            const titulosSelect = document.createElement('h2');
                            titulosSelect.classList.add('f-t2');
                            titulosSelect.innerHTML = 'Selecione o Tipo de Moradia:';
            
                            secaoFiltro.appendChild(titulosSelect);
            
                            const select3 = document.createElement('select'); 
                            select3.classList.add('f-selecao');
                            select3.setAttribute('name', 'TIM');
                    
                            secaoFiltro.appendChild(select3);
        
                            for(let i = 0; i < 3; i++) {
                                const opcoes = document.createElement('option');
                                opcoes.classList.add('f-opcao');
        
                                if(i == 0) {
                                    opcoes.innerHTML = 'Tipo';
                                    opcoes.setAttribute('value', 'TIP');
    
                                    select3.appendChild(opcoes);
                                }else if(i == 1) {
                                    opcoes.innerHTML = 'Casa';
                                    opcoes.setAttribute('value', 'CAS');
                
                                    select3.appendChild(opcoes);
                                }else if(i == 2) {
                                    opcoes.innerHTML = 'Apartamento';
                                    opcoes.setAttribute('value', 'APA');
    
                                    select3.appendChild(opcoes);
                                }
                            }
                            secaoFiltro.removeChild(botaoProximaPerg2);
        
                            secaoFiltro.removeChild(botaoEnviar2);
        
                            const botaoEnviar3 = document.createElement('button');
                            botaoEnviar3.classList.add('f-b');
                            botaoEnviar3.innerHTML = 'Procurar';
    
                            botaoEnviar3.addEventListener('click', ()=> {
                                if(select3.value === 'TIP' && select2.value === 'INT' && select.value === 'CDD') {
                                    alert('Selecione um valor para pelo menos um dos campos!');
                                }else {
                                    this.difusorFiltro3Respostas(select.value, select2.value, select3.value);
                                }
                            });
    
                            secaoFiltro.appendChild(botaoEnviar3);
                        });
                    });
    
                    const botaoEnviar = document.createElement('button');
                    botaoEnviar.classList.add('f-b');
                    botaoEnviar.innerHTML = 'Procurar';
    
                    botaoEnviar.addEventListener('click', () => {
                        if(select.value === 'CDD') {
                            alert('Selecione um valor para o campo por favor!')
                        }else {
                            this.difusorFiltro1Resposta(select.value);
                        }
                    });
                    secaoFiltro.appendChild(botaoEnviar);
                    
                }else {
                    console.error('ERROR: Filtro já ativo!');
                }
            });
        });
    }

    difusorFiltro1Resposta(selectCidade) {
        if(selectCidade === 'SSA') {
            window.location.replace('pages/resultadoFiltro.html');
        }else {
            window.location.replace('pages/naoEncontrado.html');
        }
    }

    difusorFiltro2Respostas(selectCidade, selectInteresse) {
        if(selectCidade === 'LAF' || selectInteresse === 'ALG') {
            window.location.replace('pages/naoEncontrado.html');
        }else {
            window.location.replace('pages/resultadoFiltro.html');
        }
    }

    difusorFiltro3Respostas(selectCidade, selectInteresse, selectTipo) {
        if(selectCidade === 'LAF' || selectInteresse === 'ALG' || selectTipo === 'CAS') {
            window.location.replace('pages/naoEncontrado.html');
        }else {
            window.location.replace('pages/resultadoFiltro.html');
        }
    }
}