let db;
// create a new db request for a "budget" database.
const request = window.indexedDB.open("workout", 1);

request.onupgradeneeded = function (event) {
}


request.onsuccess = function (event) {

}

request.onerror = function (event) {
    // log error here
    console.log(event.target.err)
};

function saveRecord(record) {
    const db = request.result;
    const exersize = db.exersize(["workout"], "readwrite");
    const pendingExersize = exersize.objectStore("pending")
    pendingExersize.add(record);
}