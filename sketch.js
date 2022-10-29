var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player, game;
var playerCount; //contagem de players totais
var gameState; //estado de jogo

function preload() {
  //pre carrega as imagens
  backgroundImage = loadImage("./assets/planodefundo.png");
}

function setup() {
  //função de configuração
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database(); //ligando o banco de dados
  game = new Game(); //criando um novo jogo
  game.start(); //iniciando um novo jogo
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
}

function windowResized() {
  //estica ou diminui a tela
  resizeCanvas(windowWidth, windowHeight);
}
