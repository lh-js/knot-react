class HelloC {

    text: string
    constructor(text: string) {
        this.text = text
    }

    hello() {
        return this.text
    }
}

export default HelloC;