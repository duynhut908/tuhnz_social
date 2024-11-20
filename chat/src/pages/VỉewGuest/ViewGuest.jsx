import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './ViewGuest.css'

const ViewGuest = ({ handleGuest }) => {

    const [reg, setReg] = useState(false)

    const [err, setErr] = useState(null)
    const navigate = useNavigate()
    const handleReg = () => {
        setReg(!reg)
    }

    const { login, currentUser} = useContext(AuthContext);
    useEffect(() => {
        if (currentUser) {
            // Người dùng đã đăng nhập thành công
            console.log("Người dùng đã đăng nhập:", currentUser);
        }
    }, [currentUser]);
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const userData = await login(inputs);
            navigate('/messages')
            alert("Đăng nhập người dùng thành công!!");
        } catch (err) {
            setErr(err.response?.data)
        }
    };

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })


    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className='view-guest-1'>
            {!reg ?
                <div className='login'>
                    <div className='heading-web'>
                        <div className='heading-web-name'>TUHNZ</div>
                    </div>
                    {/* <div className='avatar-web'>
            <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
        </div> */}
                    <div className='form-login'>
                        <input type="text" placeholder="Email address or Username" name="username" onChange={handleChange} />
                        <input type="text" placeholder="Password" name="password" onChange={handleChange} />

                        {err && err}
                        <button onClick={handleLogin}>Đăng nhập</button>

                        <div className='forgot-account' onClick={() => handleGuest()}>Quên mật khẩu</div>
                        <hr className="divider" />
                        <div className='support-account'>
                            <button onClick={() => handleReg()}>Đăng ký</button>
                        </div>

                    </div> </div> : <div className='register'>
                    <div className='heading-web'>
                        <div className='heading-web-name'>TUHNZ</div>
                    </div>
                    {/* <div className='avatar-web'>
            <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
        </div> */}
                    <div className='form-login'>
                        <input type="text" placeholder="Email address" />
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />

                        <div className='note-reg'>Những người sử dụng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên TUHNZ.</div>
                        <div className='note-reg'>Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách bảo mật và Chính sách cookie của chúng tôi.</div>
                        <button onClick={() => handleGuest()}>Đăng ký</button>

                        <hr className="divider" />

                        <div className='support-account'>


                            <button onClick={() => handleReg()}>Đăng nhập</button>
                        </div>

                    </div></div>}
        </div>
    );
}
export default ViewGuest