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
    //gajo inicial
    alert("welcome sdfgwerg ewr to city");
    world.setTileLocationCallback(10, 55, 1, 1, null);
  });

  world.setTileLocationCallback(21, 51, 2, 2, ()=> {
    //tree
    alert("welcome sdfgwerg ewr to city");
    world.setTileLocationCallback(21, 51, 2, 2, null);
  });

  world.setTileLocationCallback(52, 50, 1, 1, ()=> {
    //gajo do cemiterio
    alert("welcome sdfgwerg ewr to city");
    world.setTileLocationCallback(52, 50, 1, 1, null);
  });

  world.setTileLocationCallback(38, 26, 1, 1, ()=> {
    //gangster da casa
    alert("welcome sdfgwerg ewr to city");
    world.setTileLocationCallback(36, 26, 1, 1, null);
  });

  world.setTileLocationCallback(8, 25, 1, 1, ()=> {
    //steve da casa
    alert("welcome sdfgwerg ewr to city");
    world.setTileLocationCallback(8, 25, 1, 1, null);
  });

  world.setTileLocationCallback(2, 15, 1, 1, ()=> {
    //gangster da rua
    alert("welcome sdfgwerg ewr to  city");
    world.setTileLocationCallback(2, 15, 1, 1, null);
  });

  world.setTileLocationCallback(12, 4, 1, 1, ()=> {
    //mago
    alert("welcome sdfgwerg ewr to  city");
    world.setTileLocationCallback(12, 4, 1, 1, null);
  });

  world.setTileLocationCallback(12, 5, 1, 1, ()=> {
    //bau do mago
    alert("welcome sdfgwerg ewr to  city");
    world.setTileLocationCallback(12, 5, 1, 1, null);
  });

  world.setTileLocationCallback(7, 33, 1, 1, ()=> {
    //bau da lagoa
    alert("welcome sdfgwerg ewr to  city");
    world.setTileLocationCallback(7, 33, 1, 1, null);
  });

  world.setTileLocationCallback(10, 53, 1, 1, ()=> {
    //bau inicial
    alert("welcome sdfgwerg ewr to city");
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