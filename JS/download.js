// document.getElementById('download-link').addEventListener('click', function(event) {
//     event.preventDefault(); // Evita o comportamento padrão do link (neste caso, a navegação para uma nova página)
    
//     var confirmDownload = confirm('Você deseja fazer o download do meu CV?'); // Exibe um aviso com uma caixa de diálogo de confirmação
    
//     if (confirmDownload) {
//         window.location.href = '/CV/CV - Bruno Mota do Carmo.pdf'; // Inicia o download se o usuário confirmar
//     } else {
//         // O usuário optou por não fazer o download, nada acontece
//     }
// });


// document.getElementById('download-link_2').addEventListener('click', function(event) {
//     event.preventDefault(); // Evita o comportamento padrão do botão

//     var confirmDownload = confirm('Você deseja fazer o download do meu CV?');
    
//     if (confirmDownload) {
//         // Cria um objeto Blob com o conteúdo do arquivo PDF
//         var blob = new Blob(['/CV/CV - Bruno Mota do Carmo.pdf'], { type: 'application/pdf' });
        
//         // Cria um link temporário para o Blob
//         var link = document.createElement('a');
//         link.href = window.URL.createObjectURL(blob);
        
//         // Define o nome do arquivo para download
//         link.download = 'CV - Bruno Mota do Carmo.pdf';
        
//         // Clica automaticamente no link para iniciar o download
//         link.click();
//     } else {
//         // O usuário optou por não fazer o download, nada acontece
//     }
// });

// document.getElementById('download-link').addEventListener('click', function(event) {
//     event.preventDefault(); // Evita o comportamento padrão do botão

//     var confirmDownload = confirm('Você deseja fazer o download do meu CV?');
    
//     if (confirmDownload) {
//         // Cria um objeto Blob com o conteúdo do arquivo PDF
//         var blob = new Blob(['/CV/CV - Bruno Mota do Carmo.pdf'], { type: 'application/pdf' });
        
//         // Cria um link temporário para o Blob
//         var link = document.createElement('a');
//         link.href = window.URL.createObjectURL(blob);
        
//         // Define o nome do arquivo para download
//         link.download = 'CV - Bruno Mota do Carmo.pdf';
        
//         // Clica automaticamente no link para iniciar o download
//         link.click();
//     } else {
//         // O usuário optou por não fazer o download, nada acontece
//     }
// });


document.querySelectorAll('.download-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        var confirmDownload = confirm('Deseja fazer o download do meu CV?');

        if (confirmDownload) {
            // Cria um objeto Blob com o conteúdo do arquivo PDF
            var blob = new Blob(['https://carmotron.github.io/portefolio/CV_Bruno_Carmo.pdf'], { type: 'application/pdf' });
            
            // Cria um link temporário para o Blob
            var downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(blob);
            
            // Define o nome do arquivo para download
            downloadLink.download = 'CV_Bruno_Carmo.pdf';
            
            // Clica automaticamente no link para iniciar o download
            downloadLink.click();
        } else {
            // O usuário optou por não fazer o download, nada acontece
        }
    });
});
