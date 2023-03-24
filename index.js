const target = document.getElementById("target");
let array = ["Devellopeur", "Front-end", "React"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent += array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2500);
};

const loop = () => {
  setTimeout(() => {
    if(wordIndex >= array.length){
      wordIndex = 0;
      letterIndex = 0;
      loop();
    }else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();


// class TypingAnimation {
//   constructor(target, words) {
//     this.target = document.getElementById(target);
//     this.words = words;
//     this.wordIndex = 0;
//     this.letterIndex = 0;
//   }

//   createLetter() {
//     const letter = document.createElement("span");
//     this.target.appendChild(letter);
//     letter.textContent += this.words[this.wordIndex][this.letterIndex];

//     setTimeout(() => {
//       letter.remove();
//     }, 2500);
//   }

//   loop() {
//     setTimeout(() => {
//       if (this.wordIndex >= this.words.length) {
//         this.wordIndex = 0;
//         this.letterIndex = 0;
//         this.loop();
//       } else if (this.letterIndex < this.words[this.wordIndex].length) {
//         this.createLetter();
//         this.letterIndex++;
//         this.loop();
//       } else {
//         this.wordIndex++;
//         this.letterIndex = 0;
//         setTimeout(() => {
//           this.loop();
//         }, 2800);
//       }
//     }, 60);
//   }
// }

// const typingAnimation = new TypingAnimation("target", ["Devellopeur", "Front-end", "React"]);
// typingAnimation.loop();

