const password = (check) => {
  if (check.search(/[A-Z]/) < 0) {
    return "Password must have capital letter.";
  }
  if (check.search(/[a-z]/) < 0) {
    return "Password must have a lowercase letter.";
  }
  if (check.search(/[!@#\$%\^&\*_]/) < 0) {
    return "Password must have special character";
  }

  if (check.search(/[0-9]/) < 0) {
    return "Password must have digit/number";
  }
  if (check.length < 6) {
    return "password must have atleast 6 characters.";
  }
  return "Perfect password";
};

module.exports = password;
