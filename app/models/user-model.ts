export class User
{
     userName :string;
     password:string;
     firstName:string;
     lastName:string;
     constructor(userName: string,password:string) {
        this.userName = userName;
        this.password= password;
        this.firstName="";
        this.lastName="";
    }
}