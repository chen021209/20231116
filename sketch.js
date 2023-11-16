function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#23395b")
}
var x = 25;  //宣告一個畫方框的x軸變數(var 宣告變數為一個全域變數)
var y = 25;   //宣告一個畫方框的y軸變數(var 宣告變數為一個全域變數)
var r_b = 50
var w = 50; //宣告一個畫方框的寬度變數(var 宣告變數為一個全域變數)
var r_s = 50


function draw() {
  stroke("#fff9ec")
  noFill()  //不充滿顏色
  rectMode(CENTER)  //設定方框中心點為座標點
  ellipse(mouseX,mouseY,r_s)  //圓隨著滑鼠移動
  rect(x,y,w)   //畫一個方框
  x = x + w + 5
  if(x>width){
    x = w/2 
    y = y + r_b +5
  }
}