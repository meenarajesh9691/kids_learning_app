import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Router from "next/router";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8080/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("Kids Exist");
            Router.push("/subject");
          } else if (res.data === "notexist") {
            alert("Kids have not signup");
          }
        })
        .catch((err) => {
          alert("wrong details");
          console.log(err);
        });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="box">
        <Navbar />
        <div className=" form_div bg-light  d-flex flex-column align-items-center position-absolute  top-50 start-50 translate-middle   ">
          <h1 className="">Login</h1>
          <form method="POST">
            <div className="mt-4 mb-4">
              <input
                type="email"
                className="input form-control"
                name="email"
                placeholder="Email"
                // onChange={handleForm}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 mb-4">
              <input
                type="password"
                className="input form-control"
                name="password"
                placeholder="Password"
                // onChange={handleForm}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="container-fluid text-center">
              <button
                type="submit"
                onClick={submit}
                className="btn btn-success btn-lg  "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
