import { useContext } from "react";
import ThemeBotton from "./ThemeBotton";
import { ThemeContext } from "./ThemeContext";

function Main() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
      <center>
        <div className={darkMode ? "about-details-dark" : "about-details"}>
          <div className="text-left">
            <img
              className="img-fluid"
              src="https://avatars.githubusercontent.com/u/86408952?v=4"
              alt="..."
            />
            <h3>Abhishek Ranjan</h3>
            <h6>Software Developer</h6>
            <hr />
            <p>
              Software developers invent the technologies we sometimes take for
              granted. For instance, that app that rings, sings or buzzes you
              out of a deep sleep every morning? A software developer helped
              design that. And when you roll into the office and turn on your
              computer, clicking and scrolling through social media, music and
              your personal calendar – software developers had a big hand in
              shaping those, too.
            </p>
          </div>

          <div className="icons">
            <span className="fa fa-github"></span>
            <span className="fa fa-instagram"></span>
            <span className="fa fa-linkedin-square"></span>
          </div>
        </div>
      </center>

      <ThemeBotton />
    </div>
  );
}

export default Main;
