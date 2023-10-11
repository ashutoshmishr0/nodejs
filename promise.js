// promise is just like the promise in real life just like you promise someone to do some work and you do for that person just like promise done in java script

//syntext of promise

const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("welcome")
            let p=false;
            if(p==true){
                resolve(" this is get data ")
            }
            else{
                reject("error")
            }
        },3000)
    })

//resolve stand for promise is completed and reject stand for promise is rejected

p.then((a)=>{
    console.log(a);
})
.catch((err)=>{
    console.log(err);
})