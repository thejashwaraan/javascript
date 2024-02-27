function walkdog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const walk=true
            if(walk){
            resolve("you wlk th dog🐕")
            }else{
                reject("you havent walk the dog")
            }
        },1500)
    })
}

function cleanroom(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleanroom=false

            if(cleanroom){
                resolve("you clean the room")
            }else{
                reject("you didnt clean the room")
            }
        },2000)
    })
}

function homework(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const homework=true
            if(homework){
            resolve("finished the homework")
            }else{
                reject("you havent finished your homework")
            }
        }, 2500);
    })
}

walkdog().then(value=>{console.log(value);return cleanroom()})
        .then(value=>{console.log(value);return homework()})
        .then(value=>{console.log(value);console.log("you finished all your homework")})
        .catch(error=>console.error(error))


