// configuration Options
// player  otions & enemys?

const Config = {
  //player
  playerBulletVelocity: -600,
  playerSpeed: 500,
  playerTurnSpeed: 20,
  playerFireThrottle: 200,
  shellSpeed: +300,

  // Blue team
  blueBulletVelocity: -300,
  blueSpeed: 200,
  blueFireInterval: 900,
  blueDamage: 10,
  blueArmour: 10,
  blueDetectionRadious: 10,

  //misalanias
  soundVolume: 0.1,
  healthBarHeight: 25,
  healthBarWidth: 400,
  totalHp: 100,
  missileSpeed: -400,
  bulletSize: 5,
  spawnTime: 3000,

  //ennermy stats  // red for time being
  redBulletVelocity: -300,
  redSpeed: 200,
  redFireInterval: 900,
  redDamage: 10,
  redArmour: 10,
  redDetectionRadious: 10,
};

//do i seperate them?

export default Config;
