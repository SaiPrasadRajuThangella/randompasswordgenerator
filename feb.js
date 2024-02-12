function passwordgenerator(num) 
{
  const myset =
    " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+}{][|'.,><?/ ";
  let result = "";
  for (let i = 0; i < num; i++) {
    let randomindex = Math.floor(Math.random() * myset.length);
    let randomchar = myset[randomindex];
    result = result + randomchar;
  }
  console.log(result); //may be not required 
  return result;
}

let passwordlength = prompt("enter:");
console.log("your password is : " + passwordgenerator(passwordlength));
