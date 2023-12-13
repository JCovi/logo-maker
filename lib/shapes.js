// lib/shapes.js

class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    getWidth() {
      return 190;
    }
  
    getHeight() {
      return 190;
    }
  
    getSvgString() {
      return `<polygon points="100,0 0,190 190,190" fill="${this.color}"/>`;
    }
  }
  
  class Circle {
    constructor(color) {
      this.color = color;
    }
  
    getDiameter() {
      return 200; 
    }
  
    getWidth() {
      return this.getDiameter();
    }
  
    getHeight() {
      return this.getDiameter();
    }
  
    getSvgString() {
      return `<circle cx="100" cy="100" r="80" fill="${this.color}"/>`;
    }
  }
  
  class Square {
    constructor(color) {
      this.color = color;
    }
  
    getWidth() {
      return 200;
    }
  
    getHeight() {
      return 200; 
    }
  
    getSvgString() {
      return `<rect width="200" height="200" fill="${this.color}"/>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };