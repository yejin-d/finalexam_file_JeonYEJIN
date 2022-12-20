var wave;
var button;
var slider;
var playing=false;

function setup(){
  createCanvas(720, 256);
  wave = new p5.Oscillator();
  wave.setType('sine');
  
  wave.freq(261.6256);
  wave.amp(0);
  button=createButton('도');
   button.mousePressed(toggle);
  button=createButton('C#');
   button.mousePressed(toggle);
  button=createButton('레');
   button.mousePressed(toggle);
  button=createButton('D#');
   button.mousePressed(toggle);
  button=createButton('미');
   button.mousePressed(toggle);
  button=createButton('파');
   button.mousePressed(toggle);
  button=createButton('F#');
   button.mousePressed(toggle);
  button=createButton('솔');
   button.mousePressed(toggle);
  button=createButton('G#');
   button.mousePressed(toggle);
  button=createButton('라');
   button.mousePressed(toggle);
  button=createButton('A#');
   button.mousePressed(toggle);
  button=createButton('시');
   button.mousePressed(toggle);
  button=createButton('도');
   button.mousePressed(toggle);
  
  button=createButton('+');
   button.mousePressed(toggle);
  button=createButton('-');
  button.mousePressed(toggle);
  
 
}

function draw(){
 wave.freq(slider.value());
if(playing){
  background(255, 0, 255);
}else{
  background(51);
}
}

function toggle(){
 if(!playing){
wave.start();
  wave.amp(0.5, 1);
  playing=true;
}else {
  wave.amp(0,1);
  playing=false;
 }
}

function draw(){
  
}
/*function touchStarted(){
  text(touches.length, 200, 200);//몇개의 손가락이 터치 되었는가?
  text(touches[0].x, 200, 220);//첫번째(1개) 손가락 X좌표
  text(touches[0].y, 200, 240);//첫번째(1개) 손가락 Y좌표
  text(touches[1].x, 200, 260);//두번째(2개) 손가락 X좌표
  text(touches[1].y, 200, 280);//두번째(1개) 손가락 Y좌표
}
*/
