var form,game;
var b,bImg,intro,introImg;
var gameState = 0;
var plant,plantImg;
var walle,walle1Img,walle2Img;
var wa,waImg,trash,trashImg;//GIF//
var t1,t2,t3,t4,m1,m2,m3,m4,m5,m6,tireImg,metalImg,cooperImg,Tscore=0,cube = 0,c;// CUBES MADE,Tscore - trash collected,cube - count of cubes //
var ok = 0;
var junk1, junk2, junk3,junk1Img,junk2Img;
var sound;
var eve,eveImg;
var axiom_m,axiom_mImg, axiom, axiomImg;
var earth,earthImg,rocket,rocketImg,r,space,spaceImg;//r - NPC, rocket - PC// 
//LEVEL  - 2 SATELLITE//
var s1,s2,s1Img,s2Img;
//LEVEL  - 2 SATELLITE//

//LEVEL  - 2, CAMERA VIEW- 2//
var sp_1,sp_2,sp_3,sp_1Img,sp_2Img,sp_3Img;
var ship,shipImg;
var e = 0; //FOR ENTER BUTTON //
var s_c = 0;//FOR SATELLITE COUNT//
var d = 0;//d for Damage to the satellite// 
var t = 0;//// WHEN ROCKET TOUCHES TO THE SHIP,SWAL()////
//LEVEL  - 2//

 //// AFTER REACHING IN AXIOM////
 var axi,k = 0;//IF KEY DOWN THEN CHANGE ANIMATION//
  //// AFTER REACHING IN AXIOM////

function preload() {
  bImg = loadImage("Disney Pixar.png");
  plantImg = loadImage("plant.png");
  walle1Img = loadAnimation("WALLE_side.png");
  walle2Img = loadAnimation("WALLE_side2.png");
  waImg = loadImage("trash_cube.png");
  trashImg = loadAnimation("b1.gif","b2.gif","b3.gif");
  cubeImg = loadImage("cube_1.png");
  eveImg = loadImage("EVE.png");

  //MUSIC//
  m1 = loadSound("bot_m.mp3");
  sound = loadSound("music.mp3");
 // music_button = loadSound("musicB_1.mp3");
  //MUSIC//

  axiom_mImg = loadImage("ship_2.png");
  axiomImg = loadImage("ship_1.jpg");
  //WASTE//
  tireImg = loadImage("tire.png");
  metalImg = loadImage("m1.png");
  cooperImg = loadImage("mm1.png")
  junk1Img = loadImage("junk_1.png");
  junk2Img = loadImage("junk_2.png");
  //WASTE//

  //LEVEL2//
  earthImg = loadImage("earth.png");
  spaceImg = loadImage("sp_1.jpg");
  rocketImg = loadImage("rocket.png");
  s1Img = loadImage("s_1.png"); //SATELLITE//
  shipImg = loadImage("ship_3.png");

  // DIFFERENT VIEWS OF THE SATELLITE //
  s3_1Img = loadAnimation("sat_1.png");
  s3_2Img = loadAnimation("sat_2.png");

  s2_1Img = loadAnimation("sat_2.1.png");
  s2_2Img = loadAnimation("sat_2.2.png");
  // DIFFERENT VIEWS OF THE SATELLITE //

   // CAMERA VIEW - 2//
   sp_1Img = loadImage("sp_1.jpg");
   rc_Img = loadImage("rc_back.png");
  // CAMERA VIEW - 2//

  //LEVEL2//

  //// AFTER REACHING IN AXIOM////
  ax1Img = loadAnimation("assets/ax1.png");
  ax2Img = loadAnimation("assets/ax2.png");
  ax3Img = loadAnimation("assets/ax3.png");
  ax4Img = loadAnimation("assets/ax4.png");
  ax5Img = loadAnimation("assets/ax5.png");
  ax6Img = loadAnimation("assets/ax6.png");
  ax7Img = loadAnimation("assets/ax7.png");
  ax8Img = loadAnimation("assets/ax8.png");
  ax9Img = loadAnimation("assets/ax9.png");
  w1Img = loadImage("assets/walle3.png");//WALL - E BACK VIEW//
  p1Img = loadAnimation("assets/p_1.png");
  p2Img = loadAnimation("assets/p_2.png");
  p3Img = loadAnimation("assets/p_3.png");
  p4Img = loadAnimation("assets/p_4.png");
  p5Img = loadAnimation("assets/p_5.png");
  p6Img = loadAnimation("assets/p_6.png");
  p7Img = loadAnimation("assets/p_7.png");
  p8Img = loadAnimation("assets/p_8.png");
  p9Img = loadAnimation("assets/p_9.png"); 
  p10Img = loadAnimation("assets/p_10.png");
  p11Img = loadAnimation("assets/p_11.png"); 
  //// AFTER REACHING IN AXIOM////

}

