class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

var typeColor = {
  Apple: new Color(174, 7, 8), 
  Avocado: new Color(192, 207, 69), 
  Banana: new Color(232, 200, 57), 
  Kiwi: new Color(172, 201, 92), 
  Lemon: new Color(240, 191, 10),
  Lime: new Color(160, 191, 35),
  Mango: new Color(237, 173, 14),
  Melon: new Color(94, 97, 55),
  Nectarine: new Color(247, 92, 30),
  Orange: new Color(247, 92, 30),
  Papaya: new Color(230, 86, 19),
  "Passion Fruit": new Color(229, 184, 52),
  Peach: new Color(247, 132, 105),
  Pear: new Color(211, 210, 124),
  Pineapple: new Color(223, 194, 76),
  Plum: new Color(50, 10, 21),
  Pomegranate: new Color(130, 38, 51),
  "Red Grapefruit": new Color(247, 0, 0),
  Satsumas: new Color(255, 100, 0),
  Juice: new Color(64, 112, 171),
  Milk: new Color(12, 156, 219),
  Cream: new Color(244, 222, 186),
  Oatghurt: new Color(247, 102, 174),
  "Oat Milk": new Color(12, 156, 219),
  "Sour Cream": new Color(244, 222, 186),
  "Sour Milk": new Color(12, 156, 219),
  Soyghurt: new Color(247, 102, 174),
  "Soy Milk": new Color(12, 156, 219),
  Yoghurt: new Color(247, 102, 174),
  Asparagus: new Color(108, 122, 10),
  Aubergine: new Color(66, 7, 45),
  Cabbage: new Color(113, 155, 52),
  Carrots: new Color(255, 100, 0),
  Cucumber: new Color(78, 102, 54),
  Garlic: new Color(216, 204, 216),
  Ginger: new Color(201, 158, 104),
  Leek: new Color(93, 115, 57),
  Mushroom: new Color(182, 133, 114),
  Onion: new Color(216, 204, 216),
  Pepper: new Color(135, 0, 0),
  Potato: new Color(220, 165, 82),
  "Red Beet": new Color(135, 0, 0),
  Tomato: new Color(200, 9, 0),
  Zucchini: new Color(78, 102, 54)
}
// Target class (position and width)
class Target
{
  
  constructor(x, y, w, l, id, type)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
    this.type   = type;
    this.color  = typeColor[type];
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw()
  {
    // Draw target
    fill(this.color.r, this.color.g, this.color.b);                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 12);
    textStyle(BOLD);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }
}
