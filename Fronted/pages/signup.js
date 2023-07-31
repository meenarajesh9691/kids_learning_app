import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Router from "next/router";
const signup = () => {
  // const [form, setForm] = useState({});
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleForm = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const submitData = async (e) => {
  //   e.preventDefault();
  //   let kids = { fullname, phone, email };

  // using axiox

  // const { data } = await axios.post("http://localhost:8080/create", kids);
  // console.log(data);
  // setFullname("");
  // setPhone("");
  // setEmail("");

  //using fetch

  // const res = await fetch("http://localhost:8080/create", {
  //   method: "POST",
  //   body: JSON.stringify(form),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const result = await res.json();
  // console.log(result);
  // console.log(res);
  // **************************************************

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8080/signup", {
          fullname,
          phone,
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("Kids already exist! ");
          } else if (res.data === "notexist") {
            alert("kids Signup Successfully!");
            Router.push("/login");
          }
        })
        .catch((err) => {
          alert("wrong details");
          console.log(err);
        });
      setFullname("");
      setPhone("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  // **************************************************

  return (
    <>
      <div className="box">
        <Navbar />
        <div className="form_div bg-light  d-flex flex-column align-items-center position-absolute  top-50 start-50 translate-middle ">
          <h1 className="text-primary">Signup</h1>
          <form method="POST">
            <div className=" mt-4 mb-4">
              <input
                type="text"
                className=" input form-control  "
                placeholder="Full Name "
                name="fullname"
                // onChange={handleForm}
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </div>
            <div className=" mt-4 mb-4">
              <input
                type="phone"
                className="input form-control  "
                placeholder="Mobile Number "
                name="phone"
                // onChange={handleForm}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className=" mt-4 mb-4">
              <input
                type="email"
                className="input form-control "
                placeholder="Email Id"
                name="email"
                // onChange={handleForm}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className=" mt-4 mb-4">
              <input
                type="password"
                className="input form-control "
                placeholder="Password"
                name="password"
                // onChange={handleForm}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="container-fluid text-center">
              <button
                type="submit"
                className="btn btn-outline-success btn-lg p-20px"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
