//reverse string practice

let string = "gnimmargorp ekil I";
let revString = "";
for(let i = string.length-1; i>=0; i--){
  revString = revString + string[i];
}
console.log(revString);

// factorial practice

function factorial(n){
  let result = 1;
  for(let i=1; i<=n; i++){
    result = result*i;
  }
return result;
}
let anser = factorial(4);
console.log(anser);

//vowel check

let str = "OtishyIslamPuspi";
let tempStr = str.toLowerCase();
count = 0;
for(let item of tempStr){
if("aeiou".includes(item)){
  count++;
}
}
console.log(count);

//prime number practice

function primeCheck(num){
  if(num <= 1)return false;
  if(num == 2)return true;
  if(num % 2 == 0)return false;
  for(let i=3;i<=Math.sqrt(num); i+=2){
    if(num % i == 0)return false;
  }
  return "The number is prime";
}
let a = primeCheck(7)
console.log(a);
