import { useState } from "react";

const Login = () => {
    const [userData, setUserData] = useState({login: '', email: '', pass: ''});
    const [errorAlert, setErrorAlert] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)
    const submit = () => {
        // console.log(userData.login, userData.email, userData.pass)
        if (localStorage.getItem(userData.email) == null) {
            setErrorAlert(false)
            setSuccessAlert(true)
            let obj = { login: userData.login, email: userData.email, pass: userData.pass }
            localStorage.setItem(obj.email, [obj.login, obj.email, obj.pass]);
        } else {
            setSuccessAlert(false)
            setErrorAlert(true)
        }
    }
    return (
        <div className="container">
            <h1 className="my-5 text-center">Регистрация</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 d-flex align-items-center">
                    <form className="w-100">
                        <div className="mb-3">
                            <label htmlFor="login" className="form-label">Author name</label>
                            <input required type="text" onChange={e => setUserData({...userData, login: e.target.value})} className="form-control w-100" id="login" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input required type="email" onChange={e => setUserData({...userData, email: e.target.value})} className="form-control w-100" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passs" className="form-label">Password</label>
                            <input required type="password" onChange={e => setUserData({...userData, pass: e.target.value})} className="form-control" id="passs" />
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
                        } type="button" className="btn btn-success" onClick={() => submit()}>Зарегистрироваться</button>
                    </form>
                </div>
                <div className="col-md-4">
                    <img src="tree.png" width="350" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;