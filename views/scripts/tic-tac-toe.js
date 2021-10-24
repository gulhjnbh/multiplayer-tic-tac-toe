function drawBoard(board) {

}

function getBoard() {

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

var sequenceNumber = 0
var matrix = [];
for(var i=0; i<3; i++) {
    matrix[i] = new Array(3);
}
function showXorO(id){
    sendBoard();
    var div = document.getElementById(id);
    sequenceNumber = sequenceNumber + 1
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