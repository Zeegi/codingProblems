// const arrayNumebers = [1, 2, 3, 4];

// const productOfArraySelf = (arr) => {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArraySelf(arr.slice(1));
// }

// console.log(productOfArraySelf(arrayNumebers));


const arrayNumbers = [1, 2, 3];

const productOfArraySelf = (arr) => {
    if(arr.length === 0) {
        return;
    }
    let returnProduct = [];
    
    for(k=0; k<arr.length; k++){
        let productArray = arr.filter((item) => item !== arr[k]);
        console.log("productArray", productArray);
        let numberProduct = 1;
            for(i=0; i < productArray.length; i++){
                numberProduct = numberProduct * productArray[i] ;
                if(i + 1 === productArray.length){
                    returnProduct.push(numberProduct)
            }
        }
    }

    return returnProduct;
    
}

console.log(productOfArraySelf(arrayNumbers));



