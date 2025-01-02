export default class HostModal {
  constructor(firstName, lastName, email, password, dob, type, id, status) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.dob = dob;
      this.type = type;
      this.id = id;
      this.status = status;
  }

  static findProfile(email) {
      const userdata = users.find((u) => email == u.email);
      return userdata || null;
  }

  static addProfile(userData) {
    const newId = users.length ? users[users.length - 1].id + 1 : 1; // Generate new ID

    // Normalize user data with default values
    const newUser = {
        id: newId,
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        email: userData.email || "",
        password: userData.password || "",
        type: "Host", // Always set type to "Host"
        mobile: userData.mobile || "",
        gender: userData.gender || "",
        address: userData.address || "",
        status: userData.status || "active", // Default to "active" if not provided
    };

    users.push(newUser);
    return newUser;
}

  static getAllUsers() {
      return users;
  }
}

var users = [
  {
      id: 1,
      firstName: "paradise",
      lastName: "rental",
      email: "paradise@admin.com",
      password: "12345678",
      type: "Host",
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
      type: "Host",
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
      type:"Host",
      mobile: "1234567890",
      gender: 'other',
      address: "global",
      status: "active"
  }
];
