var painel = document.getElementById("painel");
var st = document.getElementById("status");

function ativar() {
    painel.innerHTML = "Usuário ativo";
    painel.style.backgroundColor = "green";
    painel.style.color = "white";
    st.innerHTML = "Status: Ativo";
}

function desativar() {
    painel.innerHTML = "Usuário inativo";
    painel.style.backgroundColor = "gray";
    painel.style.color = "white";
    st.innerHTML = "Status: Inativo";
}

function entrar() {
    painel.innerHTML = "Interagindo...";
    painel.style.backgroundColor = "lightblue";
    painel.style.color = "black";
}

function sair() {
    painel.innerHTML = "Aguardando ação";
    painel.style.backgroundColor = "lightgray";
    painel.style.color = "black";
}
