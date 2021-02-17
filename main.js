var superheroGame2DCanvas=document.querySelector('canvas');
var superheroGame2DCanvasCTX2D=superheroGame2DCanvas.getContext('2d');
var superheroCoordObj={x: 10, y: 10};
var blockImgWidthAndHeightNumObj={
    width: 30, 
    height: 30,
    increaseWidthAndHeightBy10: function(){
        this.width=this.width+10;
        this.height=this.height+10;
    },
    decreaseWidthAndHeightBy10: function(){
        this.width=this.width-10;
        this.height=this.height-10;
    }
};
var superheroImg=new Image(100, 100);
var blockImg=new Image(30, 30);

superheroImg.src='images/marvel_storm_icon.png';

function updateSuperhero(){
    superheroGame2DCanvasCTX2D.globalCompositeOperation='copy';
    superheroGame2DCanvasCTX2D.drawImage(superheroImg, superheroCoordObj.x, superheroCoordObj.y);
}

function addNewImgOnSuperheroGame2DCanvas(imgURLStr){
    blockImg.src=imgURLStr;
    superheroGame2DCanvasCTX2D.globalCompositeOperation='source-over';
    superheroGame2DCanvasCTX2D.drawImage(blockImg, superheroCoordObj.x, superheroCoordObj.y);
}

function moveSuperhero(dirStr){
    if(superheroCoordObj.x>0&&dirStr=='left'){
        superheroCoordObj.x=superheroCoordObj.x-10;
    }else if(superheroCoordObj.x<900&&dirStr=='right'){
        superheroCoordObj.x=superheroCoordObj.x+10;
    }else if(superheroCoordObj.y>0&&dirStr=='up'){
        superheroCoordObj.y=superheroCoordObj.y-10;
    }else if(superheroCoordObj.y<500&&dirStr=='down'){
        superheroCoordObj.y=superheroCoordObj.y+10;
    }
    updateSuperhero();
}

addEventListener('keydown', eventVar=>{
    var eventVarKeyStr=eventVar.key;
    if(eventVarKeyStr=='P'){
        blockImgWidthAndHeightNumObj.increaseWidthAndHeightBy10();
        document.querySelector('.current_width').innerHTML=blockImgWidthAndHeightNumObj.width;
        document.querySelector('.current_height').innerHTML=blockImgWidthAndHeightNumObj.height;
        blockImg.width=blockImg.width+10;
        blockImg.height=blockImg.height+10;
        superheroGame2DCanvasCTX2D.globalCompositeOperation='source-over';
        superheroGame2DCanvasCTX2D.drawImage(currentBlockImgCoordObj.x, currentBlockImgCoordObj.y, blockImg.width, blockImg.height);
    }else if(eventVar.shiftKey&&eventVarKeyStr=='M'){
        blockImgWidthAndHeightNumObj.decreaseWidthAndHeightBy10();
        document.querySelector('.current_width').innerHTML=blockImgWidthAndHeightNumObj.width;
        document.querySelector('.current_height').innerHTML=blockImgWidthAndHeightNumObj.height;
        blockImg.width=blockImg.width-10;
        blockImg.height=blockImg.height-10;
        superheroGame2DCanvasCTX2D.globalCompositeOperation='source-over';
        superheroGame2DCanvasCTX2D.drawImage(currentBlockImgCoordObj.x, currentBlockImgCoordObj.y, blockImg.width, blockImg.height);
    }else if(eventVarKeyStr=='ArrowUp'){
        moveSuperhero('up');
    }else if(eventVarKeyStr=='ArrowDown'){
        moveSuperhero('down');
    }else if(eventVarKeyStr=='ArrowLeft'){
        moveSuperhero('left');
    }else if(eventVarKeyStr=='ArrowRight'){
        moveSuperhero('right');
    }else if(eventVarKeyStr='w'){
        addNewImgOnSuperheroGame2DCanvas('images/wall.jpg');
    }else if(eventVarKeyStr='g'){
        addNewImgOnSuperheroGame2DCanvas('images/ground.png');
    }else if(eventVarKeyStr='l'){
        addNewImgOnSuperheroGame2DCanvas('images/light_green.png');
    }else if(eventVarKeyStr='t'){
        addNewImgOnSuperheroGame2DCanvas('images/trunk.jpg');
    }else if(eventVarKeyStr='r'){
        addNewImgOnSuperheroGame2DCanvas('images/roof.jpg');
    }else if(eventVarKeyStr='y'){
        addNewImgOnSuperheroGame2DCanvas('images/yellow_wall.png');
    }else if(eventVarKeyStr='d'){
        addNewImgOnSuperheroGame2DCanvas('images/dark_green.png');
    }else if(eventVarKeyStr='u'){
        addNewImgOnSuperheroGame2DCanvas('images/unique.png');
    }else{
        addNewImgOnSuperheroGame2DCanvas('images/cloud.jpg');
    }
});