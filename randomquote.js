/*
 Object of Quotes with different fragments. 
 The print function uses Math.random to get a random number to a max of the length in the array
 quote then adds these fragments together and the value is returned
 */
let quote = "";

const generateQuotes = {
  init: function (fragment1, fragment2, fragment3, fragment4, fragment5) {
    this.fragment1 = fragment1;
    this.fragment2 = fragment2;
    this.fragment3 = fragment3;
    this.fragment4 = fragment4;
    this.fragment5 = fragment5;
   
  },

  print: function () {
    const fragment1 = Math.floor(Math.random() * this.fragment1.length);
    const fragment2 = Math.floor(Math.random() * this.fragment2.length);
    const fragment3 = Math.floor(Math.random() * this.fragment3.length);
    const fragment4 = Math.floor(Math.random() * this.fragment4.length);
    const fragment5 = Math.floor(Math.random() * this.fragment5.length);

    quote =
      this.fragment1[fragment1] +
      " " +
      this.fragment2[fragment2] +
      " " +
      this.fragment3[fragment3] +
      " " +
      this.fragment4[fragment4] +
      " " +
      this.fragment5[fragment5];

    return quote;
  }
};

const wisdom = Object.create(generateQuotes);
wisdom.init(
  [
    "You can never",
    "He who has",
    "Take into account",
    "Lost time",
    "Common sense",
  ],

  [
    "plan the future",
    "a why to live",
    "that great love and great achievements",
    "is never",
    "is genius",
  ],
  [
    "by the past",
    "can bear almost any how",
    "involve great risk",
    "found again",
    "dressed in its own working clothes",
  ],
  [".", "!", ".", ".", "."],
  [
    "Edmund Burke",
    "Friedrich Nietzsche",
    "Dalai Lama",
    "Benjamin Franklin",
    "Ralph Waldo Emerson",

  ]
);

const inspirational = Object.create(generateQuotes);
inspirational.init(
  [
    "Try not to become",
    "A winner",
    "If you don't",
    "A good teacher can inspire hope",
    "Hope is the thing with feathers that perches",
  ],
  [
    "a man of success",
    "is a dreamer",
    "have a competitive advantage",
    "ignite the imagination",
    "in the soul and sings the tune without the words",
  ],
  [
    " but rather become a man of value",
    "who never gives up",
    "don't compete", 
    "and instill a love of learning",
    "and never stops at all",
  ],

  [".", ".", ".", ".", "."],

  [
    "Albert Einstein",
    "Nelson Mandela",
    "Jack Welch",
    "Brad Henry",
    "Emily Dickinson",
  ]
);