//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//variaveis da bolinha
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
letraqueteAltura = 90;

function setup() {
  createCanvas(600, 400) ;
}
    
function draw() {
  background(0);
  mostraBolinha()
   movimentaMinhaRaquete
   verificaColisaoBorda()