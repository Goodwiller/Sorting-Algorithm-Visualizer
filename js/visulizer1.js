const canvas = document.getElementById('visualizer1');
canvas.width=  (window.innerWidth)*0.95;
canvas.height=  (window.innerHeight)*0.65;
const ctx = canvas.getContext('2d');

var position = canvas.getBoundingClientRect();
var canvasWidth=position.width;
var canvasHeight=position.height;


var color=['#4F6186'];


window.addEventListener('resize',
	function(event){
		canvas.width=window.innerWidth*0.95;
		canvas.height=window.innerHeight*0.65;
        position = canvas.getBoundingClientRect();
        canvasWidth=position.width;
        canvasHeight=position.height;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        adjust();
});



function Bar(posx,heightcoef,colors,barWidth){
    this.posx=posx;
    this.heightcoef=heightcoef;
    this.height=this.heightcoef*canvasHeight*0.8;
    this.colors=colors;
    this.barWidth=barWidth;
    this.draw=()=>{
        ctx.fillStyle= this.colors;
        ctx.fillRect(this.posx, canvasHeight-this.height,this.barWidth, this.height);
    }
    this.update=( heightnew,colornew )=>{
        this.height=heightnew;
        this.colors=colornew;
    }  
};


function adjust(){
    let posx=0;
    barWidth=canvasWidth/numOfElments;
    for(let i=0;i<numOfElments;i++){
        BarArray[i].posx=posx;
        posx=posx+barWidth;
        BarArray[i].barWidth=barWidth;
        BarArray[i].height=BarArray[i].heightcoef*canvasHeight*0.8;

    }
}




function init(){
    isSorted=false;
    BarArray=[];
    valueArray=[];
    var initialpos=0;
    for(let i=0;i<numOfElments;i++){
        let heightcoef= (Math.random());
        let colors=color[i%color.length];
        var barWidth= canvasWidth/numOfElments;
        valueArray[i]=(heightcoef);
        BarArray.push(new Bar(initialpos,heightcoef,colors,barWidth));
        initialpos=initialpos+(barWidth);
    }

};



function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvas.width,canvas.height);
    var rate0=0;
    var rate1=0;
    for(i=0;i<=25;i++){
        ctx.beginPath();
        ctx.moveTo(0, rate0);
        ctx.lineTo(canvasWidth, rate0);
        ctx.closePath();
        ctx.strokeStyle = '#BAC8E5';
        ctx.stroke();
        rate0=rate0+canvasHeight/25;

        ctx.beginPath();
        ctx.moveTo(rate1, 0);
        ctx.lineTo(rate1, canvasHeight);
        ctx.closePath();
        ctx.strokeStyle = '#BAC8E5';
        ctx.stroke();
        rate1=rate1+canvasWidth/25;
    }
    for(let i=0;i<numOfElments;i++){
        BarArray[i].draw();
    }
}



init();
animate();







