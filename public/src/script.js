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
    
  const ceiling = map.createLayer("ceiling", tileset, 60, 60);
  const world = map.createLayer("world", tileset, 60, 60);
  const floor = map.createLayer("floor", tileset, 60, 60);
  const npcLayer = map.createLayer("NPC", tileset, 60, 60);
    
  world.setCollisionByProperty({ collide: true });
  world.setDepth(10);
    
  const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
      
    
  player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "sprite", "misa-front").
  setSize(30, 40).
  setOffset(0, 24);
    
  this.physics.add.collider(player, world);
    
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
    
}  
    
function update(time, delta) {
  const speed = 175;
  const prevVelocity = player.body.velocity.clone();
    
      // if (this.physics.map.overlap(this.player, this.npcLayer)) {
      //   alert("Welcome");
      // }
    
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