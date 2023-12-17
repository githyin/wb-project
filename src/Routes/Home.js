import { useState } from "react";
import imageProfessor from "../img/3829620.jpg";
import imageStudent from "../img/8912826.jpg";
import { Link } from "react-router-dom";

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
      <div>
        <div onClick={divVisibility} style={divProfessorIsVisble}>
          <img src={imageProfessor} alt="Professor" />
        </div>
        <div onClick={divVisibility} style={divStudentIsVisble}>
          <img src={imageStudent} alt="Student" />
        </div>
      </div>
      <main>
        <form>
          <input name="id" type="text" placeholder="Email or ID" />
          <input name="password" type="password" placeholder="Password" />
          <Link to={loginPath}>
            <input name="log-in" type="submit" value="logIn" />
          </Link>
          <Link to="/">
            <input name="sign-in" type="submit" value="signIn" />
          </Link>
        </form>
      </main>
    </div>
  );
}

export default Home;
