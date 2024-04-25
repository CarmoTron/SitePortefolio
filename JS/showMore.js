document.addEventListener("DOMContentLoaded", function() {
    var mostrarMaisBtn = document.getElementById("btn-mostra");
    var projetosOcultos = document.querySelectorAll(".img-port.hidden");
    
    mostrarMaisBtn.addEventListener("click", function() {
        projetosOcultos.forEach(function(projeto) {
            projeto.classList.remove("hidden");
        });
        mostrarMaisBtn.style.display = "none"; // Esconder o botão depois de mostrar todos os projetos
    });
});

