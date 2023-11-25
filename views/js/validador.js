function validarDadosLogin() {
    let email = document.querySelector("#user");
    let senha = document.querySelector("#password");
    
    if (email.value === "") {
        email.classList.add('campo-vazio');
        return false;
    }
    if (senha.value === "") {
        senha.classList.add('campo-vazio');
        return false;
    }

    return true;
}

function validarDadosCadPessoa(){
    let nome = document.querySelector("#nome");
    let dataNascimento = document.querySelector("#dataNascimento");
    let email = document.querySelector("#email");
    let senha = document.querySelector("#password");
    let senhaSame = document.querySelector("#passworConfirm");
    let telefone = document.querySelector("#telefone");
    let rg = document.querySelector("#rg");
    let genero = document.querySelector("#gender");
    let dataEmissao = document.querySelector("#dataEmissao");
    let estado = document.querySelector("#estado");
    let cidade = document.querySelector("#cidade");
    let naturalidade = document.querySelector("#naturalidade");

    if (nome.value === "") {
        nome.classList.add('campo-vazio');
        return false;
    }
    if (dataNascimento.value === "") {
        dataNascimento.classList.add('campo-vazio');
        return false;
    }
    if (email.value === "") {
        email.classList.add('campo-vazio');
        return false;
    }
    if (senha.value === "") {
        senha.classList.add('campo-vazio');
        return false;
    }
    if (senhaSame.value === "") {
        senhaSame.classList.add('campo-vazio');
        return false;
    }
    if (telefone.value === "") {
        telefone.classList.add('campo-vazio');
        return false;
    }
    if (rg.value === "") {
        rg.classList.add('campo-vazio');
        return false;
    }
    if (genero.value === "") {
        genero.classList.add('campo-vazio');
        return false;
    }
    if (dataEmissao.value === "") {
        dataEmissao.classList.add('campo-vazio');
        return false;
    }
    if (estado.value === "") {
        estado.classList.add('campo-vazio');
        return false;
    }
    if (cidade.value === "") {
        cidade.classList.add('campo-vazio');
        return false;
    }
    if (naturalidade.value === "") {
        naturalidade.classList.add('campo-vazio');
        return false;
    }

    if(senhaSame.value !== senha.value){
        senha.value = ` `
        senhaSame.value = ` `

        senha.classList.add('campo-vazio');
        senhaSame.classList.add('campo-vazio');
        return false;
    }
    return true
}

function validarDadosAtualiza(){
    
    const nameInput = document.querySelector("#name");
    const precoInput = document.querySelector("#preco");
    const descricaoTextarea = document.querySelector("#descricao");

    //  verifica se o nome do produto está vazio
    if(nameInput.value ==""){
        nameInput.classList.add('campo-vazio');
        return false;
    }

    //  verifica se o preço está vazio
    if(precoInput.value ==""){
        precoInput.classList.add('campo-vazio');
    return false;
    }

    //   Verifica se a descrição está preenchida
    if(descricaoTextarea.value ==""){
        descricaoTextarea.classList.add('campo-vazio');
        return false;
    }

    return true
}

function validarDadosProd(){
    
    const nameInput = document.querySelector("#name");
    const precoInput = document.querySelector("#preco");
    const descricaoTextarea = document.querySelector("#descricao");

    //  verifica se o nome do produto está vazio
    if(nameInput.value ==""){
        nameInput.classList.add('campo-vazio');
        return false;
    }

    //  verifica se o preço está vazio
    if(precoInput.value ==""){
        precoInput.classList.add('campo-vazio');
    return false;
    }

    //   Verifica se a descrição está preenchida
    if(descricaoTextarea.value ==""){
        descricaoTextarea.classList.add('campo-vazio');
        return false;
    }

    return true;
}