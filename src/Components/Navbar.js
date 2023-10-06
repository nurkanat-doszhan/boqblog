import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // let mail = localStorage.getItem('nurkanaat@gmail.com');
  const [isLog, setIsLog] = useState(mail.split(',')[3])
  // useEffect(() => {
  //   console.log(isLog);
  // })
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-label="Toggle navigation"
          data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a aria-current="page" href="#">Главная</a> */}
              <Link className="nav-link active" to="/">Главная</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login">Вход</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/registration">Регистрация</Link>
                  </li>
                </>
              }
            </ul>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar