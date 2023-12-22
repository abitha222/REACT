import React, { useRef } from "react";

const LoginForm = () => {
    //Intilaization the ref(email and password)
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(emailRef);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //Transforming the data
    const formData = {
        email ,
        password,
    };
    console.log(formData);
    //clearing the value
    emailRef.current.value = "";
    passwordRef.current.value = "";
    //focusing
    emailRef.current.focus();
};
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="email" placeholder="Email" ref={emailRef}/>
            </div>
            <div>
                <input type="password" placeholder="Password" ref={passwordRef}/>
            </div>
            <button>Login</button>
        </form>
    </div>
);
};
export default LoginForm;
