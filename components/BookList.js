import { getBooks } from "../apiService.js"

export {bookListComponent as default}

const bookListComponent = {
    template:
    /*html*/
    `
    <div>
        <ul>
            <li v-for="book in books"> {{ book.title }}</li>
        </ul>
    </div>
    `,
    data() {
        a: []
    },
    methods: {
    },
    props: {
        books: {
            type: Array,
            required: true
        }
    }
}