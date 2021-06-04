export class User {
  id: String;
  name: String;
  email: String;
  jwtToken: String;

  constructor(id: String, name: String, email: String, jwtToken: String) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.jwtToken = jwtToken;
  }
}
