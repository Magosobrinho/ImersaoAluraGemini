//console.log(dados);

let section = document.getElementById("resultados-pesquisa");
console.log(section);

section.innerHTML = `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dados[0].titulo}</a>
        </h2>
        <p class="descrição-meta">Ferramenta de otimização de processo seletivo</p> 
        <a href="https://www.linkedin.com/jobs/vagas-em-brasília/?currentJobId=3993481293&originalSubdomain=br" target="_blank"> Saiba Mais </a>
    </div>
    `;






