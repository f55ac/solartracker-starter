import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'
import { getDatabase, ref, child, get, push, remove, set } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js'

const firebaseConfig = {
  apiKey: "AIzaSyDv83pED-6O5_FTzewJ_9MeaMREO2I3CwU",
  authDomain: "esp32-firebase-48b88.firebaseapp.com",
  databaseURL: "https://esp32-firebase-48b88-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-firebase-48b88",
  storageBucket: "esp32-firebase-48b88.appspot.com",
  messagingSenderId: "414288100642",
  appId: "1:414288100642:web:1b80bca52d40b6c59a797b"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

async function getPath(path, callback) {
    // If the user forgot to add a '/' in front, add it for them
    if (path[0] !== "/") path = "/" + path; 

    const database_snapshot = await get(ref(database, path));
    callback( database_snapshot);
}
async function pushPath(path, object) {
    await push(ref(database, path), object);
}
async function setPath(path, object) {
    await set(ref(database, path), object);
}
async function removePath(path, object) {
    await push(ref(database, path), object);
}

// a callback function is typically used in asynchronous (async) code
// to do something after an asynchronous operation is done (like a 
// network request finishing) 
function callbackSetConsole(snapshot) {
    const data = snapshot.val(); // .val() turns the database snapshot into useable data

    document.getElementById("read").value = JSON.stringify(data); 
    
    // successfully set the value?
    //if (document.getElementById("read").value === JSON.stringify(data))
    //    return true;
    //else
    //    return false;
}

let readbutton = document.getElementById("readbutton");
let sendbutton = document.getElementById("sendbutton");

readbutton.addEventListener("click", () => {
    const path = document.getElementById("read-path").value;
    
    // async function getPath(path, callback) {
    getPath(path, callbackSetConsole);
});
sendbutton.addEventListener("click", () => {
    const path = document.getElementById("send-path").value;
    const send_data = JSON.parse(document.getElementById("send").value);
     
    // async function setPath(path, object) {
    setPath(path, send_data);
});


