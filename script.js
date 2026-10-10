
function mostrarSkill(nomeDaSkill) {
      
    let titulo = document.getElementById("tituloSkill");
    let descricao = document.getElementById("descricaoSkill");
    let barra = document.getElementById("barraProgresso");

    barra.style.width = "0%";
    
    if (nomeDaSkill === 'html') {
        titulo.textContent = "HTML5";
        descricao.textContent = "A estrutura do navio! Com HTML, eu construo o casco, os mastros e os conveses de qualquer página web, organizando o conteúdo.";
        
      
        setTimeout(function() { barra.style.width = "90%"; }, 100);
    } 
    
    else if (nomeDaSkill === 'css') {
        titulo.textContent = "CSS3";
        descricao.textContent = "As velas e a pintura! O CSS é a mágica que deixa tudo com cara de tesouro, cheio de cores, animações e estilo pirata.";
        setTimeout(function() { barra.style.width = "80%"; }, 100);
    } 
    
    else if (nomeDaSkill === 'js') {
        titulo.textContent = "JavaScript";
        descricao.textContent = "O leme e os canhões! É o JavaScript que dá vida ao site, fazendo ele pensar e reagir aos cliques do usuário.";
        setTimeout(function() { barra.style.width = "40%"; }, 100);
    } 
    
    else if (nomeDaSkill === 'mysql') {
        titulo.textContent = "MySQL";
        descricao.textContent = "O baú do tesouro fechado a sete chaves! Onde guardamos todo o ouro e as informações de forma segura no banco de dados.";
        setTimeout(function() { barra.style.width = "60%"; }, 100);
    } 
    
    else if (nomeDaSkill === 'csharp') {
        titulo.textContent = "C# (C-Sharp)";
        descricao.textContent = "A espada afiada da programação! Uma linguagem poderosa para criar lógicas complexas nos bastidores.";
        setTimeout(function() { barra.style.width = "49%"; }, 100);
    } 
    
    else if (nomeDaSkill === 'ingles') {
        titulo.textContent = "Inglês Básico";
        descricao.textContent = "O idioma dos sete mares! Essencial para ler pergaminhos antigos (documentações) e evoluir na comunicação técnica.";
        setTimeout(function() { barra.style.width = "50%"; }, 100);
    }
}



function trocarTema() {
   
    let corpoDoSite = document.body;
    
   
    corpoDoSite.classList.toggle("tema-fantasma");
}