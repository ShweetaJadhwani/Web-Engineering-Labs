var no_of_friends = 5;
console.log (`you have ${no_of_friends}`);

const obj={
    Name:"shweeta",
    Gender:"female",
    Code:"+92",
    age:"20"
}


const obj2= {...obj};
obj.Name="shweeeeeeetaaaa"
console.log(obj2)
console.log(obj)

const{Name,age,...rest}=obj
console.log(Name,'',age, rest)

//SetTimeOut
console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 2 seconds.');
}, 2000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');

//promise
function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    resolve(data);
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    // getData()
    // .then(data => {
    // console.log('Data received:', data);
    // return(data)
    // })
    // .catch(error => {
    // console.error('Error:', error.message);
    // });
    const myresult=getData()
    console.log(myresult)

    const rand= Math.floor(Math.random() * 1);
rand > 0.5 ?resolve(data): reject({message:"There is problem"})

console.log("I am after");
