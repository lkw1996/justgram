import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };

  return (
    <div className="flex-center container">
      <div className="login-container">
        <div className="logo-wrapper flex-center">
          <span className="logo-text">Justgram</span>
        </div>
        <div className="form-wrapper">
          <form id="login-form">
            <div className="flex-center login-wrapper">
              <input
                id="id-input"
                className="login-input"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="flex-center login-wrapper">
              <input
                id="pw-input"
                className="login-input"
                placeholder="비밀번호"
              />
            </div>
            <div className="flex-center button-wrapper">
              <button
                id="login-btn"
                className="login-button"
                type="submit"
                onClick={goToMain}
              >
                로그인
              </button>
            </div>
          </form>
        </div>
        <div className="flex-center extra-wrapper">
          <a className="find-password">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
