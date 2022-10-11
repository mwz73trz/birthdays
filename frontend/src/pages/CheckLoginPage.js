import { Link } from "react-router-dom";

const CheckLoginPage = (props) => {
  if (props.username === "") {
    return (
      <div style={{ marginTop: "10%" }}>
        <p>
          You are not logged in, either <Link to="/login">LOGIN</Link> or{" "}
          <Link to="/signup">SIGN UP</Link> to enter Brithday App.
        </p>
      </div>
    );
  }
  return <div>{props.actualPage()}</div>;
};

export default CheckLoginPage;
