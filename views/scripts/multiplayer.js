const socket = io('http://localhost:3001');
socket.on('connection')

//code for multiplay chat (now is only send message text box)
socket.on('message',  (data) => {
    document.querySelector('p').innerText = data;
});

const sendMessage = () => {
    const message = document.querySelector('.message').value;
    socket.emit('message', message );
}

//code for multiplayer tic tac toe
socket.on('board',  (board) => {
    drawBoard(board);
    //enables the board(boardEnabled)
    enableBoard();
});
const sendBoard = (player) => {
    //disables the board!
    disableBoard();
    const board = getBoard(player);
    socket.emit('board', board );
}

var boardEnabled = true;
function enableBoard(){
    boardEnabled = true;
}

function disableBoard(){
    boardEnabled = false;
    // document.getElementById("topLeft").disabled = true;
    // document.getElementById("topLeft").onclick=''
}

