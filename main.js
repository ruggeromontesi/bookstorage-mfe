import bookComponent from "./components/BookForm.js"
import doPost from "./apiService.js"

const app = Vue.createApp({
        data() {
            return {
                a: 1,
                books: []
            }
        },
        methods: {
            addBook(book) {
                this.books.push(book);
                doPost();
            }
        }
    }
)

app.component('book-form', bookComponent);

app.mount('#app')



