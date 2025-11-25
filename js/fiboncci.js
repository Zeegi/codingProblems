const count=20;


const toFindTheFiboncciToN = (n) => {

    if (n === 0){ 
        return 
    };

        let current = 0;
        let prev1 = 0;
        let prev2 = 1;
        let series = [];


    for(i=0; i <= n; i++) {
        if(i < 2){
            series.push(i);
        } else if ( i >= 2) {
            current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
            series.push(current);
        }
    }
    return series;

};

console.log(toFindTheFiboncciToN(count));