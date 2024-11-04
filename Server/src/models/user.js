// user model with roles  client host and influencer
export default class UserModal{
    constructor(name,email,password,type,id){

        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
        this.id=id;
  }

  static singUp(name,email,password,type){


  }
  static signIn(email,password){
    const user=users.find((u)=>u.email===email && u.password===password)
    return user
  }
}
var users=[
    {
id:1,
name:"paradise",
email:"paradise@admin.com",
password:"admin123",
type:"host"

    }
]