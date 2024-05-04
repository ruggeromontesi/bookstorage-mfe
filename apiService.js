export {doPost, getBooks };



function doPost(book) {
    console.log('ruggero')
    fetch("http://localhost:8080/books/create", {
        method: "POST",

        
        body: JSON.stringify(book),
    headers: {
    "Content-type": "application/json",
    "accept": "application/json"
    },
    redirect: 'follow'
    }).then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))

    

    
/*
    fetch('http://localhost:8080/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        d = data;
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    console.log(d);
    */
     




}

function getBooks() {
    console.log('in get books')

    const book = {
        title: '',
        author: ''
    }
   
    let d = fetch('http://localhost:8080/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {

        
      console.log(data);
      book.title = data[0].title;
      book.author= data[0].author;
    })
    .catch(error => {
      console.error('Error:', error);
    });

    console.log(d);


    return [book]

} 


