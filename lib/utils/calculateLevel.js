function calculateLevel(xpTotal) {
  //levels have no formula. at total xp [amount], you level up; once you have 300 xp, you are now level 2 until you hit 900 xp.
  //it's if else all the way down
  switch(true) {
    case (0 <= xpTotal) && (xpTotal < 300):
      return 1;
    case (300 <= xpTotal) && (xpTotal < 900):
      return 2;
    case (900 <= xpTotal) && (xpTotal < 2700):
      return 3;
    case (2700 <= xpTotal) && (xpTotal < 6500):
      return 4;
    case (6500 <= xpTotal) && (xpTotal < 14000):
      return 5;
    case (14000 <= xpTotal) && (xpTotal < 23000):
      return 6;
    case (23000 <= xpTotal) && (xpTotal < 34000):
      return 7;
    case (34000 <= xpTotal) && (xpTotal < 48000):
      return 8;
    case (48000 <= xpTotal) && (xpTotal < 64000):
      return 9;
    case (64000 <= xpTotal) && (xpTotal < 85000):
      return 10;
    case (85000 <= xpTotal) && (xpTotal < 100000):
      return 11;
    case (100000 <= xpTotal) && (xpTotal < 120000):
      return 12;
    case (120000 <= xpTotal) && (xpTotal < 140000):
      return 13;
    case (140000 <= xpTotal) && (xpTotal < 165000):
      return 14;
    case (165000 <= xpTotal) && (xpTotal < 195000):
      return 15;
    case (195000 <= xpTotal) && (xpTotal < 225000):
      return 16;
    case (225000 <= xpTotal) && (xpTotal < 265000):
      return 17;
    case (265000 <= xpTotal) && (xpTotal < 305000):
      return 18;
    case (305000 <= xpTotal) && (xpTotal < 355000):
      return 19;
    case (xpTotal >= 355000):
      return 20;
    default:
      return 0;
  }
}

module.exports = { calculateLevel };
