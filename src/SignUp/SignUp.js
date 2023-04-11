import style from './SignUp.module.css';
import { Link } from 'react-router-dom';
import KakaoLogo from 'C:/tantara/tantara_frontend/src/Login/KakaoLogo.png';
import NaverLogo from 'C:/tantara/tantara_frontend/src/Login/NaverLogo.png';

const SignUp = () => {
    return (
        <>
            <div className={style.loginbackg}>
                <h1 className={style.login}>회원 가입</h1>

                <input className={style.signupinput} />
                <input className={style.signupinput} />
                <input className={style.signupinput} />
                <input className={style.signupinput} />
                <input className={style.signupinput2} />
                <input className={style.signupinput2} />
                <input className={style.signupinput2} />
                <br />
                <button className={style.loginbutton}>로그인</button>
                <p className={style.loginsns}>SNS로 가입하기</p>
                <img className={style.logo} src={KakaoLogo}/>
                <img className={style.logo} src={NaverLogo}/>
            </div>
        </>

    )
}

export default SignUp;