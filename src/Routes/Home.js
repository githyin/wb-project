import { useState } from "react";
import imageProfessor from "../img/3829620.jpg";
import imageStudent from "../img/8912826.jpg";
import { Link } from "react-router-dom";
import styles from "../css/home.module.css";

function Home() {
  const [isVisble, setIsVisible] = useState(true);
  const divProfessorIsVisble = {
    display: isVisble ? "block" : "none",
  };
  const divStudentIsVisble = {
    display: isVisble ? "none" : "block",
  };
  const loginPath = isVisble ? "/Professor" : "/Student";
  const divVisibility = (e) => {
    e.preventDefault();
    setIsVisible(!isVisble);
  };
  return (
    <div>
      <main className={styles.Home}>
        <div className={styles.welcomeHeader}>
          <div
            className={styles.welcomeHeaderDiv}
            onClick={divVisibility}
            style={divProfessorIsVisble}
          >
            <img
              className={styles.welcomeHeaderImage}
              src={imageProfessor}
              alt="Professor"
            />
          </div>
          <div
            className={styles.welcomeHeaderDiv}
            onClick={divVisibility}
            style={divStudentIsVisble}
          >
            <img
              className={styles.welcomeHeaderImage}
              src={imageStudent}
              alt="Student"
            />
          </div>
          <div className={styles["initial-setup-login"]}>
            <form className={styles["loginForm"]}>
              <div>
                <span>LECTURE</span>
              </div>
              <div>
                <input name="id" type="text" placeholder="Email or ID" />
                <input name="password" type="password" placeholder="Password" />
              </div>
              <Link to={loginPath}>
                <input name="log-in" type="submit" value="logIn" />
              </Link>
              <Link to="/">
                <input name="sign-in" type="submit" value="signIn" />
              </Link>
            </form>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
