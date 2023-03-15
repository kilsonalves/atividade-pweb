class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nome").value;
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const disciplina = this.disciplinaServico.inserir(nomeDisciplina, codigoDisciplina);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(nomeDisciplina, codigoDisciplina);
            alert('Disciplina inserida com sucesso !');
        } else {
            
        }
    }

    mostrarDisciplinaNoHTML(disciplina, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${disciplina} - ${codigo}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(disciplina);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(disciplina) {
        this.disciplinaServico.remover(disciplina);
    }

}

//
//
//
// for (let aluno of alunos) {
//     // colocar no html nome - idade
//     mostrarAlunoNoHTML(aluno.nome, aluno.idade);
// }
//
// function inserirAluno() {
// }
//
//

