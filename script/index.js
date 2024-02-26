const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click" , () => nav.classList.toggle("active"));

function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";

    } else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }


}
function leiaMais2(){
    var pontos=document.getElementById("pontos2");
    var maisTexto=document.getElementById("mais2");
    var btnLeiaMais=document.getElementById("btnLeiaMais2");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";

    } else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }


}
function abrirModal(){
    const modal = document.getElementById('janela-modal')
    
    modal.classList.add('abrir')



    modal.addEventListener('click',(e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}
function abrirModal2(){
    const modal = document.getElementById('janela-modal2')
    
    modal.classList.add('abrir')



    modal.addEventListener('click',(e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal2'){
            modal.classList.remove('abrir')
        }
    })
}
function abrirModal3(){
    const modal = document.getElementById('janela-modal3')
    
    modal.classList.add('abrir')



    modal.addEventListener('click',(e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal3'){
            modal.classList.remove('abrir')
        }
    })
}