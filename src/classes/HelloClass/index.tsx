class HelloClass {

    text: string
    constructor(text: string) {
        this.text = text
    }

    say() {
        return this.text
    }
}

export default HelloClass;