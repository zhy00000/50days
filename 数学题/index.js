for (let a = 0; a <= 12; a++) {
  for (let b = 0; b <= 12; b++) {
    for (let c = 0; c <= 12; c++) {
      if (29 * a + 30 * b + 31 * c == 366 && a + b + c == 12) {
        console.log([a, b, c]); 
      }
    }
  }
}