function setup(){
  canvas = createCanvas(1100,700);
  
  b = createSprite(550,348,20,20); 
  b.addImage("b1",bImg);
  b.scale = 1.1;

//GIF//
  trash = createSprite(4050,340,30,30);
  trash.addAnimation("tr1",trashImg);
  trash.scale = 2.5; 
 //GIF//  

  //IN THE SERVE STATE//
  wa = createSprite(4300,580,30,30);
  wa.addAnimation("wa1",waImg);
  wa.scale = 0.6;
  
  //IN THE PLAY STATE//

  junk2 = createSprite(7990,420,10,10)
  junk2.addImage("j2",junk2Img);
  junk2.scale = 1.8;

  junk1 = createSprite(3800,480,10,10)
  junk1.addImage("j1",junk1Img);
  junk1.scale = 1.5;

  walle = createSprite(100,6000,30,30);
  walle.addAnimation("walle1",walle1Img);
  walle.addAnimation("walle2",walle2Img);
  walle.scale = 0.6;

  plant = createSprite(9800,610,20,20);
  plant.addImage("p1", plantImg);
  plant.scale = 0.6;

  //// TYRES ////
  t1 = createSprite(8000,650,50,50);
  t1.addAnimation("t1",tireImg);
  t1.scale = 0.2;
  t2 = createSprite(9500,650,50,50);
  t2.addAnimation("t2",tireImg);
  t2.scale = 0.2;
  t3 = createSprite(9100,600,50,50);
  t3.addAnimation("t3",tireImg);
  t3.scale = 0.2;
  t4 = createSprite(8300,600,50,50);
  t4.addAnimation("t4",tireImg);
  t4.scale = 0.2;
 //// TYRES ////
  
 
  m1 = createSprite(8400,650,50,50);
  m1.addAnimation("m1",metalImg);
  m1.scale = 1;
  m1.setCollider("rectangle",0,0,95,90);
  m2 = createSprite(6950,650,50,50);
  m2.addAnimation("m2",metalImg); 
  m2.scale = 1;
  m2.setCollider("rectangle",0,0,95,90);
  m3 = createSprite(6100,600,50,50);
  m3.addAnimation("m3",metalImg); 
  m3.scale = 1;
  m3.setCollider("rectangle",0,0,95,90);
  m4 = createSprite(9830,600,50,50);
  m4.addAnimation("m4",metalImg);
  m4.scale = 1;
  m4.setCollider("rectangle",0,0,95,90);
  m5 = createSprite(5530,640,50,50);
  m5.addAnimation("m5",cooperImg);
  m5.scale = 1;
  m5.setCollider("rectangle",0,0,95,90);
  m6 = createSprite(7300,580,50,50);
  m6.addAnimation("m6",cooperImg);
  m6.scale = 1;
  m6.setCollider("rectangle",0,0,95,90);
  
  //INNTRO BEFORE LEVEL 2//
  axiom = createSprite(4200,230,20,20);
  axiom.addImage("ax2", axiomImg);
  axiom.scale = 0.5;

  axiom_m = createSprite(5000,200,30,30);
  axiom_m.addImage("ax1",axiom_mImg);
  axiom_m.scale = 1.3;
  //INNTRO BEFORE LEVEL 2//
  
//LEVEL 2//
  space = createSprite(43000,320,20,20);
  space.addImage("s1",spaceImg);
  space.scale = 2.9;

  earth = createSprite(540,326,20,20);
  earth.addImage("e1",earthImg);
  earth.scale = 2;
  earth.visible = false;

  eve = createSprite(540,4600,30,30);
  eve.addImage("e1",eveImg);
  eve.scale = 0.5;

  r = createSprite(390,-400,20,20); 
  r.addImage("r2",rocketImg);
  r.scale = 3;

  //* CONTROLLING THE ROCKET IN LEVEL - 2; CAMERA VIEW - 2*//
  s = createSprite(450,300,20,20);
  s.addImage("sp_1",spaceImg);
  s.scale = 2.9;
  s.visible = false;
  //* CONTROLLING THE ROCKET IN LEVEL - 2; CAMERA VIEW - 2*//

  s1 = createSprite(random(100,200),-54,10,10);
  s1.addImage("sa_1",s1Img);
  s1.scale = 0.6;
  s1.velocityY = 0;
  
  s2 = createSprite(random(500,700),-40,10,10);
  s2.addAnimation("sa_2.1",s2_1Img);
  s2.addAnimation("sa_2.2",s2_2Img);
  s2.scale = 0.7;
  s2.velocityY = 0;
  s2.setCollider("rectangle",-90,-20,250,120)
 
  s3 = createSprite(random(500,700),-45,10,10);
  s3.addAnimation("sa_3.1",s3_1Img);
  s3.addAnimation("sa_3.2",s3_2Img);
  s3.scale = 0.8;
  s3.velocityY = 0;
  s3.setCollider("rectangle",-90,0,250,120)

  ship = createSprite(550,-35,20,20);
  ship.addImage("s3",shipImg);
  ship.scale = 0.2;
  ship.setCollider("rectangle",20,20,300,300)
  ship.visible = false;

  //* CONTROLLING THE ROCKET IN LEVEL - 2; CAMERA VIEW - 2*//
  rc = createSprite(480,350,100,100);
  rc.addImage("rc_back",rc_Img);
  rc.visible = false;
  rc.setCollider("rectangle",20,0,200,200)
  //* CONTROLLING THE ROCKET IN LEVEL - 2; CAMERA VIEW - 2*//

  rocket = createSprite(460,340,20,20); 
  rocket.addImage("r1",rocketImg);
  rocket.scale = 1.2;
  rocket.setCollider("rectangle",80,0,100,130)
  rocket.visible = false;

//LEVEL 2//
 //IN THE PLAY STATE//

 //// AFTER REACHING IN AXIOM////
 axi = createSprite(500,375,20,20);
 axi.addAnimation("a_1", ax1Img);
 axi.addAnimation("a_2", ax2Img);
 axi.addAnimation("a_3", ax3Img);
 axi.addAnimation("a_4", ax4Img);
 axi.addAnimation("a_5", ax5Img);
 axi.addAnimation("a_6", ax6Img);
 axi.addAnimation("a_7", ax7Img);
 axi.addAnimation("a_8", ax8Img);
 axi.addAnimation("a_9", ax9Img);
 axi.scale = 1.2;
 axi.visible = false;

 p = createSprite(500,370,20,20);
 p.addAnimation("p_1", p1Img);
 p.addAnimation("p_2", p2Img);
 p.addAnimation("p_3", p3Img);
 p.addAnimation("p_4", p4Img);
 p.addAnimation("p_5", p5Img);
 p.addAnimation("p_6", p6Img);
 p.addAnimation("p_7", p7Img);
 p.addAnimation("p_8", p8Img);
 p.addAnimation("p_9", p9Img);
 p.addAnimation("p_10", p10Img);
 p.addAnimation("p_11", p11Img);
 p.scale = 1.2;
 p.visible = false;
 

 w = createSprite(460,530,10,10);
 w.addImage("w_1",w1Img);
 w.scale = 0.6;
 w.visible = false;
 
  game = new Game()
  game.start();

}

