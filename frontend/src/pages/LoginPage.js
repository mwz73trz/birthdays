import { useNavigate } from "react-router-dom";
import birthdayAPI from "../api/birthdayAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginPage = (props) => {
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username: e.target.elements["username"].value,
      password: e.target.elements["password"].value,
    };

    const data = await birthdayAPI.login(loginData);
    if (data) {
      props.setUsername(data.username);
      navigate("/");
    }
  };

  return (
    <Form
      style={{ width: "30%", marginLeft: "35%" }}
      onSubmit={handleFormSubmit}
      method="POST"
    >
      <h1>Login Page</h1>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginPage;
