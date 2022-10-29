// O formulário serve para cadastrar os jogadores
//ele é a primeira coisa que carrega quando o jogo inicia

class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome"); //caixa de entrada para escrever o nome
    this.playButton = createButton("Jogar"); //botao para começar a jogar
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo"); //titulo do jogo
    this.greeting = createElement("h2"); //cumprimento, dialogo com o jogador
  }

  posicaoNaTela() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2, height / 2);
    this.playButton.position(width / 2, height / 2 + 50);
    this.greeting.position(width / 2, height / 2);

    //estilo dos elementos na tela
    //encontre no arquivo style.css
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  mousePressed() {}

  //esconder
  hide() {
    //quando o jogo começar , o hide irá esconder os seguintes textos:
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  display() {
    //mostrar tudo na tela
    this.posicaoNaTela();
    this.mousePressed();
  }
}
