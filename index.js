
import { initializeApp } from "firebase/app";
import { getDatabase, get, query, set, push, remove,  ref, orderByKey, equalTo } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function getEverything() {
    return get(ref(database, "/")).then(snapshot=>snapshot.val());
}
async function pushUp(path, object) {
    await push(ref(database, path), object);
}
async function setUp(path, object) {
    await set(ref(database, path), object);
}
async function removeUp(path, object) {
    await push(ref(database, path), object);
}

async function firebaseFindUUID(path, uuid) {
    let newQuery = query(ref(database, "/ideas"), equalTo(uuid));
    //newQuery = query(query, equalTo(uuid));
    //console.log(newQuery);

    //console.log(get(newQuery).then((snapshot)=>snapshot.val()));
    return get(newQuery).then(s=>s);;
}

pushUp("/ideas", {
    description: "Make this thing more secure",
    epoch: 1662914119,
    uuid: crypto.randomUUID()
});

let data = await getUp();
console.log(data);

//await firebaseFindUUID("9a7a80f0-e6ae-431c-9373-39af7ddbdfb4");
