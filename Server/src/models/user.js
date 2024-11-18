// user model with roles  client host and influencer
export default class UserModal{
    constructor(name,email,password,dob,type,id){

        this.name=name;
        this.email=email;
        this.password=password;
        this.dob=dob;
        this.type=type;
        this.id=id;
  }

  static singUp(legalName,email,password,dob,type){
const newUser=new UserModal(legalName,email,password,dob,type);
newUser.id=users.length+1;
users.push(newUser);
return newUser
  }

 
  static signIn(email,password){
    const user=users.find((u)=>u.email===email && u.password===password)
    return user
  }

  static async findOne(email) {
    console.log(email,"checking in model idfjdkjf")
    const user = users.find((u) => u.email == email.email);
    return user || null;
  }
  
}
var users=[
    {
id:1,
name:"paradise",
email:"paradise@admin.com",
password:"12345678",
type:"user",
mobile:"98634673",
gender:'male',
address:"india "

    }
]