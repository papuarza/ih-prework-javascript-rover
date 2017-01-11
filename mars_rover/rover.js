
/*Creación de Rovers y Obstaculos*/

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
/*--------------------------------------------*/

var moveRover = ["F", "F", "L", "F", "F"]; /*Instrucciones de movimientos para los Rovers*/
var avisoObstacle = false;
var avisoRoverStill = false; /*Flag de aviso para que no se solapen los Rovers*/
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

var lastPosition = {
  position: [0,0],
};

/*Funciones de movimiento*/
function goForward(rover, roverStill) {
  lastPosition.position = rover.position;
  switch(rover.direction) {
    case 'N':
      rover.position[0]++

      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[0]--
        avisoObstacle = true;
      }else if (rover.position[0] == obstacle2.position[0] && rover.position[1] == obstacle2.position[1]) {
        rover.position[0]--
        avisoObstacle = true;
      }else if (rover.position[0] == roverStill.position[0] && rover.position[1] == roverStill.position[1]) {
        rover.position[0]--
        avisoRoverStill = true;
      };
      break;
    case 'E':
      rover.position[1]++
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[1]--
        avisoObstacle = true;
      }else if (rover.position[0] == obstacle2.position[0] && rover.position[1] == obstacle2.position[1]) {
        rover.position[1]--
        avisoObstacle = true;
      }else if (rover.position[0] == roverStill.position[0] && rover.position[1] == roverStill.position[1]) {
        rover.position[1]--
        avisoRoverStill = true;
      };
      break;
    case 'S':
      rover.position[0]--
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[0]++
        avisoObstacle = true;
      }else if (rover.position[0] == obstacle2.position[0] && rover.position[1] == obstacle2.position[1]) {
        rover.position[0]++
        avisoObstacle = true;
      }else if (rover.position[0] == roverStill.position[0] && rover.position[1] == roverStill.position[1]) {
        rover.position[0]++
        avisoRoverStill = true;
      };
      break;
    case 'W':
      rover.position[1]--
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[1]++
        avisoObstacle = true;
      }else if (rover.position[0] == obstacle2.position[0] && rover.position[1] == obstacle2.position[1]) {
        rover.position[1]++
        avisoObstacle = true;
      }else if (rover.position[0] == roverStill.position[0] && rover.position[1] == roverStill.position[1]) {
        rover.position[1]++
        avisoRoverStill = true;
      };
      break;
  };  
}
function goBackward(rover, rover2) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[0]++
        avisoObstacle = true;
      }else if (rover.position[0] == obstacle2.position[0] && rover.position[1] == obstacle2.position[1]) {
        rover.position[0]++
        avisoObstacle = true;
      }else if (rover.position[0] == roverStill.position[0] && rover.position[1] == roverStill.position[1]) {
        rover.position[0]++
        avisoRoverStill = true;
      };
      break;
    case 'E':
      rover.position[1]--
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[1]++
        avisoObstacle = true;
      }else if (rover.position[0] == obstacle2.position[0] && rover.position[1] == obstacle2.position[1]) {
        rover.position[1]++
        avisoObstacle = true;
      }else if (rover.position[0] == roverStill.position[0] && rover.position[1] == roverStill.position[1]) {
        rover.position[1]++
        avisoRoverStill = true;
      };
      break;
    case 'S':
      rover.position[0]++
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[0]--
        avisoObstacle = true;
      }else if (rover.position[0] == obstacle2.position[0] && rover.position[1] == obstacle2.position[1]) {
        rover.position[0]--
        avisoObstacle = true;
      }else if (rover.position[0] == roverStill.position[0] && rover.position[1] == roverStill.position[1]) {
        rover.position[0]--
        avisoRoverStill = true;
      };
      break;
    case 'W':
      rover.position[1]++
      if (rover.position[0] == obstacle1.position[0] && rover.position[1] == obstacle1.position[1]) {
        rover.position[1]--
        avisoObstacle = true;
      }else if (rover.position[0] == obstacle2.position[0] && rover.position[1] == obstacle2.position[1]) {
        rover.position[1]--
        avisoObstacle = true;
      }else if (rover.position[0] == roverStill.position[0] && rover.position[1] == roverStill.position[1]) {
        rover.position[1]--
        avisoRoverStill = true;
      };
      break;
  };
}
function goRight(rover) { /*Funcion solo utilizada para el Iteration1*/
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
function goLeft(rover) { /*Funcion solo utilizada para el Iteration1*/
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
/*Impresion de la Informacion recibida*/
console.log("Las instrucciones de movimiento fueron: " + moveRover);
console.log("Posicion inicial Rover1: " + myRover.position + " || Direccion: " + myRover.direction + " ------ Posicion inicial Rover2: " + myRover2.position + " || Direccion: " + myRover2.direction);

/*Funcion principal que ejecuta las instrucciones de movimiento*/
function roversMoves(rover, roverStill, indication) {
  if (rover.position[0]>10) {
    rover.position[0] = 0;
  } else if (rover.position[0]<0) {
    rover.position[0] = 9;
  }; 
  if (rover.position[1]>10) {
    rover.position[1] = 0;
  } else if (rover.position[1]<0) {
    rover.position[1] = 9;
  };
  switch(moveRover[indication]) {
    case 'F':
      goForward(rover, roverStill);
      break;
    case 'B':
      goBackward(rover, roverStill);
      break;
    case 'R':
      switch(rover.direction) {
        case 'N':
          rover.direction = "E";
          break;
        case 'E':
          rover.direction = "S";
          break;
        case 'S':
          rover.direction = "W";
          break;
        case 'W':
          rover.direction = "N";
          break;
      }
      break;
    case 'L':
      switch(rover.direction) {
        case 'N':
          rover.direction = "W";
          break;
        case 'E':
          rover.direction = "N";
          break;
        case 'S':
          rover.direction = "E";
          break;
        case 'W':
          rover.direction = "S";
          break;
      }
      break;
  }
  if (avisoObstacle == true) {
    console.log("El Rover ha encontrado un obstaculo!!");
    return indications = indications + moveRover.length + 1;
  };
  if (avisoRoverStill == true) {
    console.log("El Rover ha encontrado otro Rover!!");
    return indications = indications + moveRover.length + 1;
  };
}

/*Llamado a función para cada una de las instrucciones del Array para el Rover*/
var indications = 0;
while (indications <= moveRover.length) {
  roversMoves(myRover, myRover2, indications);
  indications +=1;
};

/*Llamado a función para cada una de las instrucciones del Array para el Rover2*/
var indications = 0;
while (indications <= moveRover.length) {
  roversMoves(myRover2, myRover, indications);
  indications +=1;
};

console.log("Posicion actual Rover1: " + myRover.position[0] + "," + myRover.position[1] + " || Direccion: " + myRover.direction + " ------ Posicion actual Rover2: " + myRover2.position[0] + "," + myRover2.position[1] + " || Direccion: " + myRover2.direction);
myGrid[myRover.position[0]][myRover.position[1]] = "0";
myGrid[myRover2.position[0]][myRover2.position[1]] = "P";
myGrid[obstacle1.position[0]][obstacle1.position[1]] = "X";
myGrid[obstacle2.position[0]][obstacle2.position[1]] = "X";

/*Impresión del mapa*/
function maper(mapa) {
  console.log(mapa.join('\n') + '\n\n');
}

maper(myGrid);
