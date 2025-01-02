export default class AdminModel {
    constructor(firstName, lastName, email, password, dob, type, id) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.dob = dob;
      this.type = type;
      this.id = id;
    }
  
    static login(email, password) {
        console.log(email,password,"this is email and password")
      const admin = admins.find(
        (u) => u.email === email && u.password === password
      );
      return admin || null;
    }
  }
  
  const admins = [
    new AdminModel(
      "paradise",
      "rental",
      "paradise.rental@super.com",
      "0123456780",
      "1985-05-15",
      "superadmin",
      1
    ),

    new AdminModel(
        "rahul",
        "das",
        "rahul@admin.com",
        "0123456780",
        "1985-05-15",
        "admin",
        1
      )

  ];
  