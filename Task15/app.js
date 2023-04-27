let vezife = prompt("Vezifenizi daxil edin (admin , user , guest) ");
switch (vezife) {
  case "admin":
  case "Admin":
    console.log("Xos geldin admin bey! ");
    break;
  case "user":
  case "User":
    console.log("Xos geldin istifadeci! ");
    break;
  case "guest":
  case "Guest":
    console.log("Xos geldin qonaq! ");
    break;

   default:
    console.log("Siz kim idiz ? ") 
}
