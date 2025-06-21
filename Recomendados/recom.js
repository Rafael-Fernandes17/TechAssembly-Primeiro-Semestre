document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos 'componente'
    const componentes = document.querySelectorAll('.componente');

    componentes.forEach(componente => {
        // Pega o cabeçalho de cada componente
        const header = componente.querySelector('.componente-header');

        header.addEventListener('click', () => {
            // Verifica se o componente clicado já está ativo
            const estavaAtivo = componente.classList.contains('ativo');

            // Primeiro, remove a classe 'ativo' de TODOS os componentes
            componentes.forEach(item => {
                item.classList.remove('ativo');
            });

            // Se o componente clicado NÃO estava ativo, ele se torna ativo.
            // Se já estava ativo, o passo anterior já o fechou.
            if (!estavaAtivo) {
                componente.classList.add('ativo');
            }
        });
    });

});