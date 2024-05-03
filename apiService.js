export {doPost as default};

function doPost() {
    fetch("http://localhost:8080/books/create", {
        method: "POST",
        body: JSON.stringify({
            "title": "Fix my bugs",
            "author": "test author",
            "barcode": 1
        }),
    headers: {
    "Content-type": "application/json",
    "accept": "application/json"
    },
    redirect: 'follow'
}).then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))




}


/*
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "title": "Fix my bugs",
      "author": "test author",
      "barcode": 1
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/books/create", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


*/







/*
  
  */
