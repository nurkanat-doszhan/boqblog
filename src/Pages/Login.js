import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userData, setUserData] = useState({ email: '', pass: '' });
  const [errorAlert, setErrorAlert] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)
  const navigate = useNavigate();
  
  const login = () => {
    let mail = localStorage.getItem(userData.email);
    // If wrong email or password
    if (mail == null || mail.split(',')[2] != userData.pass) {
      setSuccessAlert(false)
      setErrorAlert(true)
    } else if (mail.split(',')[1] == userData.email && mail.split(',')[2] == userData.pass) {
      setSuccessAlert(true)
      setErrorAlert(false)
      let newData = `${mail.split(',')[0]},${mail.split(',')[1]},${mail.split(',')[2]},${true}`
      localStorage.setItem(userData.email, newData)
      // console.log(newData)
      props.userData(newData)
      setTimeout(() => {
        navigate("/cabinet")
      }, 1000);
    }
  }
  return (
    <div className="container">
      <h1 className="my-5 text-center">Вход</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 d-flex align-items-center">
          <form className="w-100">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" onChange={e => setUserData({ ...userData, email: e.target.value })} className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" onChange={e => setUserData({ ...userData, pass: e.target.value })} className="form-control w-100" id="exampleInputPassword1" />
            </div>
            {errorAlert && <div className="alert alert-danger" role="alert">Неверный email или пароль!</div>}
            {successAlert && <div className="alert alert-success" role="alert">Вы успешно вошли</div>}
            <button type="button" className="btn btn-success" disabled={
              userData.email === '' || userData.pass === '' ? true : false
            } onClick={() => login()}>Войти</button>
          </form>
        </div>
        <div className="col-md-4">
          <img src="tree2.png" width="350" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login;