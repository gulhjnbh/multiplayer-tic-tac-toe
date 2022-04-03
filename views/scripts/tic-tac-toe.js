// Board format is a string of 9 characters of x, o, or (space) 
// The first three charcaters represent 1st row etc,  e.g., "xoxxxooo:x"

function drawBoard(board) {
    var topLeft = board.charAt(0);
    var topLeftDiv = document.getElementById("topLeft");
    topLeftDiv.innerText = topLeft;

    var topCenter = board.charAt(1);
    var topCenterDiv = document.getElementById("topCenter");
    topCenterDiv.innerText = topCenter;

    var topRight = board.charAt(2);
    var topRightDiv = document.getElementById("topRight");
    topRightDiv.innerText = topRight;

    var middleLeft = board.charAt(3);
    var middleLeftDiv = document.getElementById("middleLeft");
    middleLeftDiv.innerText = middleLeft;

    var middleCenter = board.charAt(4);
    var middleCenterDiv = document.getElementById("middleCenter");
    middleCenterDiv.innerText = middleCenter;

    var middleRight = board.charAt(5);
    var middleRightDiv = document.getElementById("middleRight");
    middleRightDiv.innerText = middleRight;

    var bottomLeft = board.charAt(6);
    var bottomLeftDiv = document.getElementById("bottomLeft");
    bottomLeftDiv.innerText = bottomLeft;

    var bottomCenter = board.charAt(7);
    var bottomCenterDiv = document.getElementById("bottomCenter");
    bottomCenterDiv.innerText = bottomCenter;

    var bottomRight = board.charAt(8);
    var bottomRightDiv = document.getElementById("bottomRight");
    bottomRightDiv.innerText = bottomRight;

    globalThis.player = board.charAt(10);    
    if (globalThis.player.toUpperCase() == 'X' || globalThis.player.toUpperCase() == 'U') {
        globalThis.player = 'O';
    }
    else {
        globalThis.player = 'X';
    }

    document.getElementById('topLeft').style.pointerEvents = 'auto'; 
    //TODO: Do this for all other squares.
}

function getBoard(player) {
    var topLeftDiv = document.getElementById("topLeft");
    var topLeft = topLeftDiv.innerText;
    if (topLeft=='') topLeft=' ';

    var topCenterDiv = document.getElementById("topCenter");
    var topCenter = topCenterDiv.innerText;
    if (topCenter=='') topCenter=' ';

    var topRightDiv = document.getElementById("topRight");
    var topRight = topRightDiv.innerText;
    if (topRight=='') topRight=' ';

    var middleLeftDiv = document.getElementById("middleLeft");
    var middleLeft = middleLeftDiv.innerText;
    if (middleLeft=='') middleLeft=' ';

    var middleCenterDiv = document.getElementById("middleCenter");
    var middleCenter = middleCenterDiv.innerText;
    if (middleCenter=='') middleCenter=' ';


    var middleRightDiv = document.getElementById("middleRight");
    var middleRight = middleRightDiv.innerText;
    if (middleRight=='') middleRight=' ';

    var bottomLeftDiv = document.getElementById("bottomLeft");
    var bottomLeft = bottomLeftDiv.innerText;
    if (bottomLeft=='') bottomLeft=' ';

    var bottomCenterDiv = document.getElementById("bottomCenter");
    var bottomCenter = bottomCenterDiv.innerText;
    if (bottomCenter=='') bottomCenter=' ';

    var bottomRightDiv = document.getElementById("bottomRight");
    var bottomRight = bottomRightDiv.innerText;
    if (bottomRight=='') bottomRight=' ';

    document.getElementById('topLeft').style.pointerEvents = 'none'
    //TODO: do the same for all the other squares
    var board = topLeft+topCenter+topRight+middleLeft+middleCenter+middleRight+bottomLeft+bottomCenter+bottomRight;
    return board+":"+player;
}

// this file contains the functions to create the tic tac toe board!!
var sequenceNumber = 0
var matrix = [];
for(var i=0; i<3; i++) {
    matrix[i] = new Array(3);
}
function showXorO(id){
    if (!boardEnabled) return;

    var div = document.getElementById(id);

    if (div.innerText == "X" || div.innerText == "O") {
        alert("cell already occupied");
        return;   
    }
    var tttResult = document.getElementById("TTTResult");
    if (tttResult.innerText=="O has won"|| tttResult.innerText=="X has won" ) {
        alert("Game is over");
        return;
    }
     
    if ((sequenceNumber % 2)==0) {
        div.innerText = "X";
    }
    else{
        div.innerText = "O";  
    }
    if (globalThis.player) div.innerText = globalThis.player.toUpperCase();
    else globalThis.player = div.innerText;

    if(id=="topLeft") matrix[0][0]=div.innerText;
    if(id=="topCenter") matrix[0][1]=div.innerText;
    if(id=="topRight") matrix[0][2]=div.innerText;
    if(id=="middleLeft") matrix[1][0]=div.innerText;
    if(id=="middleCenter") matrix[1][1]=div.innerText;
    if(id=="middleRight") matrix[1][2]=div.innerText;
    if(id=="bottomLeft") matrix[2][0]=div.innerText;
    if(id=="bottomCenter") matrix[2][1]=div.innerText;
    if(id=="bottomRight") matrix[2][2]=div.innerText;              

    showTopRowWinner("X");
    showTopRowWinner("O");
    showMiddleRowWinner("X");
    showMiddleRowWinner("O");
    showBottomRowWinner("X");
    showBottomRowWinner("O");
    showTopLeftToBottomRightDiagonal("X");
    showTopLeftToBottomRightDiagonal("O");
    showTopRightToBottomLeftDiagonal("X");
    showTopRightToBottomLeftDiagonal("O");
    showLeftColumnWinner("X");
    showLeftColumnWinner("O");
    showMiddleColumnWinner("X");
    showMiddleColumnWinner("O");
    showRightColumWinner("X");
    showRightColumWinner("O");

    sendBoard(globalThis.player);
    sequenceNumber = sequenceNumber + 1
}        

