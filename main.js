import bookComponent from "./components/BookForm.js"
import { doPost } from "./apiService.js"
import bookListComponent from "./components/BookList.js"
import { getBooks } from "./apiService.js"


const app = Vue.createApp({
        data() {
            return {
                a: 1,
                books: getBooks()
            }
        },
        methods: {
            addBook(book) {
                //this.books.push(book);
                doPost(book);
            },
            getBooks() {
                books = getBooks();
                console.log('books= ' + books) 
            }
        }
    }
)

app.component('book-form', bookComponent);
app.component('book-list', bookListComponent);


app.mount('#app')



