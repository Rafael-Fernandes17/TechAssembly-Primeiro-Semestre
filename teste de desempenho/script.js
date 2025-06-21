// script.js

// --- Dados dos Componentes (Exemplo - você vai expandir isso!) ---
// Estes são dados fictícios/simplificados. Em um cenário real, você buscaria
// benchmarks de sites confiáveis (ex: UserBenchmark, PassMark, TechPowerUp)
// e os adaptaria para seu uso, citando sempre a fonte.

// script.js

// --- Dados dos Componentes (Exemplo Expandido - você vai expandir isso!) ---
// Estes são dados fictícios/simplificados. Em um cenário real, você buscaria
// benchmarks de sites confiáveis (ex: UserBenchmark, PassMark, TechPowerUp)
// e os adaptaria para seu uso, citando sempre a fonte.

const dadosComponentes = {
    processadores: [
        { id: 'cpu0', nome: 'Selecione um Processador', soquete: '', scoreCpu: 0, consumoWatts: 0, placeholder: true },
        // Intel
        { id: 'cpu1', nome: 'Intel Core i9-14900K', soquete: 'LGA1700', scoreCpu: 22000, consumoWatts: 253, geracao: '14th' },
        { id: 'cpu2', nome: 'Intel Core i7-14700K', soquete: 'LGA1700', scoreCpu: 19500, consumoWatts: 253, geracao: '14th' },
        { id: 'cpu3', nome: 'Intel Core i5-14600K', soquete: 'LGA1700', scoreCpu: 16000, consumoWatts: 181, geracao: '14th' },
        { id: 'cpu4', nome: 'Intel Core i9-13900K', soquete: 'LGA1700', scoreCpu: 21000, consumoWatts: 253, geracao: '13th' },
        { id: 'cpu5', nome: 'Intel Core i7-13700K', soquete: 'LGA1700', scoreCpu: 18500, consumoWatts: 253, geracao: '13th' },
        { id: 'cpu6', nome: 'Intel Core i5-13600K', soquete: 'LGA1700', scoreCpu: 15500, consumoWatts: 181, geracao: '13th' },
        { id: 'cpu7', nome: 'Intel Core i5-12400F', soquete: 'LGA1700', scoreCpu: 12000, consumoWatts: 117, geracao: '12th' },
        // AMD
        { id: 'cpu8', nome: 'AMD Ryzen 9 7950X3D', soquete: 'AM5', scoreCpu: 20500, consumoWatts: 120, geracao: 'Zen 4' },
        { id: 'cpu9', nome: 'AMD Ryzen 7 7800X3D', soquete: 'AM5', scoreCpu: 17500, consumoWatts: 120, geracao: 'Zen 4' },
        { id: 'cpu10', nome: 'AMD Ryzen 9 7900X', soquete: 'AM5', scoreCpu: 19000, consumoWatts: 170, geracao: 'Zen 4' },
        { id: 'cpu11', nome: 'AMD Ryzen 5 7600X', soquete: 'AM5', scoreCpu: 13500, consumoWatts: 105, geracao: 'Zen 4' },
        { id: 'cpu12', nome: 'AMD Ryzen 7 5800X3D', soquete: 'AM4', scoreCpu: 14000, consumoWatts: 105, geracao: 'Zen 3' },
        { id: 'cpu13', nome: 'AMD Ryzen 5 5600X', soquete: 'AM4', scoreCpu: 10000, consumoWatts: 65, geracao: 'Zen 3' },
    ],
    placasMae: [
        { id: 'mb0', nome: 'Selecione uma Placa Mãe', soquete: '', tipoRam: '', pcie: '', placeholder: true },
        // Intel LGA1700 (DDR5)
        { id: 'mb1', nome: 'ASUS ROG MAXIMUS Z790 HERO', soquete: 'LGA1700', tipoRam: 'DDR5', pcie: '5.0', chipset: 'Z790' },
        { id: 'mb2', nome: 'MSI PRO Z790-A WIFI', soquete: 'LGA1700', tipoRam: 'DDR5', pcie: '5.0', chipset: 'Z790' },
        { id: 'mb3', nome: 'Gigabyte AORUS ELITE AX Z790', soquete: 'LGA1700', tipoRam: 'DDR5', pcie: '5.0', chipset: 'Z790' },
        // Intel LGA1700 (DDR4)
        { id: 'mb4', nome: 'MSI PRO B760M-A WIFI (DDR4)', soquete: 'LGA1700', tipoRam: 'DDR4', pcie: '4.0', chipset: 'B760' },
        { id: 'mb5', nome: 'Gigabyte B760M DS3H AX (DDR4)', soquete: 'LGA1700', tipoRam: 'DDR4', pcie: '4.0', chipset: 'B760' },
        // AMD AM5 (DDR5)
        { id: 'mb6', nome: 'ASUS ROG STRIX X670E-F GAMING WIFI', soquete: 'AM5', tipoRam: 'DDR5', pcie: '5.0', chipset: 'X670E' },
        { id: 'mb7', nome: 'MSI MAG B650 TOMAHAWK WIFI', soquete: 'AM5', tipoRam: 'DDR5', pcie: '4.0', chipset: 'B650' },
        { id: 'mb8', nome: 'Gigabyte B650 AORUS ELITE AX', soquete: 'AM5', tipoRam: 'DDR5', pcie: '4.0', chipset: 'B650' },
        // AMD AM4 (DDR4)
        { id: 'mb9', nome: 'ASUS ROG STRIX B550-F GAMING WIFI II', soquete: 'AM4', tipoRam: 'DDR4', pcie: '4.0', chipset: 'B550' },
        { id: 'mb10', nome: 'MSI B450 TOMAHAWK MAX II', soquete: 'AM4', tipoRam: 'DDR4', pcie: '3.0', chipset: 'B450' },
    ],
    memoriasRam: [
        { id: 'ram0', nome: 'Selecione a Memória RAM', capacidadeGB: 0, tipo: '', velocidadeMHz: 0, latencia: 0, placeholder: true },
        // DDR5
        { id: 'ram1', nome: 'G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5 6400MHz CL32', capacidadeGB: 32, tipo: 'DDR5', velocidadeMHz: 6400, latencia: 32 },
        { id: 'ram2', nome: 'Kingston Fury Beast RGB 32GB (2x16GB) DDR5 6000MHz CL36', capacidadeGB: 32, tipo: 'DDR5', velocidadeMHz: 6000, latencia: 36 },
        { id: 'ram3', nome: 'Corsair Vengeance RGB 64GB (2x32GB) DDR5 5600MHz CL40', capacidadeGB: 64, tipo: 'DDR5', velocidadeMHz: 5600, latencia: 40 },
        { id: 'ram4', nome: 'Teamgroup T-Force Delta RGB 16GB (2x8GB) DDR5 6000MHz CL30', capacidadeGB: 16, tipo: 'DDR5', velocidadeMHz: 6000, latencia: 30 },
        // DDR4
        { id: 'ram5', nome: 'Corsair Vengeance RGB Pro 16GB (2x8GB) DDR4 3600MHz CL18', capacidadeGB: 16, tipo: 'DDR4', velocidadeMHz: 3600, latencia: 18 },
        { id: 'ram6', nome: 'HyperX Fury RGB 32GB (2x16GB) DDR4 3200MHz CL16', capacidadeGB: 32, tipo: 'DDR4', velocidadeMHz: 3200, latencia: 16 },
        { id: 'ram7', nome: 'Crucial Ballistix 8GB (2x4GB) DDR4 3000MHz CL15', capacidadeGB: 8, tipo: 'DDR4', velocidadeMHz: 3000, latencia: 15 },
    ],
    placasVideo: [
        { id: 'gpu0', nome: 'Selecione uma Placa de Vídeo', scoreGpu: 0, vramGB: 0, consumoWatts: 0, pcie: '', placeholder: true },
        // NVIDIA RTX 40 Series
        { id: 'gpu1', nome: 'NVIDIA GeForce RTX 4090', scoreGpu: 15000, vramGB: 24, consumoWatts: 450, pcie: '4.0' },
        { id: 'gpu2', nome: 'NVIDIA GeForce RTX 4080 SUPER', scoreGpu: 13000, vramGB: 16, consumoWatts: 320, pcie: '4.0' },
        { id: 'gpu3', nome: 'NVIDIA GeForce RTX 4070 Ti SUPER', scoreGpu: 11000, vramGB: 16, consumoWatts: 285, pcie: '4.0' },
        { id: 'gpu4', nome: 'NVIDIA GeForce RTX 4070 SUPER', scoreGpu: 9500, vramGB: 12, consumoWatts: 220, pcie: '4.0' },
        { id: 'gpu5', nome: 'NVIDIA GeForce RTX 4060 Ti 8GB', scoreGpu: 6500, vramGB: 8, consumoWatts: 160, pcie: '4.0' },
        // AMD RX 7000 Series
        { id: 'gpu6', nome: 'AMD Radeon RX 7900 XTX', scoreGpu: 13500, vramGB: 24, consumoWatts: 355, pcie: '4.0' },
        { id: 'gpu7', nome: 'AMD Radeon RX 7900 XT', scoreGpu: 12000, vramGB: 20, consumoWatts: 300, pcie: '4.0' },
        { id: 'gpu8', nome: 'AMD Radeon RX 7800 XT', scoreGpu: 9000, vramGB: 16, consumoWatts: 263, pcie: '4.0' },
        { id: 'gpu9', nome: 'AMD Radeon RX 7700 XT', scoreGpu: 7500, vramGB: 12, consumoWatts: 245, pcie: '4.0' },
        // Placas de gerações anteriores (custo-benefício)
        { id: 'gpu10', nome: 'NVIDIA GeForce RTX 3060 Ti', scoreGpu: 7000, vramGB: 8, consumoWatts: 200, pcie: '4.0' },
        { id: 'gpu11', nome: 'AMD Radeon RX 6600 XT', scoreGpu: 5000, vramGB: 8, consumoWatts: 160, pcie: '4.0' },
    ],
    fontes: [
        { id: 'psu0', nome: 'Selecione uma Fonte', potenciaWatts: 0, eficiencia: '', placeholder: true },
        { id: 'psu1', nome: 'Corsair RM1000e (1000W) 80 Plus Gold', potenciaWatts: 1000, eficiencia: 'Gold' },
        { id: 'psu2', nome: 'Cooler Master MWE Gold 850 V2 (850W) 80 Plus Gold', potenciaWatts: 850, eficiencia: 'Gold' },
        { id: 'psu3', nome: 'XPG Core Reactor 750W 80 Plus Gold', potenciaWatts: 750, eficiencia: 'Gold' },
        { id: 'psu4', nome: 'NZXT C650 (650W) 80 Plus Bronze', potenciaWatts: 650, eficiencia: 'Bronze' },
        { id: 'psu5', nome: 'Seasonic Focus Plus Gold 550W 80 Plus Gold', potenciaWatts: 550, eficiencia: 'Gold' },
        { id: 'psu6', nome: 'EVGA 450 BR (450W) 80 Plus Bronze', potenciaWatts: 450, eficiencia: 'Bronze' },
    ]
};

