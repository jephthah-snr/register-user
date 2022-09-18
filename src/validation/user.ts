const signUpValidation = {
    first_name: "required|string",
    last_name: "required|string",
    email: "required|string|email",
    phone: "required|string",
    country: "required|string",
    twitter: "string",
    facebook: "string",
    instagram: "string"
  };

  export default signUpValidation