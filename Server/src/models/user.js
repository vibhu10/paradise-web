// user model with roles  client host and influencer
export default class UserModal{
    constructor(firstName,lastName,email,password,dob,type,id,status){

       this.firstName=firstName;
       this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.dob=dob;
        this.type=type;
        this.id=id;
        this.status=status;
  }

  static singUp(firstName,lastName,email,password,dob,type,status){
const newUser=new UserModal(firstName,lastName,email,password,dob,type,status);
newUser.id=users.length+1;
users.push(newUser);
return newUser
  }

 
  static signIn(email,password){
    const user=users.find((u)=>u.email===email && u.password===password)
    return user
  }

  static async findOne(email) {
  
    const user = users.find((u) => u.email == email.email);
    
    return user || null;
  }
 static findProfile(email){
  console.log(email,"email in user.js")
  const userdata=users.find((u)=>email==u.email);
  console.log(userdata,"user return after finding data")
  return userdata ||null;
 }



static updateProfile(email, updates) {
  const userIndex = users.findIndex((u) => u.email === email);
  if (userIndex === -1) {
      return null;
  }

  // Update or add fields dynamically
  Object.keys(updates).forEach((key) => {
      users[userIndex][key] = updates[key];
  });

  return users[userIndex];
}
}
var users = [
  {
      id: 1,
      firstName: "paradise",
      lastName: "rental",
      email: "paradise@admin.com",
      password: "12345678",
      type: "user",
      mobile: "98634673",
      gender: 'male',
      address: "india",
      status: "active"
  },
  {
      id: 2,
      firstName: "vibhu",
      lastName: "kumar",
      email: "vibhu@admin.com",
      password: "12345678",
      type: "user",
      mobile: "98634673",
      gender: 'male',
      address: "india",
      status: "active"
  },
  {
      id: 3,
      firstName: "Super",
      lastName: "Admin",
      email: "super@admin.com",
      password: "admin123",
      type: "super_admin",
      mobile: "1234567890",
      gender: 'other',
      address: "global",
      status: "active"
  }
];
