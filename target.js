class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = 255;
  }
}

var letterColor = {
  0: new Color(216, 204, 216),
  A: new Color(174, 7, 8), 
  B: new Color(192, 207, 69), 
  C: new Color(232, 200, 57), 
  D: new Color(172, 201, 92), 
  E: new Color(240, 191, 10),
  F: new Color(160, 191, 35),
  G: new Color(237, 173, 14),
  H: new Color(94, 97, 55),
  I: new Color(247, 92, 30),
  J: new Color(247, 92, 30),
  K:new Color(230, 86, 19),
  L: new Color(229, 184, 52),
  M: new Color(247, 132, 105),
  N: new Color(211, 210, 124),
  O: new Color(223, 194, 76),
  P: new Color(50, 10, 21),
  Q: new Color(130, 38, 51),
  R: new Color(247, 0, 0),
  S: new Color(255, 100, 0),
  T: new Color(64, 112, 171),
  U: new Color(12, 156, 219),
  V: new Color(244, 222, 186),
  W: new Color(247, 102, 174),
  X: new Color(12, 156, 219),
  Y: new Color(244, 222, 186),
  Z: new Color(12, 156, 219),
}

// Target class (position and width)
class Target
{
  
  constructor(x, y, w, h, l, id, type)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.height = h;
    this.label  = l;
    this.id     = id;
    this.type   = type;
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return mouse_x < this.x + (this.width) / 2 &&
          mouse_x > this.x - (this.width) / 2  &&
          mouse_y < this.y + (this.height) / 2 &&
          mouse_y > this.y - (this.height) / 2;
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw()
  {
    // Draw target
    
    let colorRect = letterColor[this.label[0]];
    
    if(this.clicked(mouseX,mouseY))
      fill(colorRect.r, colorRect.g, colorRect.b, 150); 
    else{
    fill(colorRect.r, colorRect.g, colorRect.b);   
    }              
    rectMode(CENTER);
    rect(this.x,this.y,this.width, this.height);
    
    // Draw label
    textFont("Arial", 18);
    textStyle(BOLD);
    fill(color(255,255,255));
    strokeWeight(2);
    stroke(0);
    textAlign(CENTER);
    text(this.label, this.x, this.y);

  }
}
