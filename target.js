class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

var typeColor = {
  Apple: new Color(255, 100, 0), 
  Avocado: new Color(255, 100, 0), 
  Banana: new Color(255, 100, 0), 
  Kiwi: new Color(255, 100, 0), 
  Lemon: new Color(255, 100, 0),
  Lime: new Color(255, 100, 0),
  Mango: new Color(255, 100, 0),
  Melon: new Color(255, 100, 0),
  Nectarine: new Color(255, 100, 0),
  Orange: new Color(255, 100, 0),
  Papaya: new Color(255, 100, 0),
  "Passion Fruit": new Color(255, 100, 0),
  Peach: new Color(255, 100, 0),
  Pear: new Color(255, 100, 0),
  Pineapple: new Color(255, 100, 0),
  Plum: new Color(255, 100, 0),
  Pomegranate: new Color(255, 100, 0),
  "Red Grapefruit": new Color(255, 100, 0),
  Satsumas: new Color(255, 100, 0),
  Juice: new Color(255, 100, 0),
  Milk: new Color(255, 100, 0),
  Cream: new Color(255, 100, 0),
  Oatghurt: new Color(255, 100, 0),
  "Oat Milk": new Color(255, 100, 0),
  "Sour Cream": new Color(255, 100, 0),
  "Sour Milk": new Color(255, 100, 0),
  Soyghurt: new Color(255, 100, 0),
  "Soy Milk": new Color(255, 100, 0),
  Yoghurt: new Color(255, 100, 0),
  Asparagus: new Color(255, 100, 0),
  Aubergine: new Color(255, 100, 0),
  Cabbage: new Color(255, 100, 0),
  Carrots: new Color(255, 100, 0),
  Cucumber: new Color(255, 100, 0),
  Garlic: new Color(255, 100, 0),
  Ginger: new Color(255, 100, 0),
  Leek: new Color(255, 100, 0),
  Mushroom: new Color(255, 100, 0),
  Onion: new Color(255, 100, 0),
  Pepper: new Color(255, 100, 0),
  Potato: new Color(255, 100, 0),
  "Red Beet": new Color(255, 100, 0),
  Tomato: new Color(255, 100, 0),
  Zucchini: new Color(255, 100, 0)
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
    fill(color(155,155,155));                 
    circle(this.x, this.y, this.width);
    
    // Draw label
    textFont("Arial", 12);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }
}
