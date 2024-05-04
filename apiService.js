export {doPost as default};

function doPost(book) {
    
    let a = JSON.stringify(book);
    console.log('book: ' + a);
    fetch("http://localhost:8080/books/create", {
        method: "POST",
        /*body: JSON.stringify({
            "title": book.title,
            "author": book.author,
            "barcode": book.barcode
        }),*/
        body: JSON.stringify(book),
    headers: {
    "Content-type": "application/json",
    "accept": "application/json"
    },
    redirect: 'follow'
}).then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))




}


