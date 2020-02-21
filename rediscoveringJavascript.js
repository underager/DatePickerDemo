 //#region enhanced for loop
const names = ['Tom', 'Jerry'];

// for(let i =0; i< names.length; i++){
//     console.log(`${i} -- ${names[i]}`);
// }

// for(const name of names){
//     console.log(name);
// }

// for(const entry of names.entries){
//     console.log(entry);
// }

// for(const entry of names.entries){
//     console.log(`${entry[0]} -- ${entry[1]} `);
// }

// for(const entry of names.entries()){

//     //destructuring
//     const [i, name] = entry;
//     console.log(`${i} -- ${name} `);
// }


 for(const [i,name] of names.entries){
    console.log(`${i} -- ${name} `);    
 }
 //#endregion