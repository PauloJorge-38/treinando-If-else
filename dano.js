const atacante = prompt ("Qual é o nome do atacante?")
const poderDeAtaque = prompt ("Qual é o seu poder de ataque?")


const defensor = prompt("Qual é o nome do personagem defensor?")
let pontosDeVida = prompt("Quantos pontos de vida ele possui?")
const podeDeDefesa = prompt("Qual é o seu poder de defesa?")
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > podeDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - podeDeDefesa
} else if (poderDeAtaque > podeDeDefesa && possuiEscudo ==="Sim") {
    danoCausado = (poderDeAtaque - podeDeDefesa) / 2
} 

pontosDeVida -= danoCausado


alert (atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de vida: " + pontosDeVida + 
    "\nPoder de defesa: " + podeDeDefesa + "\nPossui escudo: " + possuiEscudo
)