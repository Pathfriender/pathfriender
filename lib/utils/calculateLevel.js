function calculateLevel(xpTotal) {
  switch(xpTotal) {
    case (0 >= xpTotal > 300):
      return 1;
    case (300 >= xpTotal > 900):
      return 2;
    case (900 >= xpTotal > 2700):
      return 3;
    case (2700 >= xpTotal > 6500):
      return 4;
    case (6500 >= xpTotal > 14000):
      return 5;
    case (14000 >= xpTotal > 23000):
      return 6;
    case (23000 >= xpTotal > 34000):
      return 7;
    case (34000 >= xpTotal > 48000):
      return 8;
    case (48000 >= xpTotal > 64000):
      return 9;
    case (64000 >= xpTotal > 85000):
      return 10;
    case (85000 >= xpTotal > 100000):
      return 11;
    case (100000 >= xpTotal > 120000):
      return 12;
    case (120000 >= xpTotal > 140000):
      return 13;
    case (140000 >= xpTotal > 165000):
      return 14;
    case (165000 >= xpTotal > 195000):
      return 15;
    case (195000 >= xpTotal > 225000):
      return 16;
    case (225000 >= xpTotal > 265000):
      return 17;
    case (265000 >= xpTotal > 305000):
      return 18;
    case (305000 >= xpTotal > 355000):
      return 19;
    case (xpTotal >= 355000):
      return 20;
    default:
      break;
  }
}

module.exports = { calculateLevel };
