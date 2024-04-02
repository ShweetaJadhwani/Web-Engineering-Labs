let key=prompt("Enter key you want to set")
let value=prompt("Enter value you want to set")

localStorage.setItem(key,value)
console.log(`the value at ${key} is ${localStorage.getItem(key)}`)
alert("enter both username and password ")