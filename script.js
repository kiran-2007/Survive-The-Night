//Choose Your Adventure Zombie Apocalypse Game (not yet completed)

/* VARIABLES *///the letters in front of each variable represent which decision and part of the story we're at.
let enterButton;
let a1Button;
let ab1Button;
let continueButton;
let continueTwoButton;
let continueThreeButton;
let ab1deadButton;
let ac1Button;
let acd1Button;
let acdf1Button;
let acdg1Button;
let ace1Button;
let a2Button;
let ab2Button;
let abd2Button;
let abe2Button;
let ac2Button;
let acd2Button;
let ace2Button;

//imageslet coin;
let titlePage;
let livingRoom;
let phone;
let phoneTwo;
let phoneThree;
let youDied;
let victory;
let screen = 0;

function preload(){
  titlePage = loadImage('sURVIVE THE nIGHT.png')
  livingRoom = loadImage('livingRoom.png')
  phone = loadImage('phone.jpeg')
  phoneTwo = loadImage('phoneTwo.jpeg')
  phoneThree = loadImage('phoneThree.jpeg')
  youDied = loadImage('youDied.jpeg')
  victory = loadImage('victory.jpeg')
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(700, 450);
  noStroke();

  // Set up the home screen
  textAlign(CENTER);
  textSize(35);
  textFont('Courier New');
  textStyle(BOLD);
  image(titlePage, 0, 0, 700, 450)
  ;

  // Create buttons for all screens
  enterButton = new Sprite (width/2 - 12, height/2 + 125)
  a1Button = new Sprite (-200, -200)
  ab1Button = new Sprite (-200, -200)
  continueButton = new Sprite(-200, -200)
  continueTwoButton = new Sprite(-200,-200)
  continueThreeButton = new Sprite(-200, -200)
  ac1Button = new Sprite (-200, -200)
  acd1Button = new Sprite (-200, -200)
  acdf1Button = new Sprite(-200,-200)
  acdg1Button = new Sprite(-200, -200)
  ace1Button = new Sprite (-200, -200)
  a2Button = new Sprite (-200, -200)
  ab2Button = new Sprite (-200, -200)
  abd2Button = new Sprite (-200, -200)
  abe2Button = new Sprite (-200, -200)
  ac2Button = new Sprite (-200, -200)
  acd2Button = new Sprite (-200, -200)
  ace2Button = new Sprite (-200, -200)

  screen = 0;
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 250;
  enterButton.h = 50;
  enterButton.collider = "s";
  enterButton.color = "white";
  enterButton.textSize = 25;
  enterButton.text = "Click to Start!";

  a1Button.color = "white";
  a1Button.w = 240;
  a1Button.h = 50;
  a1Button.collider = "s";
  a1Button.textSize = 15;
  a1Button.text = "Check the text message";

  a2Button.color = "white";
  a2Button.w = 240;
  a2Button.h = 50;
  a2Button.collider = "s";
  a2Button.textSize = 15;
  a2Button.text = "Investigate the sound";

  ab1Button.w = 250;
  ab1Button.h = 50;
  ab1Button.collider = "s";
  ab1Button.color = "white";
  ab1Button.textSize = 15;
  ab1Button.text = "Tell them to come over";

  ac1Button.w = 250;
  ac1Button.h = 50;
  ac1Button.collider = "s";
  ac1Button.color = "white";
  ac1Button.textSize = 15;
  ac1Button.text = "Tell them to stay home";

  ac2Button.w = 180;
  ac2Button.h = 50;
  ac2Button.collider = "s";
  ac2Button.color = "white";
  ac2Button.textSize = 15;
  ac2Button.text = "Secure your house";

  ab2Button.w = 280;
  ab2Button.h = 50;
  ab2Button.collider = "s";
  ab2Button.color = "white";
  ab2Button.textSize = 15;
  ab2Button.text = "Go upstairs for a better view"

  abd2Button.w = 150;
  abd2Button.h = 50;
  abd2Button.collider = "s";
  abd2Button.color = "white";
  abd2Button.textSize = 20;
  abd2Button.text = "Fight";

  abe2Button.w = 150;
  abe2Button.h = 50;
  abe2Button.collider = "s";
  abe2Button.color = "white";
  abe2Button.textSize = 20;
  abe2Button.text = "Flight";

  acd2Button.w = 250;
  acd2Button.h = 50;
  acd2Button.collider = "s";
  acd2Button.color = "white";
  acd2Button.textSize = 15;
  acd2Button.text = "Stay Inside and Fortify"

  ace2Button.w = 250;
  ace2Button.h = 50;
  ace2Button.collider = "s";
  ace2Button.color = "white";
  ace2Button.textSize = 15;
  ace2Button.text = "Make your Escape"

  acd1Button.w = 250;
  acd1Button.h = 50;
  acd1Button.collider = "s";
  acd1Button.color = "white";
  acd1Button.textSize = 15;
  acd1Button.text = "Barricade your Doors";

  acdf1Button.w = 250;
  acdf1Button.h = 50;
  acdf1Button.collider = "s";
  acdf1Button.color = "white";
  acdf1Button.textSize = 15;
  acdf1Button.text = "Hide Out";

  acdg1Button.w = 250;
  acdg1Button.h = 50;
  acdg1Button.collider = "s";
  acdg1Button.color = "white";
  acdg1Button.textSize = 15;
  acdg1Button.text = "Gather Supplies";
  
  ace1Button.w = 250;
  ace1Button.h = 50;
  ace1Button.collider = "s";
  ace1Button.color = "white";
  ace1Button.textSize = 15;
  ace1Button.text = "Try to Escape";
  
  continueThreeButton.w = 250;
  continueThreeButton.h = 40;
  continueThreeButton.collider = "s";
  continueThreeButton.color = "white";
  continueThreeButton.textSize = 20;
  continueThreeButton.text = "Continue";

  continueTwoButton.w = 250;
  continueTwoButton.h = 40;
  continueTwoButton.collider = "s";
  continueTwoButton.color = "white";
  continueTwoButton.textSize = 20;
  continueTwoButton.text = "Continue";

  continueButton.w = 250;
  continueButton.h = 40;
  continueButton.collider = "s";
  continueButton.color = "white";
  continueButton.textSize = 20;
  continueButton.text = "Continue";

 

  
  if(enterButton.mouse.presses()){
    image(livingRoom, 0, 0, 700, 450)

    enterButton.pos = { x: -200, y: -200};
    a1Button.pos = {x: 200, y: 380};
    a2Button.pos = {x: 500, y: 380};
    
    textSize(20)
    textStyle("NORMAL")
    fill(255,255,255)
    text("You’re home alone enjoying a quiet movie night when\nyou recieve a text message from a friend who lives\n a couple houses away from you. Just as you’re about\nto open the message, you hear a faint scream in the\ndistance outside your house. Do you:", width/2, height /2);
    screen = 1;
  }



  if (screen == 1);
    if(a1Button.mouse.presses()){
      image(livingRoom, 0, 0, 700, 450)
      a1Button.pos = {x: -500, y:-380};
      a2Button.pos = {x: -500, y:-380};
      ab1Button.pos = {x: 200, y: 380};
      ac1Button.pos = {x: 500, y: 380};
      
      image(phone, 225, 10, 240, 340)
      screen = 2

      
    } else if(a2Button.mouse.presses()){
      image(livingRoom, 0, 0, 700, 450)
      a1Button.pos = {x: -500, y:-380};
      a2Button.pos = {x: -500, y:-380};
      ab2Button.pos = {x: 200, y: 380};
      ac2Button.pos = {x: 500, y: 380};

      textSize(20)
      textStyle("NORMAL")
      fill(255,255,255)
      text("You get up from your couch, walk to the window\n facing the street, and peek your head from\nbehind the curtains to find the source of the\n sound outside. You can see shadows, but you can’t\n clearly see the source of the sound. Do you:", width/2, height/2);

      screen = 6
    }





  
  if(screen == 6);
    if(ab2Button.mouse.presses()){
      image(livingRoom, 0, 0, 700, 450)
      ab2Button.pos = {x:-200, y:-390};
      ac2Button.pos = {x: -500, y:-390};
      abd2Button.pos = {x:200, y:380};
      abe2Button.pos = {x:500, y:380};

      textSize(17)
      textStyle("NORMAL")
      fill(255,255,255)
      text("‘I should check what’s going on properly’ you think. You\nquickly go upstairs to look out your bedroom window to get a\nbetter view. What you see shocks you beyond belief: a person\noutside, hunched over someone else on the ground looking. The\nhunched figure then suddenly looks up directly at you,\nrevealing the blood smeared across its face. ‘It’s a zombie’\nyou realize with a shocking start. The zombie gets up and\n starts walking towards your house. You dash downstairs, but\nit's too late; the zombie reaches your window and begins\n smashing its head against it. Do you:", width/2, height/2 - 150)
      screen = 7
    } else if(ac2Button.mouse.presses()){
      image(livingRoom, 0, 0, 700, 450)
      ab2Button.pos = {x:-200, y:-390};
      ac2Button.pos = {x: -500, y:-390};
      ace2Button.pos = {x:200,y:380}
      acd2Button.pos = {x:500, y: 380}

      textSize(17)
      textStyle("NORMAL")
      fill(255,255,255)
      text("'If there is really something outside, then I should make \nsure the house is secure so it can't get in,' you think.\n You check all the locks, drag chairs and tables in front of \nthe doors, and finally turn to the security camera feed. On \nthe screen, you see someone running frantically down the road, \npursued by someone else. They pounce on the person running, \nand under the camera's glow, you see the attacker; with \ntorn skin and glazed, hungry eyes- it’s a zombie. Do you:", width/2, height/2-50)
    }



  
  if(screen ==7);
    if(abd2Button.mouse.presses()){
      image(livingRoom, 0, 0, 700, 450)
      abd2Button.pos = {x:-200, y:-380};
      abe2Button.pos = {x:-500, y:-380};
      continueTwoButton.pos = {x:350, y:380}

      textSize(17)
      textStyle("NORMAL")
      fill(255,255,255)
      text("With not many options left, you grab the closest item to you\n that can act as a weapon to defend yourself. As the window\n gets closer to breaking, you get ready to strike. The window\n finally breaks and you swing.\n But it wasn’t enough.\n Other zombies had joined in with the first. It wasn't long\n before the number of zombies overwhelmed and overpowered\n you and then...", width/2, height/2 -90)
      textSize(25)
      textStyle("BOLD")
      text("everything goes dark", width/2, height/2 + 90)

      screen = 5

      
    } else if(abe2Button.mouse.presses()){
      image(livingRoom, 0, 0, 700, 450)
      abd2Button.pos = {x:-200, y:-380};
      abe2Button.pos = {x:-500, y:-380};
      continueThreeButton.pos = {x: 350, y: 380}

      textSize(17)
      textStyle("NORMAL")
      fill(255,255,255)
      text("As the glass begins to splinter from the relentless \npounding of the zombie's head, panic \nsurges through you. Grabbing your house and\n car keys with trembling hands, you dash\n to the garage. Just as your garage door \nopens, the windows shatter with a deafening \ncrash and you slam the car into reverse, tires\n screeching as you speed out of the driveway\n and escape into the night.", width/2, height/ 2)

      screen = 8
    }



  
  if (screen == 2);
    if(ab1Button.mouse.presses()){
      ab1Button.pos = {x:-200, y:-390};
      ac1Button.pos = {x:-500, y:-390};
      continueButton.pos = {x:350, y:380}
      image(livingRoom, 0, 0, 700, 450);
      image(phoneTwo, 50, 10, 250, 340);
      
      textSize(16)
      textStyle("NORMAL")
      textAlign(LEFT);
      fill(255,255,255)
      text("As you wait for your friend, you\ncheck the news to see if there’s\nany information. You find articles\nand videos of people screaming,\nrunning around wild, and biting\nothers in your city not more than\na few minutes ago. You then hear\na loud knock on the door and rush\nover open it to see your friend\nwho you quickly usher in.", 330, 120);

      screen = 4;
    } else if (ac1Button.mouse.presses()){
      ab1Button.pos = {x:-200, y:-390};
      ac1Button.pos = {x:-500, y:-390};
      acd1Button.pos = {x:200, y: 380}
      ace1Button.pos = {x:500, y:380}
      image(livingRoom, 0, 0, 700, 450);
      image(phoneThree, 40, 10, 250, 320)

      textSize(16)
      textStyle("NORMAL")
      textAlign(LEFT);
      fill(255,255,255)
      text("As you scroll through your phone,\nyou see chaotic videos of people\npanicking, screaming, and biting\nothers. An official announcement\nwarns: 'Attention all citizens!\nDangerous individuals exhibiting\nzombie-like behavior have been\nreported. Stay indoors and avoid\ncontact.' You then get a video from\nyour friend of a figure stumbling\nand attacking a bystander. The\ngravity of the situation becomes\nclear: it’s a city-wide zombie\noutbreak. Do you:", 325, 60);
      screen = 9
    }

  if(screen == 9);
    if(acd2Button.mouse.presses()){
      image(livingRoom, 0, 0, 700, 450);
      acd2Button.pos = {x:-200, y:-380}
      ace2Button.pos = {x:-500, y:-380}
      continueThreeButton.pos = {x: 350, y:380}
      text("Now was not the time to panic. You are still realtively\n safe inside your home and you can use your resources to make\n your home impenetrable. You search your house for weapons,\n tools and supplies to help you survive. You continue to\n monitor the security cameras to watch the zombies behavior\n and surveil your property until help can arrive or until the\n situation stabilizes enough for you to make a safe escape.", width/2, height/2 - 50)
      
      screen = 8
    } else if (ace2Button.mouse.presses()){
      image(livingRoom, 0, 0, 700, 450);
      acd2Button.pos = {x:-200, y:-380}
      ace2Button.pos = {x:-500, y:-380}
      continueThreeButton.pos = {x: 350, y:380}
      text("'The virus must have just started to spread so if  leave\n now I can go to a safe zone,' you reason with yourself.\n You quickly go around your house to grab what you can;\n important documents, food and water, weapons and any other\n neccessry supplies; who knows when you’ll be coming back. \n You head to your garage, into your car and make your escape.", width/2, height/2 - 10)
      screen = 8
    }
  


  if (screen == 4); //ab1
    if (continueButton.mouse.presses()){
      image(livingRoom, 0, 0, 700, 450);
      continueButton.pos = {x:-350, y:-390}
      continueTwoButton.pos = {x:350, y:380}

      textSize(17)
      textStyle("NORMAL")
      textAlign(CENTER);
      fill(255,255,255)

      text("'These people are crazy! When I was coming these people\n ran at me, so I started running to your place. One of\nthem grabbed my shoulder but I kicked them off and got\nhere.''Let me see your shoulder,’ you say, suspicious.\nYour friend reveals their shoulder where you see an\ninjury that looks a lot like teeth marks. You look up\nat your friend and notice a weird look on their face.\n'What's wron-' before you can finish, they grab and bite you.\n and then", width/2, height/2-100)

      textSize(25)
      textStyle("BOLD")
      text("everything goes black", width/2, height/2 + 100)
      screen = 5
    }


  
  if(screen==9);
    if(acd1Button.mouse.presses()){ //barricade
      acd1Button.pos = {x:-200, y:-380}
      ace1Button.pos = {x:-500, y:-380}
      acdf1Button.pos = {x:200, y:380}
      acdg1Button.pos = {x:500, y:380}
      
      image(livingRoom, 0, 0, 700, 450)
      textAlign(CENTER);
      text("With determination, you go around your house, first\n ensuring that all doors and windows are locked and covered.\n You then start reinforcing the house, dragging furniture\n against doors and windows. The once distant screams\n seem to be so close now, a constant reminder of the\n danger lurking just beyond your walls. Do you:", width/2, height/2-30)

      screen = 10
      
    } else if(ace1Button.mouse.presses()){//escape
      acd1Button.pos = {x:-200, y:-380}
      ace1Button.pos = {x:-500, y:-380}
      continueTwoButton.pos = {x:350, y:380}
      image(livingRoom, 0, 0, 700, 450);
      textAlign(CENTER);
      text("The flood of videos from your friend and countless others show\n the situation spiraling out of control. Zombies are always slow\n in movies so you can outrun them, right? Panic sets in, and you\n decide to escape while you still can, dashing to your car in your\n garage and opening the garage door. But you had underestimated\n their speed. The moment the door opens, zombies rush and slam\n against your car. Screaming, you throw the car into reverse but\n fail to brake in time, crashing into a pole across the street.\n The engine dies, and you desperately bolt from the car, but\n you don’t make it too far before the zombies catch up to you.\n As they close in on you ", width/2, height/2 - 120)
      textStyle("BOLD")
      textSize(25)
      text("everything goes dark", width/2, height /2 + 110)

      screen = 5
    }


  if(screen==10);
    if(acdf1Button.mouse.presses()){
      acdf1Button.pos = {x:-200, y:-380}
      acdg1Button.pos = {x:-500, y:-380}
      continueThreeButton.pos = {x:350,y:380}

      image(livingRoom, 0, 0, 700, 450)
      textAlign(CENTER);
      text("'I need to hide before the zombies break through,' you\n think. Grabbing some food, you dash upstairs to your room.\n Unsure how long you'll need to stay hidden, you lock the\n door and crouch behind your bed. You monitor the situation\n through the security cameras, but after an hour of stress,\n you fall asleep. In the morning, you wake to find the cameras\n showing the coast is clear. You make your escape safely.", width/2, height/2-20)

      screen == 8
    } else if(acdg1Button.mouse.presses()){
      acdf1Button.pos = {x:-200, y:-380}
      acdg1Button.pos = {x:-500, y:-380}
      continueTwoButton.pos = {x:350,y:380}

      image(livingRoom, 0, 0, 700, 450)
      textAlign(CENTER);
      text("‘I need to take action. This could last a while, so I should\n gather supplies,’ you think. You go around your house getting\n supplies but as you’re about to open a kitchen cabinet, you\n freeze— a zombie is pressed against the window, its dead eyes\n locked onto yours. Panic surges, and you scream, but that prompts\n the zombie to start smashing the glass. Your scream attracts\n more zombies, and the soon break through, pouring into the house.\n You back away, but there’s no way to escape as the zombies\n swarm you. Their cold, clammy hands grab at you, and soon", width/2, height/2-95)
      textStyle("BOLD")
      textSize(25)
      text("everything goes dark", width/2, height/2 + 100)

      screen == 5
    }
  
  
  if(screen==5); // dead
    if(continueTwoButton.mouse.presses()){
      image(youDied, 0, 0, 700, 450)
      continueTwoButton.pos = {x:-350, y:-390}
    }


  if(screen==8); // victory
    if(continueThreeButton.mouse.presses()){
      image(victory, 0, 0, 700, 450)
      continueThreeButton.pos = {x:-350, y:-390}
    }


}

/* FUNCTIONS TO DISPLAY SCREENS */

