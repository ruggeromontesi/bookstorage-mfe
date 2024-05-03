export { bookComponent as default};

const bookComponent = {
    template:
    /*html*/
    `
    <div>
        <p>What to do</p>
        <h3>Insert a book</h3>
        <label for="title">Title:</label>
        <input id="title" v-model="title"></input>
        <label for="author">Author:</label>
        <input id="author" v-model="author"></input>
        <br>
        <!-- <input class="button" type="submit" value="Submit"> -->
        <button class="button" v-on:click="onSubmit">Submit</button> 
    </div>

    `,
    data() {
        return {
            title: '',
            author: '',
        }
    },

    methods: {
        onSubmit() {
            let book = {
                title: this.title,
                author: this.author 
            }

            this.$emit('book-created', book)
            this.title = '',
            this.author = ''

        }
    }

}