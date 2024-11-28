const argoments = process.argv;



for (i = 2; i<argoments.length; i++){

    const curItem = argoments[i];

    const result = ((curItem % 2 === 0) ? "pari" : "dispari");
    
    console.log(curItem +" "+ result);
    
}