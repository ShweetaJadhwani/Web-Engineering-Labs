console.log("hellowordl")
setTimeout(function(){ 
      console.log("helllooooo")
},2000
)
let promise =new Promise(function(resolve,reject){
         alert("Dont do this")
         resolve(56)
})

let p=new Promise(function(reject,resolve){
    console.log("Hey i am rejected")
    reject(new Error("I am an error"))
},2000)



