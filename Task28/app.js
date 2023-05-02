function myFunction(eded) {
  if (eded % 2 === 0) {
    return true;
  } else if (eded % 2 === 1) {
    return false;
  }
}

function check(bool) {
    bool = myFunction(bool)
    if (bool) {
    console.log("Eded cutdur");
  } else if (!bool) {
    console.log("Eded tekdir");
  }
}
check(10)
check(13)

