import { useState } from "react";

const Login = () => {
    const [userData, setUserData] = useState({email: '', pass: ''});
    const [errorAlert, setErrorAlert] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)
    const login = () => {
        let mail = localStorage.getItem(userData.email).split(',')[1];
        // console.log(localStorage.getItem(userData.email))
        if (mail == null) {
            setSuccessAlert(false)
            setErrorAlert(true)
        } else if (mail == userData.email) {
            setErrorAlert(false)
            setSuccessAlert(true)
        } else {
            setSuccessAlert(false)
            setErrorAlert(true)
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
                            <input type="email" onChange={e => setUserData({...userData, email: e.target.value})} className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onChange={e => setUserData({...userData, pass: e.target.value})} className="form-control w-100" id="exampleInputPassword1" />
                        </div>
                        {
                            errorAlert &&
                            <div className="alert alert-danger" role="alert">
                                Пользователь с таким email уже существует.
                            </div>
                        }
                        {
                            successAlert &&
                            <div className="alert alert-success" role="alert">
                                Вы успешно зарегистрировались.
                            </div>
                        }
                        <button disabled={
                            userData.email == '' || userData.login == '' || userData.pass == '' ? true : false
                        } type="button" className="btn btn-success" onClick={() => login()}>Войти</button>
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