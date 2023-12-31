import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <nav className="navbar  ">
              <Link className="navbar-brand " href="/">
                <img
                  src="https://kidslearningapps.net/wp-content/uploads/2014/09/KidsLearningApps_Logo_1000-1.png"
                  alt="Logo"
                  // width={80}
                  height={80}
                />
              </Link>

              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link " href="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