// ... O resto do seu JavaScript permanece o mesmo ...
// (funções popularDropdowns, getComponenteById, compararDesempenho e event listeners)
// Não se esqueça de copiar TODAS as funções abaixo do 'dadosComponentes' também.

// --- Elementos HTML ---
const selectProcessador = document.getElementById('processador');
const selectPlacaMae = document.getElementById('placaMae');
const selectMemoriaRam = document.getElementById('memoriaRam');
const selectPlacaVideo = document.getElementById('placaVideo');
const selectFonte = document.getElementById('fonte');
const btnComparar = document.getElementById('btnComparar');
const resultadosDiv = document.getElementById('resultados');

// --- Funções ---

// Preenche os dropdowns com as opções de componentes
function popularDropdowns() {
    function popular(selectElement, componentes) {
        selectElement.innerHTML = ''; // Limpa opções existentes
        componentes.forEach(componente => {
            const option = document.createElement('option');
            option.value = componente.id;
            option.textContent = componente.nome;
            if (componente.placeholder) {
                option.disabled = true;
                option.selected = true;
                option.hidden = true;
            }
            selectElement.appendChild(option);
        });
    }

    popular(selectProcessador, dadosComponentes.processadores);
    popular(selectPlacaMae, dadosComponentes.placasMae);
    popular(selectMemoriaRam, dadosComponentes.memoriasRam);
    popular(selectPlacaVideo, dadosComponentes.placasVideo);
    popular(selectFonte, dadosComponentes.fontes);
}

