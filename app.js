
let earnings = 1550
let keepWorking = true
let trimTool = 'teeth'
let tidylawn = ''
const toolsCost = {
  teeth:1,
  scissors:5,
  oldMower:25,
  batteryMower:250
}
const toolBelt = [
  "teeth"
]

const chewLawn = () => {
  earnings += 1
}
const scissorLawn = () => {
  earnings += 5
}
const oldMowLawn = () => {
  earnings += 50
}
const powerMow = () => {
  earnings += 100
}
const studentMow = () => {
  earnings += 250
}

const buyTool = (tool) => {
  if (tool == "scissors") {
      toolBelt.push('scissors')
      earnings -= 5
  } else if (tool == "oldMower") {
      toolBelt.push('oldMower')
      earnings -= 25
  } else if (tool == "batteryMower") {
      toolBelt.push('batteryMower')
      earnings -= 250
  } else if (tool == "starvingStudents") {
      toolBelt.push('starvingStudents')
      earnings -= 500
  }
}

const didIWin = () => {
  if (toolBelt.includes('starvingStudents') && earnings >= 1000) {
    alert("You win at lawn life. You have a team working for you and you've earned at least $" + earnings)
    keepWorking = false
  }
}

while (true) {
  // didIWin()
  if (toolBelt.includes('starvingStudents') && earnings >= 1000) {
    alert("You win at lawn life. You have a team working for you and you've earned at least $" + earnings)
    break;
  } else if (toolBelt.length === 1){
      tidylawn = prompt("Yard work. Would you like to: \n1. 'Chew' the lawn" +
      "\n2. 'Buy scissors'\n3. 'Quit'\nYou have " + earnings + " monies");
  } else if (toolBelt.length === 1){
      tidylawn = prompt("Yard work. Would you like to: \n1. 'Chew the lawn'" +
      "\n2. 'Scissors' the lawn \n3. 'Quit'\nYou have " + earnings + " monies");
  } else if (toolBelt.length === 2){
      tidylawn = prompt("Yard work. Would you like to: \n1. 'Chew' the lawn" +
      "\n2. 'Scissors' \n3. 'Buy push mower' \n4. 'Quit'\nYou have " + earnings + " monies")
  } else if (toolBelt.length === 3){
      tidylawn = prompt("Yard work. Would you like to: \n1. 'Chew' the lawn + \n2. 'Scissors'" +
      "\n3. 'Mow' the yard\n4. 'Buy battery mower' \n5. Quit'\nYou have " + earnings + " monies")
  } else if (toolBelt.length === 4){
      tidylawn = prompt("Yard work. Would you like to: \n1. 'Chew' the lawn + \n2. 'Scissors' the lawn" +
      "\n3. 'Mow' the yard \n4. 'Power' mow the yard \n5. 'Hire students' \n6. 'Quit'\nYou have " + earnings + " monies")
  } else if (toolBelt.length === 5){
      tidylawn = prompt("Yard work. Would you like to: \n1. 'Chew' the lawn + \n2. 'Scissors' the lawn" +
      "\n3. 'Mow' the yard \n4. 'Power' mow the yard \n5. Work 'students' \n6. Quit'\nYou have " + earnings + " monies")
  }
  if (tidylawn.toLowerCase() === "chew") {
      chewLawn()
      alert("So far, you've earned $" + earnings);
  } else if (tidylawn.toLowerCase() === "scissors" && toolBelt.includes('scissors')) {
      scissorLawn()
      alert("So far, you've earned $" + earnings);
  } else if (tidylawn.toLowerCase() == "mow" && toolBelt.includes ('oldMower')) {
      oldMowLawn()
      alert("So far, you've earned $" + earnings);
  } else if (tidylawn.toLowerCase() == "power" && toolBelt.includes ('batteryMower')) {
      powerMow()
      alert("So far, you've earned $" + earnings);
  } else if (tidylawn.toLowerCase() == "students" && toolBelt.includes ('starvingStudents')) {
      studentMow()
      alert("So far, you've earned $" + earnings);
  } else if (tidylawn.toLowerCase() == "buy scissors") {
      if (earnings >= 5) {
        buyTool('scissors')
        alert("Congrats, you're the proud owner of some scissors. Happy trimming!")
      } else {
          alert("Sorry you don't have enough monies")
      }
  } else if (tidylawn.toLowerCase() == "buy push mower" && toolBelt.includes('scissors')) {
      if (earnings >= 25){
        buyTool('oldMower')
        alert("Congrats, it ain't much, but this old mower beats using scissors. Happy mowing!")
      } else {
          alert("Sorry you don't have enough monies")
      }
  } else if (tidylawn.toLowerCase() == "buy battery mower" && toolBelt.includes('oldMower')) {
      if (earnings >= 250){
        buyTool('batteryMower')
        alert("Congrats! You've got a fancy battery powered mower. Happy mowing!")
      } else {
          alert("Sorry you don't have enough monies")
      }
  } else if (tidylawn.toLowerCase() == "hire students" && toolBelt.includes('batteryMower')) {
      if (earnings >= 500){
        buyTool('starvingStudents')
        alert("Congrats! You've got a team of students to do all the hard work!")
      } else {
          alert("Sorry you don't have enough monies")
      }
  } else if (tidylawn.toLowerCase() == "quit") {
       alert("You earned $" + earnings + " today. Go floss and enjoy the rest of your day.");
       break;
  } else {
      alert("I'm sorry, I don't understand.");
  }
}
