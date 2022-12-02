//function to create the array of random numbers.
const genSource = (count,minNum,maxNum) => {
    return Array.from(Array(count))
           .map( x => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum )
};

//exporting the module.
module.exports = genSource;
