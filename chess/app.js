const gameboard = document.querySelector("#gameboard")
const playerdisplay = document.querySelector("#player")
const infodisplay = document.querySelector("#info-display")
const width = 8

const startPieces = [
	rook, knight, bishop, queen, king, bishop, knight, rook,
	pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
	"", "", "", "", "", "", "", "",
	"", "", "", "", "", "", "", "",
	"", "", "", "", "", "", "", "",
	"", "", "", "", "", "", "", "",
	pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
	rook, knight, bishop, queen, king, bishop, knight, rook
	]

function createBoard(){
	startPieces.forEach((startPiece, i)=>{
		const square = document.createElement('div')
		square.classList.add('square')
		square.innerHTML = startPiece
		square.firstChild && square.firstChild.setAttribute('draggable', true)
		square.setAttribute('square-id', i)

		//making it checkered
		const row = Math.floor((63-i)/8)+1
		if(row%2===0){
			square.classList.add(i%2===0?"beige":"brown")
		}else{
			square.classList.add(i%2===0?"brown":"beige")
		}

		if(i<= 15){
			square.firstChild.firstChild.classList.add('black')
		}

		if(i>=48){
			square.firstChild.firstChild.classList.add('white')
		}


		gameboard.append(square)


	})
}

createBoard()

const allSquares = document.querySelectorAll("#gameboard .square")

allSquares.forEach(square=>{
	square.addEventListener("dragstart", dragstart)
	square.addEventListener('dragover', dragover)
	square.addEventListener('drop', dragdrop)
})

let startPositionId

function dragstart(e){
	startPositionId = e.target.parentNode.getAttribute('square-id')
	draggedElement = e.target
}

function dragOver(e){
	e.preventDefault()
}

function dragdrop(){
	
}