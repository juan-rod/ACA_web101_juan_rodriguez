// choose player: X & O
// select location on board
// append x or o to location
// change player
var attendanceCode = 'A6RQ'

var player
var prevPlayer

function selectX () {
  player = 'X'
}
function selectO () {
  player = "O"
}

function setValue(el) {
  if (!player) {
    alert('select a player')
  } else if (prevPlayer === player) {
    alert('you are a liar and a thief. pick new player!')
  } else {
    el.innerText = player
    prevPlayer = player
  }
}