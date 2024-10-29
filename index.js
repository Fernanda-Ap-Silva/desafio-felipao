// Variáveis para armazenar o nome do herói e sua quantidade de experiência (XP)
let nomeHeroi = "ExemploHeroi"; // Insira o nome do herói aqui
let xpHeroi = 7500; // Insira o XP do herói aqui para teste

// Variável para armazenar o nível do herói
let nivelHeroi;

// Estrutura de decisão para classificar o herói com base em seu XP
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 5001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina Diamante";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else if (xpHeroi >= 10001) {
    nivelHeroi = "Radiante";
}

// Exibindo a saída com o nome do herói e seu nível
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
