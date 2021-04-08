var swapper=[];
var BarArray=[];
var numOfElments=100;
var valueArray=[];
var speed=6;
var isSorted;
class pair{

    constructor(i,j){
        this.i=i;
        this.j=j;
    }
}

function run(){
    disableall();
    swapper=[];
    if(isSorted==false){
        var algo=document.getElementById("algorithm").value;
        if(algo=="insertion")
        insertionSort();
        else if(algo=="bubble")
            bubble();
        else if(algo=="selection")
            selectionSort();
        else if(algo=="merge")
            mergesortcaller()
        else if(algo=="quick")
            quicksortcaller();   
        swap();
    }
    else{
        setTimeout(() => {
            enableall()
        },1000);
    }

}

function swapreturn(id){
    clearInterval(id);
    swapper=[];
    enableall();
    isSorted=true;

}

function disableall(){
    document.querySelector('#count').disabled=true;
    document.querySelector('#speed').disabled=true;
    document.querySelector('#start').disabled=true;
    document.querySelector('#algorithm').disabled=true;
    document.querySelector('#generate').disabled=true;
    document.querySelector("#barsub").id = "barsub1";
    document.querySelector("#speedsub").id="speedsub1";
    document.querySelector("#algosub").id="algosub1";

}

function enableall(){
    document.querySelector('#count').disabled=false;
    document.querySelector('#speed').disabled=false;
    document.querySelector('#start').disabled=false;
    document.querySelector('#algorithm').disabled=false;
    document.querySelector('#generate').disabled=false;
    document.querySelector("#barsub1").id = "barsub";
    document.querySelector("#speedsub1").id="speedsub"; 
    document.querySelector("#algosub1").id="algosub";
}