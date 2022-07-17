class UserInfo {
  static get name() {
    return localStorage.getItem("userName") || "";
  }

  static set name(value) {
    localStorage.setItem("userName", value);
  }

  static get email() {
    return localStorage.getItem("userEmail") || "";
  }

  static set email(value) {
    localStorage.setItem("userEmail", value);
  }

  static get loginStatus() {
    return localStorage.getItem("isLogin") || "";
  }

  static set loginStatus(value) {
    localStorage.setItem("isLogin", value);
  }
  static Clear() {
    localStorage.setItem("userName", "");
    localStorage.setItem("userEmail", "");
    localStorage.setItem("isLogin", false);
  }
}

export default { UserInfo };
