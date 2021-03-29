canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width=100;
car1_height=100;
car2_width=100;
car2_height=100;
 car1_x=10;
 car1_y=10;
 car2_x=20;
car2_y=20;
car_image_1 = "car1.png";
car_image_2 = "car 2.png";
function add(){
    car1_imgtag = new Image();
    car2_imgtag = new Image();
    car_image_2.onload = upload_car2;
    car_image_2.src = "car2_imgtag";
    car_image_1.onload = upload_car1;
    car_image_1.src = "car1_imgtag";
function upload_car1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
function my_keydown(e){
    var keypressed = e.keyCode;
    console.log(keypressed)
    if (keypressed==38){
        up();
        console.log ("Up");
    }
        if (keypressed==87){
            up2();
            console.log ("Up");
        }
    if (keypressed==40){
        down();
        console.log("Down");
    }
    if (keypressed==83){
        down2();
        console.log("Down");
    }
    if (keypressed==39){
        right();
        console.log("Right");
    }
    if (keypressed==68){
        right2();
        console.log("Right");
    }
    if(keypressed==37){
        left()
        console.log("Left");
    }
    if(keypressed==65){
        left2()
        console.log("Left");
    }
}
function right(){
    if(car1_x<=900){
        car1_x=car1_x + 10;
        console.log("X =  "+ car1_x + "Y =  " + car1_y);
        upload_car1();
        
    }
}
function right2(){
    if(car2_x<=900){
        car2_x=car1_x + 10;
        console.log("X =  "+ car2_x + "Y =  " + car2_y);
        upload_car2();
    }
}

function left(){
    if(car1_x>=0){
        car1_x=car1_x - 10;
        console.log("X =  " + car1_x + "Y =  " + car1_y);
        upload_car1();
    }
}

function left2(){
    if(car2_x>=0){
        car2_x=car2_x - 10;
        console.log("X =  " + car2_x + "Y =  " + car2_y);
        upload_car2();
    }
}
function up(){
    if(car1_y>=0){
        car1_y=car1_y - 10;
        console.log("X =  " + car1_x + "Y =  " + car1_y);
        uploadc_car1();
    }
}
function up2(){
    if(car2_y>=0){
        car2_y=car2_y - 10;
        console.log("X =  " + car2_x + "Y =  " + car2_y);
        upload_car2();
    }
}
function down(){
    if(car1_y<=700){
        car1_y=car1_y + 10;
        console.log("X =  "+ car1_x + "Y =  " + car1_y);
        upload_car1();
        
    }
}

function down2(){
    if(car2_y<=700){
        car2_y=car2_y + 10;
        console.log("X =  "+ car2_x + "Y =  " + car2_y);
        upload_car2();
        
    }
}

