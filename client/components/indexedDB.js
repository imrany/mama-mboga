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
};
  
request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction=db.transaction("Orders","readwrite")
    const orderStore=transaction.objectStore("Orders")
    const categoryIndex=orderStore.index("category")
    const product_nameIndex=orderStore.index("product_name")
    const image_urlIndex=orderStore.index("image_url")
    const priceIndex=orderStore.index("price")


    //add data to our DB
    orderStore.put({
        id:1,
        image_url:"sukuma",
        category:"Vegetables",
        product_name:"Sukuma wiki",
        price:20
    })
    orderStore.put({
        id:2,
        image_url:"spinach",
        category:"Vegetables",
        product_name:"Spinach",
        price:30
    })

    //query
    const getIdQuery=orderStore.get(2)
    const getPriceQuery=priceIndex.getAll([20])

    getIdQuery.onsuccess=()=>{
        console.log("idQuery",getIdQuery.result)
    }
};
  