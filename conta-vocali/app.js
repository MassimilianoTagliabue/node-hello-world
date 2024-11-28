const argoments = process.argv[2];

let counter = 0;

for(let i = 0; i<argoments.length; i++){

    const curItem = argoments[i];
    const vocali = ["a","e","i","o","u"];
    
    if(vocali.includes(curItem.toLowerCase())){

        counter++;
    }

}

console.log(`${argoments} contiene ${counter} vocali`);
