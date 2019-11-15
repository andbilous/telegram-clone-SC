class LoginService {
  constructor(credentials) {
    this.phone = credentials.phone;
    this.password = credentials.password;
    this.errors = [];
  }

  submit() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fn = this.validate() ? resolve : reject;
        fn();
      }, 2000);
    });
  }

    validate=() => {
      if (this.phone.length < 5 || this.phone.length > 15) {
        this.errors.push('phone');
      }
      if (this.password.length < 5 || this.password.length > 15) {
        this.errors.push('password');
      }
      if (!this.errors.length) {
        return true;
      }
      return false;
    }
}

export default LoginService;
