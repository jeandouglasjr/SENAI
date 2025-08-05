const duracoes = [100, 200, 300, 400, 500];

function duracaoMusicas(duracoes){
    const musicasFavoritas = []
    const musicasFormatadas = []
    let tempoTotalFormatado = 0;
    for (let i = 0; i < duracoes.length; i++) {
        const minutos = Math.floor(duracoes / 60);
        const segundos = duracoes % 60;
        musicasFavoritas.push(`${minutos}:${segundos.toString().padStart(2, '0')}`);
        tempoTotal += duracoes[i];

        if (minutos >= 2 && segundos <= 5) {
            musicasFavoritas.push(duracoes[i]);
        }
    }

    return {
        musicasFormatadas,
        musicasFavoritas,
        totalMinutos: Math.floor(tempoTotal / 60),
        totalSegundos: tempoTotal % 60
    }
}