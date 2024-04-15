#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w
      this.height = h
    }
  }
<<<<<<< HEAD
  
  module.exports = Rectangle;
=======

  print () {
    for (let i = 0; i < this.height; i++) {
      let s = ''
      for (let j = 0; j < this.width; j++) {
        s += 'X'
      }
      console.log(s)
    }
  }
}

module.exports = Rectangle
>>>>>>> e24dbbd94ee8cad71e23a53c097e50525d9a34b1