function showTopRowWinner(player) {
    if (matrix[0][0]==player && matrix[0][1]==player && matrix[0][2]==player) {
        var tttResult = document.getElementById("TTTResult");
        tttResult.innerText = player + " has won";
    }
}
function showMiddleRowWinner(player) {
    if (matrix[1][0]==player && matrix[1][1]==player && matrix[1][2]==player) {
        var tttResult = document.getElementById("TTTResult");
        tttResult.innerText = player + " has won";
    }
}
function showBottomRowWinner(player) {
    if (matrix[2][0]==player && matrix[2][1]==player && matrix[2][2]==player) {
        var tttResult = document.getElementById("TTTResult");
        tttResult.innerText = player + " has won";
    }
}
function showTopLeftToBottomRightDiagonal(player) {
    if (matrix[0][0]==player && matrix[1][1]==player && matrix[2][2]==player) {
        var tttResult = document.getElementById("TTTResult");
        tttResult.innerText = player + " has won";
    }
}
function showTopRightToBottomLeftDiagonal(player) {
    if (matrix[0][2]==player && matrix[1][1]==player && matrix[2][0]==player) {
        var tttResult = document.getElementById("TTTResult");
        tttResult.innerText = player + " has won";
    }
}
function showLeftColumnWinner(player) {
    if (matrix[0][0]==player && matrix[1][0]==player && matrix[2][0]==player) {
        var tttResult = document.getElementById("TTTResult");
        tttResult.innerText = player + " has won";
    }
}
function showMiddleColumnWinner(player) {
    if (matrix[0][1]==player && matrix[1][1]==player && matrix[2][1]==player) {
        var tttResult = document.getElementById("TTTResult");
        tttResult.innerText = player + " has won";
    }
}
function showRightColumWinner(player) {
    if (matrix[0][2]==player && matrix[1][2]==player && matrix[2][2]==player) {
        var tttResult = document.getElementById("TTTResult");
        tttResult.innerText = player + " has won";
    }
}

/*
function calculate(operator) {
// document.getElementById('demo').innerHTML =s Date();

    if (operator=="plus"){
        var result = parseInt(document.getElementById("x").value) + 
        parseInt(document.getElementById("y").value);
        document.getElementById("result").value=result;
    }
    else if (operator=="minus"){
        var result = parseInt(document.getElementById("x").value) - 
        parseInt(document.getElementById("y").value);
        document.getElementById("result").value=result;
        
    }
    else if (operator=="multiply") {
        var result = parseInt(document.getElementById("x").value) * 
        parseInt(document.getElementById("y").value);
        document.getElementById("result").value=result;

    }
    else{
        var result = parseInt(document.getElementById("x").value) / 
        parseInt(document.getElementById("y").value);
        document.getElementById("result").value=result;
        
    }
}

function addNewElement(){
    var nextElement = document.createElement("div");
    nextElement.innerText="next element";
    
    document.getElementById("firstElement").appendChild(nextElement);
}

function getNext(){
    //1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz
    var output = "";
    for(var x = 1; x<=15; x++){
         if (x % 3 ==0 && x % 5 ==0)
            output=output+"fizzbuzz";
        else if (x % 3 ==0)
            output=output+"fizz";
        
        else if (x % 5 ==0)
            output=output+"buzz";
        
        else
            output=output+x;
        output = output + ", ";
       
    }
    document.getElementById("output").innerText = output;
}

function getSumAndAvg() {
    var sum = 0;
    var n = 3;
    //var x = [5,8,10,3,6];

    //for(var i=0; i<n; i++){
    //sum = sum+x[i]
    //}
    //alert('sum='+sum)
    //alert('avg='+sum/n)
    var firstNum = document.getElementById("1st");
    var secondNum = document.getElementById("2nd");
    var thirdNum = document.getElementById("3rd");
    sum = firstNum+secondNum+thirdNum;
    avg=sum/3;
    var sumDiv = document.getElementById("sum");
    var avgDiv = document.getElementById("avg");
    sumDiv.innerText=sum;
    avgDiv.innerText=avg;
}

*/