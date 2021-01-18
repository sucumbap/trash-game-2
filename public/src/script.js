const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
      parent: "game-container",
      pixelArt: true,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 } 
        } 
      },
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };

const game = new Phaser.Game(config);
let cursors;
let player;
let showDebug = false;
let collectedFacts = 0;
    
function preload() {
  this.load.image("terreno", "./asside/tilesets/bigtileset.png");
    
  this.load.tilemapTiledJSON("map", "./asside/maps/greg3.json");
  this.load.atlas("sprite", "./asside/sprite/misa.png", "./asside/sprite/misa.json");
}
    
function create() {
  const map = this.make.tilemap({ key: "map" });
  const tileset = map.addTilesetImage("bigtileset", "terreno");
    
  const ceiling = map.createLayer("ceiling", tileset, 0, 0);
  const world = map.createLayer("world", tileset, 0, 0);
  const floor = map.createLayer("floor", tileset, 0, 0);
  const npcLayer = map.createLayer("npcLayer", tileset, 0, 0);
    
  world.setCollisionByProperty({ collide: true });
  world.setDepth(10);
  npcLayer.setCollisionByProperty({ collide: true });
  npcLayer.setDepth(20);
  
  const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

  world.setTileLocationCallback(10, 55, 1, 1, ()=> {
    //steve inicial 1
    alert(`Steve diz: ${getFact(facts)}`);
    world.setTileLocationCallback(10, 55, 1, 1, null);
  });

  world.setTileLocationCallback(21, 51, 2, 2, ()=> {
    //tree 2
    alert(`Árvore diz: O ano de 1995 foi o ano mais quente da Terra, pelo menos, desde há cento e quarenta anos, quando se iniciou o registo regular das temperaturas. Eu estava lá!`);
    collectedFacts++;
    texto.setText(`Use as setas para mover\n${collectedFacts}/20`);
    world.setTileLocationCallback(21, 51, 2, 2, null);
  });

  world.setTileLocationCallback(52, 50, 1, 1, ()=> {
    //gajo do cemiterio 3
    alert(`Estátua diz: ${getFact(facts)}`);
    world.setTileLocationCallback(52, 50, 1, 1, null);
  });

  world.setTileLocationCallback(38, 26, 1, 1, ()=> {
    //gangster da casa 4
    alert(`Gangster diz: ${getFact(facts)}`);
    world.setTileLocationCallback(38, 26, 1, 1, null);
  });

  world.setTileLocationCallback(8, 25, 1, 1, ()=> {
    //steve da casa 5
    alert(`Steve diz: ${getFact(facts)}`);
    world.setTileLocationCallback(8, 25, 1, 1, null);
  });

  world.setTileLocationCallback(2, 15, 1, 1, ()=> {
    //gangster da rua 6
    alert(`Gangster diz: ${getFact(facts)}`);
    world.setTileLocationCallback(2, 15, 1, 1, null);
  });

  world.setTileLocationCallback(13, 4, 1, 1, ()=> {
    //mago 7
    alert(`Mago diz: ${getFact(facts)}`);
    world.setTileLocationCallback(13, 4, 1, 1, null);
  });

  world.setTileLocationCallback(12, 5, 1, 1, ()=> {
    //bau do mago 8
    alert(`Baú diz: ${getFact(facts)}`);
    world.setTileLocationCallback(12, 5, 1, 1, null);
  });

  world.setTileLocationCallback(7, 33, 1, 1, ()=> {
    //bau da lagoa 9
    alert(`Baú diz: ${getFact(facts)}`);
    world.setTileLocationCallback(7, 33, 1, 1, null);
  });

  world.setTileLocationCallback(10, 53, 1, 1, ()=> {
    //bau inicial 10
    alert(`Baú diz: ${getFact(facts)}`);
    world.setTileLocationCallback(10, 53, 1, 1, null);
  });
  world.setTileLocationCallback(33, 51, 1, 1, ()=> {
    //gangster inicial 11
    alert(`Ladrão diz: ${getFact(facts)}`);
    world.setTileLocationCallback(33, 51, 1, 1, null);
  });
  world.setTileLocationCallback(29, 42, 1, 1, ()=> {
    //farmer 12
    alert(`Agricultor diz: ${getFact(facts)}`);
    world.setTileLocationCallback(29, 42, 1, 1, null);
  });
  world.setTileLocationCallback(10, 43, 1, 1, ()=> {
    //estatua da relva 13
    alert(`Estátua diz: ${getFact(facts)}`);
    world.setTileLocationCallback(10, 43, 1, 1, null);
  });
  world.setTileLocationCallback(41, 37, 1, 1, ()=> {
    //aldeão 14
    alert(`Aldeão diz: ${getFact(facts)}`);
    world.setTileLocationCallback(41, 37, 1, 1, null);
  });
  world.setTileLocationCallback(30, 25, 1, 1, ()=> {
    //Nobre 15
    alert(`Nobre diz: ${getFact(facts)}`);
    world.setTileLocationCallback(30, 25, 1, 1, null);
  });
  world.setTileLocationCallback(22, 26, 1, 1, ()=> {
    //Blacksmith estátua 16
    alert(`Estátua diz: ${getFact(facts)}`);
    world.setTileLocationCallback(22, 26, 1, 1, null);
  });
  world.setTileLocationCallback(29, 15, 1, 1, ()=> {
    //arvore 17 
    alert(`Árvore diz: "Os cientistas da NASA acreditam que pode haver entre 100 a 400 biliões de estrelas na Via Láctea, reportado pela Snopes (site de verificação de factos). No entanto, um artigo de 2015 publicado na revista Nature, estimou que o número de árvores à volta do mundo é muito maior: 3,04 triliões."`);
    collectedFacts++;
    texto.setText(`Use as setas para mover\n${collectedFacts}/20`);
    world.setTileLocationCallback(29, 15, 1, 1, null);
  });
  world.setTileLocationCallback(54, 14, 1, 1, ()=> {
    //robin hood 18
    alert(`Robin Hood diz: ${getFact(facts)}`);
    world.setTileLocationCallback(54, 14, 1, 1, null);
  });
  world.setTileLocationCallback(46, 4, 1, 1, ()=> {
    //espirito da lagoa 19
    alert(`Espírito da Lagoa diz: ${getFact(facts)}`);
    world.setTileLocationCallback(46, 4, 1, 1, null);
  });
  world.setTileLocationCallback(58, 51, 1, 1, ()=> {
    //Estátua da Páscoa
    alert(`Estátua da Páscoa diz: ${getFact(facts)}`);
    world.setTileLocationCallback(58, 51, 1, 1, null);
  });

  player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "sprite", "misa-front").
  setSize(30, 40).
  setOffset(0, 24);
    
  this.physics.add.collider(player, world);
  this.physics.add.collider(player, npcLayer);
    
  const anims = this.anims;
    
    
  anims.create({
    key: "misa-left-walk",
    frames: anims.generateFrameNames("sprite", { prefix: "misa-left-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
    
  anims.create({
    key: "misa-right-walk",
    frames: anims.generateFrameNames("sprite", { prefix: "misa-right-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
    
  anims.create({
    key: "misa-front-walk",
    frames: anims.generateFrameNames("sprite", { prefix: "misa-front-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
    
  anims.create({
    key: "misa-back-walk",
    frames: anims.generateFrameNames("sprite", { prefix: "misa-back-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
    
  const camera = this.cameras.main;
  camera.startFollow(player);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    
  cursors = this.input.keyboard.createCursorKeys();

  texto = this.add.
  text(16, 16, `Use as setas para mover\n${collectedFacts}/20`, {
    font: "18px monospace",
    fill: "#000000",
    padding: { x: 20, y: 10 },
    backgroundColor: "#ffffff" }).

  setScrollFactor(0).
  setDepth(30);
}  
    
function update(time, delta) {
  const speed = 175;
  const prevVelocity = player.body.velocity.clone();
    
  player.body.setVelocity(0);
    
  if (cursors.left.isDown) {
    player.body.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(speed);
  }
    
  if (cursors.up.isDown) {
    player.body.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    player.body.setVelocityY(speed);
  }
    
  player.body.velocity.normalize().scale(speed);
    
  if (cursors.left.isDown) {
    player.anims.play("misa-left-walk", true);
  } else if (cursors.right.isDown) {
    player.anims.play("misa-right-walk", true);
  } else if (cursors.up.isDown) {
    player.anims.play("misa-back-walk", true);
  } else if (cursors.down.isDown) {
    player.anims.play("misa-front-walk", true);
  } else {
  player.anims.stop();
  
  if (prevVelocity.x < 0) player.setTexture("sprite", "misa-left");else
  if (prevVelocity.x > 0) player.setTexture("sprite", "misa-right");else
  if (prevVelocity.y < 0) player.setTexture("sprite", "misa-back");else
  if (prevVelocity.y > 0) player.setTexture("sprite", "misa-front");
  }
  //game.input.onDown.addOnce(updateText, this);
}

function getFact(facts) {
  if (facts.length >= 0) {
    let random = Math.floor(Math.random() * (facts.length));
    let theFact = facts.splice(random, 1);
    console.log(facts.length);
    collectedFacts++;
    texto.setText(`Use as setas para mover\n${collectedFacts}/20`);
    return theFact;
  } else {
    alert(`por favor recarregue a pagina alguma cena correu mal`)
  }
};

let facts = [
  "A palavra “Física” vem do termo physis, que significa natureza, portanto, esta ciência dedica-se à compreensão de fenómenos naturais, reconstruindo-os por meio de experiências e descrevendo-os através de equações matemáticas.",
  "Se dois objetos de massas diferentes forem abandonados de uma mesma altura, chegarão ao solo ao mesmo tempo, se a resistência do ar puder ser desconsiderada. Ou seja, podemos largar uma bola de bowling e um berlinde da mesma altura, e vão chegar ao chão ao mesmo tempo.",
  "A luz do Sol leva mais de 8 minutos para chegar à Terra e a sua temperatura chega a 5 500 ºC.",
  "O céu da Terra é azul porque as moléculas de azoto e de oxigénio, que formam a maior parte da atmosfera, filtram a componente azul da luz solar. Já em Marte, o céu é cor-de-rosa, em Urano é verde, em Vénus é amarelo-laranja, em Júpiter é preto e não se vêem estrelas, e em Plutão é negro, mas estrelado.",
  "Um espirro pode atingir uma velocidade alucinante - até 160 km por hora.",
  "Os cadernos da cientista Marie Curie, responsável pela descoberta dos elementos químicos polónio e rádio, ainda são radioativos! O longo período de exposição à radioatividade foi fatal para Marie Curie e, mesmo mais de um século depois das experiências, os cadernos que ela usava continuam altamente perigosos.",
  "A água pura em si não conduz eletricidade. São as impurezas na água, como o sal, que o fazem. Mas como a água com que nos deparamos diariamente não é 100% pura, o melhor a fazer é manter o secador longe da banheira.",
  "O corpo de um recém-nascido tem 300 ossos, apesar de num adulto existirem apenas 206. Isto acontece porque durante a vida alguns ossos vão-se fundindo, transformando-se num só.",
  "O corpo humano carrega cerca de 4 litros de sangue, que irrigam uma rede de 200 000 km de artérias, veias e capilares.",
  "O sangue circula a uma velocidade de 2 km por hora.",
  "Um adulto pisca os olhos 24 vezes por minuto e cada piscadela dura apenas 50 milésimos de segundo. Desta forma ficamos sem ver 1,2 segundos em cada minuto.",
  "Gotas de chuva não caem como gotas de lágrimas. A verdade é que elas têm formato esférico.",
  "Sabias que para escapares a um ataque de tubarão basta subires a uma árvore!? ;)",
  "A efervescência do champanhe só existe porque há sujeira ou poeira na taça utilizada para bebê-lo. Se o copo estivesse 100% limpo não haveria espuma alguma.",
  "As letras J e Q não aparecem em lado nenhum da tabela periódica. Vá lá vá, verifica tu mesmo! Eu espero… ",
  "Um olho humano tem uma resolução de 576 megapixeis. Embrulha Apple!",
  "Antes do século 17, a ciência e os cientistas não eram reconhecidos como tal. Na verdade, eles eram chamados “filósofos naturais”, porque o conceito de cientista ainda não tinha sido inventado.",
  "Existem mais variações possíveis de jogos de xadrez (10 elevado a 120) do que átomos observáveis no universo (10 elevado a 80). Bazinga!"
];