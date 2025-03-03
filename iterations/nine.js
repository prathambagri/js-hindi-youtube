// reduce

const myNums = [1,2,3]

    
// const myTotal = myNums.reduce(function(acc ,currVal){   // acc = accumulator , currVal = current value
//     console.log(`acc: ${acc} and currVAl ${currVal}`);  
    
//     return acc + currVal
// }, 0) // initial value of accumulator is 0

const myTotal = myNums.reduce((acc,currVal)=> acc + currVal ,0) // arrow function

console.log(myTotal);

const shopingCart = [
    {
        itemName : 'js',
        price : 2999
    },
    {
        itemName : 'python',
        price : 999
    },
    {
        itemName : 'mobile dev course',
        price : 4999
    },
    {
        itemName : 'data science coures',
        price : 12999
    },
]

const priceToPay =  shopingCart.reduce((acc, item) => acc + item.price ,0)
console.log(priceToPay);

