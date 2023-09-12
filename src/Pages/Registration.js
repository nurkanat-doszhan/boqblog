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
            <h1 className="mt-5 mb-4">Регистрация</h1>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="login" className="form-label">Author name</label>
                            <input required type="text" onChange={e => setUserData({...userData, login: e.target.value})} className="form-control" id="login" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input required type="email" onChange={e => setUserData({...userData, email: e.target.value})} className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
                <div className="col-md-6">
                    <img src="tree.png" width="350" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;