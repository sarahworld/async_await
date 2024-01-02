
// 1
const axios = require('axios');
async function singleNumber(){
    let number = 42
    let url = `http://numbersapi.com/${number}?json`

    let numberPromise = await axios.get(url);
    
    console.log(numberPromise.data)
}

singleNumber()


// 2
async function numArray(){
    let nums = [32,78,45,50,100]
    let Baseurl = `http://numbersapi.com/${nums}?json`

    let promises = await axios.get(Baseurl)

    console.log(promises.data)
}
    
numArray()
// // 3

async function mutipleFacts(){
    let num = 8
    let allPromises = []
    let promUrl = `http://numbersapi.com/${num}?json`


    for(let i = 0; i < 4; i++){

        allPromises.push(await axios.get(promUrl))
    }
    for(let each of allPromises){
        console.log(each.data)
    }
        
}

mutipleFacts()










    

    