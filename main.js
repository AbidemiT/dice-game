'use strict'

let roll = document.querySelector(".btn");
      let dice1 = document.querySelector(".dice1-container");
      let dice2 = document.querySelector(".dice2-container");

      let diceFunc = () => {
        let min = 1;
        let max = 6;

        return Math.floor(Math.random() * max + min);
      };

      let diceResult = () => {
        dice1.textContent = "";
        dice2.textContent = "";
        
        let dice1Arr = Array.from(
          new Array(diceFunc()),
          (x, index) => index + 1
        );
        
        dice1Arr.forEach((x, i) => {
          let div = document.createElement("div");
          div.setAttribute("class", "dice");
          dice1.append(div);
        });

        let dice2Arr = Array.from(
          new Array(diceFunc()),
          (x, index) => index + 1
        );

        dice2Arr.forEach((x, i) => {
          let div = document.createElement("div");
          div.textContent = "";
          div.setAttribute("class", "dice");
          dice2.append(div);
        });
      };
      roll.addEventListener("click", diceResult);