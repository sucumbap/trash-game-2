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
    //steve inicial
    let i = Math.floor((Math.random() * 9));
    alert(`Steve diz: ${facts[i]}`);
    world.setTileLocationCallback(10, 55, 1, 1, null);
  });

  world.setTileLocationCallback(21, 51, 2, 2, ()=> {
    //tree
    let i = Math.floor((Math.random() * 9));
    alert(`Árvore diz: ${facts[i]}`);
    world.setTileLocationCallback(21, 51, 2, 2, null);
  });

  world.setTileLocationCallback(52, 50, 1, 1, ()=> {
    //gajo do cemiterio
    let i = Math.floor((Math.random() * 9));
    alert(`Gravekeeper diz: ${facts[i]}`);
    world.setTileLocationCallback(52, 50, 1, 1, null);
  });

  world.setTileLocationCallback(38, 26, 1, 1, ()=> {
    //gangster da casa
    let i = Math.floor((Math.random() * 9));
    alert(`Gangster diz: ${facts[i]}`);
    world.setTileLocationCallback(36, 26, 1, 1, null);
  });

  world.setTileLocationCallback(8, 25, 1, 1, ()=> {
    //steve da casa
    let i = Math.floor((Math.random() * 9));
    alert(`Steve diz: ${facts[i]}`);
    world.setTileLocationCallback(8, 25, 1, 1, null);
  });

  world.setTileLocationCallback(2, 15, 1, 1, ()=> {
    //gangster da rua
    let i = Math.floor((Math.random() * 9));
    alert(`Gangster diz: ${facts[i]}`);
    world.setTileLocationCallback(2, 15, 1, 1, null);
  });

  world.setTileLocationCallback(12, 4, 1, 1, ()=> {
    //mago
    let i = Math.floor((Math.random() * 9));
    alert(`Mago diz: ${facts[i]}`);
    world.setTileLocationCallback(12, 4, 1, 1, null);
  });

  world.setTileLocationCallback(12, 5, 1, 1, ()=> {
    //bau do mago
    let i = Math.floor((Math.random() * 9));
    alert(`Mago diz: ${facts[i]}`);
    world.setTileLocationCallback(12, 5, 1, 1, null);
  });

  world.setTileLocationCallback(7, 33, 1, 1, ()=> {
    //bau da lagoa
    let i = Math.floor((Math.random() * 9));
    alert(`Baú diz: ${facts[i]}`);
    world.setTileLocationCallback(7, 33, 1, 1, null);
  });

  world.setTileLocationCallback(10, 53, 1, 1, ()=> {
    //bau inicial
    let i = Math.floor((Math.random() * 9));
    alert(`Baú diz: ${facts[i]}`);
    world.setTileLocationCallback(10, 53, 1, 1, null);
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

  this.add.
  text(16, 16, 'Arrow keys to move', {
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
}

let facts = [
  "A palavra “Física” vem do termo physis, que significa natureza, portanto, esta ciência dedica-se à compreensão de fenómenos naturais, reconstruindo-os por meio de experiências e descrevendo-os através de equações matemáticos.",
  "Se dois objetos de massas diferentes forem abandonados de uma mesma altura, chegarão ao solo ao mesmo tempo, se a resistência do ar puder ser desconsiderada. Ou seja, podemos largar uma bola de bowling e um berlinde da mesma altura, e vão chegar ao chão ao mesmo tempo.",
  "A luz do Sol leva mais de 8 minutos para chegar à Terra e a sua temperatura chega a 5 500 ºC.",
  "O céu da Terra é azul porque as moléculas de azoto e de oxigénio, que formam a maior parte da atmosfera, filtram a componente azul da luz solar. Já em Marte, o céu é cor-de-rosa, em Urano é verde, em Vénus é amarelo-laranja, em Júpiter é preto e não se vêem estrelas, e em Plutão é negro, mas estrelado.",
  "Um espirro pode atingir uma velocidade alucinante - até 160 km por hora.",
  "Os cadernos da cientista Marie Curie, responsável pela descoberta dos elementos químicos polónio e rádio, ainda são radioativos! O longo período de exposição à radioatividade foi fatal para Marie Curie e, mesmo mais de um século depois das experiências, os cadernos que ela usava continuam altamente perigosos.",
  "O ano de 1995 foi o ano mais quente da Terra, pelo menos, desde há cento e quarenta anos, quando se iniciou o registo regular das temperaturas.",
  "A água pura em si não conduz eletricidade. São as impurezas na água, como o sal, que o fazem. Mas como a água com que nos deparamos diariamente não é 100% pura, o melhor a fazer é manter o secador longe da banheira."
];