const indexedDB =
window.indexedDB ||
window.mozIndexedDB ||
window.webkitIndexedDB ||
window.msIndexedDB ||
window.shimIndexedDB;

if (!indexedDB) {
console.log("IndexedDB could not be found in this browser.");
}

 // Let us open our database
const dbName="OrdersDB"
const request = window.indexedDB.open(dbName, 3);
request.onerror = (event) => {
    console.log(event.target.result)
};

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const objectStore = db.createObjectStore("Orders", { keyPath: "id" });
  
    objectStore.createIndex("category", ["category"], { unique: false });
    objectStore.createIndex("product_name", ["product_name"], { unique: false });
    objectStore.createIndex("image_url", ["image_url"], { unique: true });
    objectStore.createIndex("price", ["price"], { unique: false });
    objectStore.createIndex("payment", ["payment"], { unique: false });
};

let db
function getDB(IDB){
    db=IDB
}
request.onsuccess=(event)=>{
    const db=event.target.result;
    getDB(db)
}
  
export{
   db,
}