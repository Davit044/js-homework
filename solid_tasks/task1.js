class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getUserData() {
        return {
            name: this.name,
            email: this.email
        };
    }
}

class UserRenderer {
    render(userData) {
        const div = document.createElement("div");
        div.innerHTML = `
      <h2>${userData.name}</h2>
      <p>${userData.email}</p>
    `;
        document.body.appendChild(div);
    }
}

const user = new User("Davit", "davit@example.com");
const renderer = new UserRenderer();

const data = user.getUserData();
renderer.render(data);
