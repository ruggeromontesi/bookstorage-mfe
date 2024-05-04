export { generateUpc as default};

function generateUpc() {
    return Math.floor(Math.random() * 100000000 )
}