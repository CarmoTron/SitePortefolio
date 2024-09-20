// // Adiciona um evento de clique ao contêiner de projetos
// document.getElementById("projetos-container").addEventListener("click", function(event) {
//     // Verifica se o elemento clicado é uma div de projeto
//     if (event.target.classList.contains("img-port")) {
//         // Obtém o ID do projeto clicado
//         var projetoId = event.target.id;
//         // Redireciona para a página correspondente com base no ID do projeto
//         if (projetoId === "projeto_1") {
//             window.location.href = "https://github.com/CarmoTron/Jogo_Galo_V_Console";
//         } else if (projetoId === "projeto_2") {
//             window.location.href = "pagina_projeto_2.html";
//         } else if (projetoId === "projeto_3") {
//             window.location.href = "pagina_projeto_3.html";
//         }
//     }
// });


document.getElementById("projeto_1").addEventListener("click", function() {
    window.open("https://github.com/CarmoTron/Jogo_Galo_V_Console", "_blank"); // Redireciona para a página do projeto 1
});
document.getElementById("projeto_2").addEventListener("click", function() {
    window.open("https://github.com/CarmoTron/Memory-Game","_blank"); // Redireciona para a página do projeto 2
});
document.getElementById("projeto_3").addEventListener("click", function() {
    window.open("https://github.com/CarmoTron/ANDROID","_blank"); // Redireciona para a página do projeto 3
});
document.getElementById("projeto_4").addEventListener("click", function() {
    window.open("https://github.com/CarmoTron/DB_Project_Library","_blank"); // Redireciona para a página do projeto 4
});
document.getElementById("projeto_5").addEventListener("click", function() {
    window.open("mastermindBruno.exe","_blank"); // Redireciona para a página do projeto 5
});
document.getElementById("projeto_6").addEventListener("click", function() {
    window.open("https://github.com/CarmoTron/CRUD_with_Flask","_blank"); // Redireciona para a página do projeto 6
});