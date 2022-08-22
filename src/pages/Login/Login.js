import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  //  Input 값 저장을위한 state
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };

  // 사용자 입력 데이터 저장
  const handleIdInput = (e) => {
    setUserId(e.target.value);
  };

  const handlePwInput = (e) => {
    setUserPw(e.target.value);
  };

  const validateInput = (userId, userPw) => {
    let isValidated = false;

    if (userId.includes("@") && userPw.length >= 5) {
      isValidated = true;
    }

    return isValidated;
  };

  // const loginHandler = (e) => {
  //   e.preventDefault();
  //   fetch("http://auth.jaejun.me:10010/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: userId,
  //       password: userPw,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log(result));
  // };

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
                onChange={handleIdInput}
              />
            </div>
            <div className="flex-center login-wrapper">
              <input
                id="pw-input"
                className="login-input"
                placeholder="비밀번호"
                onChange={handlePwInput}
              />
            </div>
            <div className="flex-center button-wrapper">
              <button
                id="login-btn"
                className="login-button"
                type="submit"
                onClick={goToMain}
                style={
                  validateInput(userId, userPw)
                    ? { background: "lightskyblue" }
                    : { background: "#cde9f4" }
                }
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
