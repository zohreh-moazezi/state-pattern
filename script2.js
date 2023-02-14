// State Pattern

// similar with React's usage
// most web development framewkorks use it
// React and Angular

// hold the state of the application with all the data and properties needed
// when it changes it updates a rendering of the application

// React project in state pattern folder
// src > components > App.js
// in the constructor, setting props and then declaring a state for React

// a state holds the information, or the data that the application needs to render
//     all that data, or even states of the application.


// a Traffic Light app
//  The object returned by a state pattern class seems to change its class.

class TrafficLight {
    constructor() {
      this.states = [new GreenLight(), new RedLight(), new YellowLight()];
      this.current = this.states[0];
    }
  
    change() {
      const totalStates = this.states.length;
      let currentIndex = this.states.findIndex(light => light === this.current);
      if (currentIndex + 1 < totalStates) this.current = this.states[currentIndex + 1];
      else this.current = this.states[0];
    }
  
    sign() {
      return this.current.sign();
    }
  }
  
  class Light {
    constructor(light) {
      this.light = light;
    }
  }
  
  class RedLight extends Light {
    constructor() {
      super('red');
    }
  
    sign() {
      return 'STOP';
    }
  }
  
  class YellowLight extends Light {
    constructor() {
      super('yellow');
    }
  
    sign() {
      return 'STEADY';
    }
  }
  
  class GreenLight extends Light {
      constructor() {
          super('green');
      }
  
      sign() {
          return 'GO';
      }
  }
  
  // usage
  const trafficLight = new TrafficLight();
  
  console.log(trafficLight.sign()); // 'GO'
  trafficLight.change();
  
  console.log(trafficLight.sign()); // 'STOP'
  trafficLight.change();
  
  console.log(trafficLight.sign()); // 'STEADY'
  trafficLight.change();
  
  console.log(trafficLight.sign()); // 'GO'
  trafficLight.change();
  
  console.log(trafficLight.sign()); // 'STOP'