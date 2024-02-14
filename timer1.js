//process.argv[2]

//process.stdout.write('\x07');  used to make ringing noise

// node timer1.js 10 3 5 15 9 
// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

const timer = function (input) {
let check = Math.sign(input);
let checkNaN = typeof(input);
  if (input === " ") {
    console.log("please provide valid input");
    return;
  }
  if(check = -1 || 0 ) {
    return;
  }
  if (checkNaN === NaN) {
    return;
  }
  for (const number of input) {
    let ms = number * 1000
    
  setTimeout(() => {
    process.stdout.write('\x07');
  }, `${ms}`)
}

}

const input = process.argv.splice(2);
timer(input);