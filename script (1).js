/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇
    console.log("click");
  // Retrieve width and length of Room 1
  let room1Width = getRoomWidth(1);
  let room1Length = getRoomLength(1);

  // Calculate area of Room 1
  let areaRoom1 = room1Width * room1Length;

  // Retrieve width and length of Room 2
  let room2Width = getRoomWidth(2);
  let room2Length = getRoomLength(2);

  // Calculate area of Room 2
  let areaRoom2 = room2Width * room2Length;

  // Calculate total area of both rooms
  let totalArea = areaRoom1 + areaRoom2;

  // Add 10% to the total area
  let finalResult = totalArea * 1.1;

  // Display the final result on the screen
  showResult(finalResult);
  }

/* LEVEL UP! (optional) 
	1. Function explanations:  added comments 


	2. Custom styles added: changed the colors 


*/