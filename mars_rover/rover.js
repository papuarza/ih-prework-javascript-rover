
var myRover = {
  position: [0,0], 
  direction: 'N'
};

var myRover2 = {
  position: [5,5], 
  direction: 'E'
};

var obstacle1 = {
  position: [3,3]
};

var obstacle2 = {
  position: [7,7]
};

var avisoObstacle = false;

var myGrid = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], 
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
];

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[0]--
        avisoObstacle = true;
      };
      break;
    case 'E':
      rover.position[1]++
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[1]--
        avisoObstacle = true;
      };
      break;
    case 'S':
      rover.position[0]--
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[0]++
        avisoObstacle = true;
      };
      break;
    case 'W':
      rover.position[1]--
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[1]++
        avisoObstacle = true;
      };
      break;
  };  
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[0]++
        avisoObstacle = true;
      };
      break;
    case 'E':
      rover.position[1]--
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[1]++
        avisoObstacle = true;
      };
      break;
    case 'S':
      rover.position[0]++
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[0]--
        avisoObstacle = true;
      };
      break;
    case 'W':
      rover.position[1]++
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[1]--
        avisoObstacle = true;
      };
      break;
  };

}

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]--
      break;
    case 'S':
      rover.position[1]--
      break;
    case 'W':
      rover.position[0]++
      break;
  };


}

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]++
      break;
    case 'W':
      rover.position[0]--
      break;
  };


}

var moveRover = ["F", "F", "F", "F", "R", "F", "F", "F", "F", "F"];
console.log("Las instrucciones para el Rover1 fueron: " + moveRover);
console.log("Posicion inicial Rover1: " + myRover.position + " || Direccion: " + myRover.direction + " ------ Posicion inicial Rover2: " + myRover2.position + " || Direccion: " + myRover2.direction);

var indicaciones = 0;

while (indicaciones <= moveRover.length) {
  if (myRover.position[0]>=10) {
    myRover.position[0] = 0;
  } else if (myRover.position[0]<=0) {
    myRover.position[0] = 10;
  }; 
  if (myRover.position[1]>10) {
    myRover.position[1] = 0;
  } else if (myRover.position[1]<0) {
    myRover.position[1] = 10;
  };
  switch(moveRover[indicaciones]) {
    case 'F':
      goForward(myRover);
      break;
    case 'B':
      goBackward(myRover);
      break;
    case 'R':
      switch(myRover.direction) {
        case 'N':
          myRover.direction = "E";
          break;
        case 'E':
          myRover.direction = "S";
          break;
        case 'S':
          myRover.direction = "W";
          break;
        case 'W':
          myRover.direction = "N";
          break;
      }
      break;
    case 'L':
      switch(myRover.direction) {
        case 'N':
          myRover.direction = "W";
          break;
        case 'E':
          myRover.direction = "N";
          break;
        case 'S':
          myRover.direction = "E";
          break;
        case 'W':
          myRover.direction = "S";
          break;
      }
      break;
  }
  if (avisoObstacle == true) {
    console.log("El Rover1 ha encontrado un obstaculo!!");
    indicaciones = indicaciones + moveRover.length + 1;
  }else {
    indicaciones +=1;
  };
};

 

  console.log("Posicion actual Rover1: " + myRover.position[0] + ", " + myRover.position[1] + " || Direccion: " + myRover.direction + " ------ Posicion actual Rover2: " + myRover2.position[0] + ", " + myRover2.position[1] + " || Direccion: " + myRover.direction);
  myGrid[myRover.position[0]][myRover.position[1]] = "0";
  myGrid[myRover2.position[0]][myRover2.position[1]] = "P";
  myGrid[obstacle1.position[0]][obstacle1.position[1]] = "X";
  myGrid[obstacle2.position[0]][obstacle2.position[1]] = "X";

  
  function maper(mapa) {
    console.log(mapa.join('\n') + '\n\n');
  }

  maper(myGrid);

  console.log("Next Move?");




