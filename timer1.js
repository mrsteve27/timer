const arguments1 = process.argv.slice(2);

if (arguments1.length < 1) {
  console.log(`Please add at least 1 command-line arguments`);
  process.exit();
}

const convertToNum = function(numbers) {
  const outputArr = [];

  for (const nb of numbers) {
    outputArr.push(Number(nb));
  }

  return outputArr;
};

const timer = function(numbers) {
  console.log("numbers", numbers);
  for (const nb of numbers) {
    if (isNaN(nb)) {
      console.log(`Error: please input only numbers`);
      process.exit(); // exit the script
    }
    if (nb < 0) {
      console.log(`Error: please input only positive numbers`);
      process.exit(); // exit the script
    }

    if ((nb) - Math.floor(nb) !== 0) {
      console.log(`Error: please input only Whole numbers`);
      process.exit(); // exit the script
    }
      
    if (Number.isInteger(nb)) {
      // typecast
      setTimeout(() => {
        process.stdout.write('\x07');
      }, nb * 1000);
    }
  }
  
  return timer;
};

const result = timer(convertToNum(arguments1));