// Obtém um componente pelo ID
function getComponenteById(tipo, id) {
    return dadosComponentes[tipo].find(c => c.id === id);
}

// Calcula e exibe os resultados
function compararDesempenho() {
    resultadosDiv.innerHTML = ''; // Limpa resultados anteriores
    let erros = [];
    let avisos = [];

    const procSelecionado = getComponenteById('processadores', selectProcessador.value);
    const mbSelecionada = getComponenteById('placasMae', selectPlacaMae.value);
    const ramSelecionada = getComponenteById('memoriasRam', selectMemoriaRam.value);
    const gpuSelecionada = getComponenteById('placasVideo', selectPlacaVideo.value);
    const fonteSelecionada = getComponenteById('fontes', selectFonte.value);

    // Validação básica: se alguma seleção for o placeholder
    if (procSelecionado.placeholder || mbSelecionada.placeholder || ramSelecionada.placeholder ||
        gpuSelecionada.placeholder || fonteSelecionada.placeholder) {
        erros.push('Por favor, selecione todos os componentes para a comparação.');
    }

    // --- Lógica de Compatibilidade ---
    if (!procSelecionado.placeholder && !mbSelecionada.placeholder) {
        if (procSelecionado.soquete !== mbSelecionada.soquete) {
            erros.push(`Incompatibilidade: O processador (${procSelecionado.nome}) usa soquete ${procSelecionado.soquete}, mas a placa mãe (${mbSelecionada.nome}) usa soquete ${mbSelecionada.soquete}.`);
        }
        if (ramSelecionada.tipo && ramSelecionada.tipo !== mbSelecionada.tipoRam) {
            erros.push(`Incompatibilidade: A memória RAM (${ramSelecionada.nome}) é ${ramSelecionada.tipo}, mas a placa mãe (${mbSelecionada.nome}) suporta ${mbSelecionada.tipoRam}.`);
        }
        if (gpuSelecionada.pcie && mbSelecionada.pcie && parseFloat(gpuSelecionada.pcie) > parseFloat(mbSelecionada.pcie)) {
            avisos.push(`A placa de vídeo (${gpuSelecionada.nome}) usa PCIe ${gpuSelecionada.pcie}, enquanto a placa mãe (${mbSelecionada.nome}) tem PCIe ${mbSelecionada.pcie}. A placa de vídeo funcionará, mas pode ter desempenho limitado em alguns cenários exigentes.`);
        }
    }

    // --- Cálculo de Consumo e Recomendação de Fonte ---
    let consumoEstimadoWatts = 0;
    if (!procSelecionado.placeholder) consumoEstimadoWatts += procSelecionado.consumoWatts;
    if (!gpuSelecionada.placeholder) consumoEstimadoWatts += gpuSelecionada.consumoWatts;
    // Adicione um valor base para outros componentes (SSD, fans, etc.)
    consumoEstimadoWatts += 100; // Valor base aproximado

    let recomendacaoFonte = '';
    if (!fonteSelecionada.placeholder) {
        if (fonteSelecionada.potenciaWatts < consumoEstimadoWatts * 1.2) { // 20% de margem
            avisos.push(`A fonte selecionada (${fonteSelecionada.potenciaWatts}W) pode ser insuficiente. O consumo estimado do sistema é de ${consumoEstimadoWatts}W. Recomenda-se uma fonte de pelo menos ${Math.ceil(consumoEstimadoWatts * 1.2 / 50) * 50}W.`);
        }
    } else {
         avisos.push(`Não foi possível estimar o consumo total sem uma fonte selecionada.`);
    }

    // --- Exibição de Erros/Avisos ---
    if (erros.length > 0) {
        resultadosDiv.innerHTML += `<h3>Problemas Encontrados:</h3>`;
        erros.forEach(erro => {
            resultadosDiv.innerHTML += `<p class="resultado-erro">${erro}</p>`;
        });
        return; // Não prossegue com o cálculo de desempenho se houver erros críticos
    }

    // --- Cálculo de Desempenho (Simplificado) ---
    // Este é um modelo muito básico. Um sistema real é mais complexo.
    // Aqui, estamos somando os scores de CPU e GPU e dando um peso para RAM.
    let scoreTotalEstimado = 0;
    let scoreCpu = procSelecionado.scoreCpu || 0;
    let scoreGpu = gpuSelecionada.scoreGpu || 0;

    // A RAM tem menos impacto direto no score total, mas afeta a performance geral
    let scoreRam = (ramSelecionada.capacidadeGB / 16) * (ramSelecionada.velocidadeMHz / 3200) * 500; // Exemplo de peso

    scoreTotalEstimado = (scoreCpu * 0.45) + (scoreGpu * 0.45) + (scoreRam * 0.10); // Pesos

    // Ajustes baseados na compatibilidade e potencia da fonte
    if (!fonteSelecionada.placeholder && fonteSelecionada.potenciaWatts < consumoEstimadoWatts) {
        scoreTotalEstimado *= 0.8; // Penaliza o score se a fonte for fraca
        avisos.push('A fonte selecionada pode ser uma limitação, o desempenho total pode ser menor.');
    }


    // --- Exibição dos Resultados Finais ---
    resultadosDiv.innerHTML += `<h3>Resultados da Avaliação:</h3>`;
    resultadosDiv.innerHTML += `<p class="resultado-item"><strong>Processador:</strong> ${procSelecionado.nome} (Score: ${procSelecionado.scoreCpu})</p>`;
    resultadosDiv.innerHTML += `<p class="resultado-item"><strong>Placa Mãe:</strong> ${mbSelecionada.nome}</p>`;
    resultadosDiv.innerHTML += `<p class="resultado-item"><strong>Memória RAM:</strong> ${ramSelecionada.nome}</p>`;
    resultadosDiv.innerHTML += `<p class="resultado-item"><strong>Placa de Vídeo:</strong> ${gpuSelecionada.nome} (Score: ${gpuSelecionada.scoreGpu})</p>`;
    resultadosDiv.innerHTML += `<p class="resultado-item"><strong>Fonte:</strong> ${fonteSelecionada.nome} (${fonteSelecionada.potenciaWatts}W)</p>`;

    resultadosDiv.innerHTML += `<p class="resultado-item"><strong>Consumo Estimado do Sistema:</strong> Aproximadamente ${consumoEstimadoWatts}W</p>`;
    resultadosDiv.innerHTML += `<p class="resultado-item"><strong>Score de Desempenho Estimado:</strong> ${scoreTotalEstimado.toFixed(0)} pontos</p>`;

    // Interpretação do Score
    let interpretacaoScore = '';
    if (scoreTotalEstimado >= 20000) {
        interpretacaoScore = 'Este é um sistema de altíssimo desempenho, ideal para jogos em 4K e tarefas profissionais pesadas.';
    } else if (scoreTotalEstimado >= 15000) {
        interpretacaoScore = 'Excelente desempenho para jogos em QHD (1440p) e trabalho com edição/renderização.';
    } else if (scoreTotalEstimado >= 10000) {
        interpretacaoScore = 'Bom desempenho para jogos em Full HD (1080p) no alto/ultra e uso geral avançado.';
    } else if (scoreTotalEstimado >= 5000) {
        interpretacaoScore = 'Desempenho adequado para jogos em Full HD (1080p) no médio/alto e tarefas cotidianas.';
    } else {
        interpretacaoScore = 'Sistema básico, adequado para tarefas do dia a dia e jogos leves.';
    }
    resultadosDiv.innerHTML += `<p class="resultado-item"><strong>Avaliação:</strong> ${interpretacaoScore}</p>`;

    if (avisos.length > 0) {
        resultadosDiv.innerHTML += `<h3 class="resultado-aviso">Avisos e Recomendações:</h3>`;
        avisos.forEach(aviso => {
            resultadosDiv.innerHTML += `<p class="resultado-aviso">${aviso}</p>`;
        });
    }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', popularDropdowns);
btnComparar.addEventListener('click', compararDesempenho);