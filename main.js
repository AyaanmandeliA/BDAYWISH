var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function new_img() {
    fabric.Image.fromURL('BirthdayImage.jpg', function (Img) {
        blockimg_object = Img;
        blockimg_object.scaleToWidth(700);
        blockimg_object.scaleToHeight(510);
        blockimg_object.set({
            top: 0,
            left: 0
        });
        canvas.add(blockimg_object);
    });
}


function play(){
	x.play();
}
