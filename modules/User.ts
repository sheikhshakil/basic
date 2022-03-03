class User {
    private name:string;

    constructor(input:string){
        this.name = input;
    }

    getName():string {
        return this.name;
    }
}

export default User;