import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <header className="App-header">
        <div className="login-form">
          <p className="App-name">질문하는 머쓱이</p>
          <form className="form-input">
            <div className="id-input">
                <input type="text" name="id" id="name" placeholder='아이디' className='inputs'></input>
            </div>
            <div className="password-input">
                <input type="text" name="password" id="password" placeholder='비밀번호' className='inputs'></input>
            </div>

            <div>
              <button className="login-button" type='button'>로그인</button>
            </div>
            
            <div className="info">
              <span className="sign-up">회원가입</span>
              <span className="forget-password">비밀번호 찾기</span>
              <span className="forget-id">아이디 찾기</span>
            </div>
          <div className="bottom-line">
          </div>
          </form>
          <p className="or">또는</p>
          <div className="google-login">
          <button className="login-button" id="google-login-button" type='button'>구글로그인</button>
          </div>
          <div className="kakao-login">
          <button className="login-button" id="kakao-login-button" type='button'>카카오로그인</button>
          </div>
        </div>
       </header>
     </div>
  );
}

export default App;
