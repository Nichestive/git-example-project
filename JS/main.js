const myObject={
    name:"Dave",
    logName: function( ){
        console.log(this.name);
    }
}

const myArray = ["eat", "sleep", "code"];
 
sessionStorage.setItem("mySessionStores", myArray);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData);