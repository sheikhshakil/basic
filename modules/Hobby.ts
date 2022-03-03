class Hobby {
    private hobby:string;

    constructor(input:string){
        this.hobby = input;
    }

    getHobby():string {
        return this.hobby;
    }
}

export default Hobby;