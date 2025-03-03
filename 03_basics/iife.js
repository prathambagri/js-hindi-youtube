// Immediately Invoked Function Expressions (IIFE)
// Immediately Invoked Function Expressions (IIFE) are functions that are defined and called immediately.


(function chai(){
    // named IIFE
    console.log(`db connected`);
})();
// ()- for function ()- for execution 
// it is used to prevent global scope pollution

((name) => {
    // unnamed IIFE
    console.log(`db connected two ${name}`);

})(`pratham`)