function draw(){
   background("black");


   //IN THE SERVE STATE//
   if(gameState === 1){
    b.x = 2000;
    wa.x = 430; 
   trash.x = 450;
   }
   //IN THE SERVE STATE//

   //LEVEL - 1 //
   if(gameState === 2){
    wa.destroy(); 
    walle.y = 600;
    trash.destroy();
    junk1.x = 380;
    junk2.x = 799;
    t1.x = 800;
    t2.x = 980;
    t3.x = 950;
    t4.x = 860;
    m1.x = 840;
    m2.x = 695;
    m3.x = 610;
    m4.x = 983;
    m5.x = 553;
    m6.x = 730;
    plant.x = 980;
    background("#BA8160");
  
    if(keyDown("LEFT_ARROW")&&walle.x>40){
      walle.x = walle.x-8;
      walle.changeAnimation("walle2");
    }
    if(keyDown("RIGHT_ARROW")&&walle.x<1070){
      walle.x = walle.x+8;
      walle.changeAnimation("walle1");   
    }
   
 //COLLECTING THE TRASH//
    Collected(t1);
    Collected(t2);
    Collected(t3);
    Collected(t4);
    Collected(m1);
    Collected(m2);
    Collected(m3);
    Collected(m4);
    Collected(m5);
    Collected(m6); 
 //COLLECTING THE TRASH//

//EXTRA //
  /* if(ok === 1){
      createCanvas(1100,600);
      background("#BA8160");
      
      if(r.y<400){
        r.velocityY = 2;
       }
     else{
       r.velocityY = 0;
      }
      if(eve.x <= 800 && r.velocityY === 0){
        eve.y = 460;
        eve.velocityX = 2;
      }
      else{
        eve.velocityX = 0;
       
       }
     
       walle.y = 500;
       walle.x = 980;
       plant.x =  walle.x-70;
       plant.y =  walle.y-40;
       walle.changeAnimation("walle2");
       junk1.x = 380;
       junk2.x = 799;
    }*/ 
 //EXTRA //
  }
if(gameState === 3||gameState ==="serve"||gameState === "c_1"||gameState  === "c_2"||gameState ==="s2"||gameState === "level_3"){
  createCanvas(1100,600)
  background("black");
}

 //LEVEL - 1 //
  if(gameState === 3){
    walle.destroy();
    t1.destroy();
    t2.destroy();
    t3.destroy();
    t4.destroy();
    m1.destroy();
    m2.destroy();
    m3.destroy();
    m4.destroy();
    m5.destroy();
    m6.destroy();
    r.destroy();
    junk1.destroy();
    junk2.destroy();
    plant.destroy();
    axiom.x = 420;
  }

 //LEVEL - 2//
  // THE SERVE STATE //
 if(gameState === "serve"){
    space.x = 430;
    rocket.visible = true;
    earth.visible = true; 
 }
 // THE SERVE STATE //
 
  if(gameState === "c_1"){
    axiom_m.destroy()
    axiom.destroy()
    rocket.visible = true;
    rc.visible = false;
    s.visible = false;
    space.visible = true;
    ship.visible = true;
    s3.changeAnimation("sa_3.2");
    s2.changeAnimation("sa_2.1");
    
//*GAME CAMERA - 1*//

  if(keyDown("LEFT_ARROW")){
    rocket.x = rocket.x - 8;
    rc.x = rc.x - 8;
    earth.x =  earth.x + 10;
  }
  if(keyDown("RIGHT_ARROW")){
    rocket.x = rocket.x + 8;
    rc.x = rc.x + 8;
    earth.x =  earth.x - 10;
  }  
  
  earth.velocityY =  2;
  space.velocityY = 2;
  
  if(space.y>380){
    space.y = 230;
  }

  space.velocityY = space.velocityY+0.6; 

  // FIXED SCALE ; IN GAME CAMERA 2 THE SCALE IS INCREASING //
  s1.scale = 0.6;
  s2.scale = 0.7;
  s3.scale = 0.8;
  s1.velocityY = 3;
  s2.velocityY = 3;
  s3.velocityY = 3;
   // FIXED SCALE ; IN GAME CAMERA 2 THE SCALE IS INCREASING //

   ////TEST////
   damage();
  
   ////TEST////

  if(s1.y>695){
    s1.x = random(100,200);
    s1.y = 20;
    s1.scale = 0.6;
  }

  if(s2.y>695){
    s2.x = random(500,700);
    s2.y = 40;
    s2.scale = 0.7;
  }

  if(s3.y>695){
    s3.x = random(300,400);
    s3.y = 40;
    s3.scale = 0.7;
  }

  // AXIOM SHIP //
 
  
   if(ship.y < 350&&ship.scale<3.4){    
    ship.velocityY = 1;
    ship.scale = ship.scale+0.001;
  }
  else{
    ship.y = 352;
    ship.scale = ship.scale+0.000;
  }
 
  // AXIOM SHIP //

//*GAME CAMERA - 1*//
 }


 


//**//**//**//**//**//**//**//

 //*GAME CAMERA - 2*//
if(gameState  === "c_2"){
  rocket.visible = false;
  space.visible = false;
  s.visible = true;
  rc.visible = true;
  s3.changeAnimation("sa_3.1");
  s2.changeAnimation("sa_2.2");

  s.scale =  s.scale+0.03;

  s1.scale =  s1.scale+0.003;
  s2.scale =  s2.scale+0.003;
  s3.scale =  s3.scale+0.003;
  s1.velocityY = 1.4;
  s2.velocityY =  1.4;
  s3.velocityY =  1.6;

  if(ship.y < 350&&ship.scale<3.4){
    ship.velocityY = 1;
    ship.scale = ship.scale+0.001;
  }
  else{
    ship.y = 352;
    ship.scale = ship.scale+0.000;  
  }

  ////TEST////
  damage();
  ////TEST////

 if(s.scale > 4.4){
    s.scale = 2.9;
   }
 if(s1.y>695){
    s1.y = -20;
    s1.scale = 0.1;
    s_c = s_c + 1;
  }
  if(s2.y>695){
    s2.y = -40;
    s2.scale = 0.1;
  }
  if(s3.y>695){
    s3.y = -40;
    s3.scale = 0.1;
  } 
//CONTROLS//
  if(keyDown("LEFT_ARROW")){
    rc.x = rc.x - 8;
    rocket.x = rocket.x - 8;
  }
  if(keyDown("RIGHT_ARROW")){
    rc.x = rc.x + 8;   
    rocket.x = rocket.x + 8;
  } 
  if(rc.isTouching(ship)){
    background("black");
    gameState = "s2";
    Enter();
    stop();
   }
  
   if(gameState === "s2"){
    w_Control();
   }
//CONTROLS// 


}

// MAIN //
if(d === 12){
  d = 13;
  swal("Oh no!","There is multiple damage on rocket we can't go ahead","error");
  stop();// FOR STOPING THE GAME
}

// MAIN //

//*GAME CAMERA - 2*//

 //level - 2//


 //level - 3//
 
 //level - 3//


   drawSprites();

   if(gameState === 2 && ok=== 0){
    fill ("yellow")
    textSize(30);
    text("Trash collected inside : "+Tscore +" %" , 370,30)
    fill ("yellow")
    textSize(30);
    text("Cubes converted : "+cube  , 20,30)
   }
 if(gameState === 3){
  fill("yellow")
  textSize(40);
  text("The plant needs to be put ",80,520);
  text("in the ship to bring all the people back to earth!",80,570);
 } 
  
 if(gameState === "c_1"||gameState === "c_2"){
  fill("white")
  textSize(35);
  text("Damage:"+d,20,50);
}


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Collected(a){
  if(walle.isTouching(a)){
    Tscore = Tscore+10;
    a.destroy();
  }
}

function damage(){
  if(rc.isTouching(s1)&&rocket.isTouching(s1)){
   s1.y = -20;
   d = d+1;
  }
  if(rc.isTouching(s2)&&rocket.isTouching(s2)){
    s2.y = -40;
    d = d+1;
   }
   if(rc.isTouching(s3)&&rocket.isTouching(s3)){
    s3.y = -40;
    d = d+1;
   }
}

//DESTROYING THE ELEMENTS IN LEVEL 2//
function stop(){
  ship.destroy();
  s1.destroy();
  s2.destroy();
  s3.destroy();
  s.destroy();
  space.destroy();
  rc.destroy();
  rocket.destroy();

}
//DESTROYING THE ELEMENTS IN LEVEL 2//


function w_Control(){

  axi.visible = true;
  w.visible = true;

  if(keyDown("UP_ARROW")){
    w.y = w.y - 0.2;
    k = k+1;
  }

    if(k === 1){
      axi.changeAnimation("a_2") ;
    }
    if(k === 5){
      axi.changeAnimation("a_3") ;
    }
    if(k === 10){
      axi.changeAnimation("a_4") ;
    }
    if(k === 15){
      axi.changeAnimation("a_5") ;
    }
    if(k === 20){
      axi.changeAnimation("a_6") ;
    }
    if(k === 26){
      axi.changeAnimation("a_7") ;
    }
    if(k === 34){
      axi.changeAnimation("a_8") ;
    }
    if(k === 41){
      axi.changeAnimation("a_9") ;
      swal("Oh no!","The enemy robots know that we are here","warning");
      k = 43;
      gameState = "level_3";
    }

    if(gameState === "level_3"){
     p.visible = true;
     axi.visible = false;
    }

    if(k === 45){
      p.changeAnimation("p_1") ; 
    }
    if(k === 51){
      p.changeAnimation("p_2") ; 
    }
    if(k === 56){
      p.changeAnimation("p_3") ; 
    }
    if(k === 61){
      p.changeAnimation("p_4") ; 
    }
    if(k === 67){
      p.changeAnimation("p_5") ; 

    }
    if(k === 73){
      p.changeAnimation("p_6") ; 
    }
    if(k === 78){
      p.changeAnimation("p_7") ; 
    }
    if(k === 83){
      p.changeAnimation("p_8") ; 
      
    }
    if(k === 88){
      p.changeAnimation("p_10") ; 
      
    }
    if(k === 93){
      p.changeAnimation("p_9") ; 
      
    }
    if(k === 98){
      p.changeAnimation("p_11") ; 
      
    }

  
}

function Enter(){
  e = 1;
  swal({
    title: `GREAT JOB!`,
    text: "YOU HAVE REACHED THE AXIOM SHIP!",
    imageUrl: 
    "https://i.pinimg.com/originals/04/e2/66/04e266bbdb0e0d1fe3033bf20ad59a3f.jpg",
    imageSize: "100x100",
    confirmButtonText: "ENTER"
    })
}
