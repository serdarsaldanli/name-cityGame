
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"]

let player1a = []
let player2b = []
let player1Score = []
let player2Score = []





let startGame = () => {
  let pcRandomLetter = letters[Math.floor(Math.random() * letters.length)]
  document.getElementById("startButton").style.visibility="hidden"
  document.getElementById("player1Div").style.visibility="visible"
  document.getElementById("submit1Button").style.visibility="visible"
  document.getElementById("randomLetter").hidden= false
  document.getElementById("randomLetter").innerText= "Your letter is " + pcRandomLetter

}

let player1Answers = () => {
  let name = document.getElementById("name").value
  let city = document.getElementById("city").value
  let animal = document.getElementById("animal").value
  let plant = document.getElementById("plant").value
  let country = document.getElementById("country").value

  let player1Answers = [name,city,animal,plant,country]

  for (let i = 0; i < player1Answers.length; i++) {
    const p1 = player1Answers[i];
    player1a.push(p1)
    
  }

  document.getElementById("player1Div").style.visibility="hidden"
  document.getElementById("submit1Button").style.visibility="hidden"
  document.getElementById("player2Div").style.visibility="visible"
  document.getElementById("submit2Button").style.visibility="visible"
  
}

let player2Answers = () => {
  let name = document.getElementById("name").value
  let city = document.getElementById("city").value
  let animal = document.getElementById("animal").value
  let plant = document.getElementById("plant").value
  let country = document.getElementById("country").value

  let player2Answers = [name,city,animal,plant,country]

  for (let i = 0; i < player2Answers.length; i++) {
    const p2 = player2Answers[i];
    player2b.push(p2)
  
}

result()
}

let result = () => {

for (let i = 0; i < player1a.length; i++) {
  const answer = player1a[i];
  if (answer === player2b[i]){
    player1Score.push(5)
    player2Score.push(5)
  }else{
    player1Score.push(10)
    player2Score.push(10)
  }
  
}

let sum1 = player1Score[0] + player1Score[1] + player1Score[2] + player1Score[3] + player1Score[4]
let sum2 = player2Score[0] + player2Score[1] + player2Score[2] + player2Score[3] + player2Score[4]

if (sum1 > sum2) {
  let finish = document.body.createElement("div")
  finish.innerText = "Player 1 Wins."
}else {
  let finish = document.body.createElement("div")
  finish.innerText = "Player 2 Wins."
}
}
console.log(player1Score)







