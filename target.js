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
  A: new Color(184, 98, 27), 
  B: new Color(220, 220, 0), 
  C: new Color(34, 139, 34), 
  D: new Color(172, 201, 92), 
  E: new Color(240, 191, 10),
  F: new Color(0, 0, 205),
  G: new Color(185, 155, 107),
  H: new Color(94, 97, 55),
  I: new Color(247, 92, 30),
  J: new Color(247, 92, 30),
  K: new Color(139, 0, 139),
  L: new Color(25, 167, 206),
  M: new Color(87, 5, 48),
  N: new Color(211, 210, 124),
  O: new Color(255, 140, 0),
  P: new Color(225, 18, 153),
  Q: new Color(130, 38, 51),
  R: new Color(226, 24, 24),
  S: new Color(56, 163, 165),
  T: new Color(174, 7, 8),
  U: new Color(12, 156, 219),
  V: new Color(0, 0, 150),
  W: new Color(210, 210, 0),
  X: new Color(12, 156, 219),
  Y: new Color(139, 0, 139),
  Z: new Color(11, 36, 71),
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
    textFont("Arial", 22);
    textStyle(BOLD);
    fill(color(255,255,255));
    strokeWeight(2);
    stroke(0);
    textAlign(CENTER);
    text(this.label, this.x, this.y);

  }
}
