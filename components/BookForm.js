import generateUpc from "../service/barcodeService.js";


export { bookComponent as default};

const bookComponent = {
    template:
    /*html*/
    `
    <div class="input-style">
        <p>What to do</p>
        <h3>Insert a book</h3>
        <label for="title">
            Title:
            <input id="title" v-model="title">
            </input>
        </label>
        
        <label for="author">
            Author:
            <input id="author" v-model="author">
            </input>
        </label>
        
        <label for="barcode">
            Barcode
            <input id = "barcode" v-model="barcode"></input>
        </label>
        <label for="quantity">
            Quantity:
            <input id="quantity" v-model="quantity"></input>
        </label>
        <br>
        <button class="b" v-on:click="onSubmit">Submit</button> 
    </div>

    `,
    data() {
        return {
            title: 'Ocp Oracle Certified Professional Java Se 11 Developer Complete Study Guide',
            author: 'Jeanne Boyarsky Scott Selikoff',
            barcode: generateUpc(),
            quantity: 0
        }
    },

    methods: {
        onSubmit() {
            let book = {
                title: this.title,
                author: this.author,
                barcode:  this.barcode,
                quantity: this.quantity,
            }

            this.$emit('book-created', book)
            this.title = '',
            this.author = '',
            this.quantity = 1

        }
    }

}