import { useNavigate } from "react-router-dom";
import birthdayAPI from "../api/birthdayAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddNewBirthdayPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const birthdayData = {
      first_name: e.target.elements["first_name"].value,
      last_name: e.target.elements["last_name"].value,
      phone: e.target.elements["phone"].value,
      birth_date: e.target.elements["birth_date"].value,
    };

    const newBirthday = await birthdayAPI.addNewBirthday(birthdayData);
    if (newBirthday) {
      navigate("/");
    }
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      method="POST"
      style={{ width: "30%", marginLeft: "35%" }}
    >
      <h1>Add New Birthday</h1>
      <Form.Group className="mb-3" controlId="first_name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="last_name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="birth_date">
        <Form.Label>Birth Date</Form.Label>
        <Form.Control type="date" placeholder="Birth Date" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Birthday
      </Button>
    </Form>
  );
};

export default AddNewBirthdayPage;
