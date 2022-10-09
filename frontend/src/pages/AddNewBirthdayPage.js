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
      address: e.target.elements["address"].value,
      city: e.target.elements["city"].value,
      state: e.target.elements["state"].value,
      zip: e.target.elements["zip"].value,
      email: e.target.elements["email"].value,
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
      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="zip">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="Zip" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" />
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
