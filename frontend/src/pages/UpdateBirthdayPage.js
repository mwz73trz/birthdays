import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import birthdayAPI from "../api/birthdayAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UpdateBirthdayPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [birthday, setBirthday] = useState(null);

  const fetchBirthday = async () => {
    const data = await birthdayAPI.getSingleBirthday(params.id);
    setBirthday(data);
  };

  useEffect(() => {
    fetchBirthday();
  }, [params.id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
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

    const data = await birthdayAPI.editBirthday(params.id, updatedData);
    setBirthday(data);
    navigate(`/birthdays/${params.id}`);
  };

  const renderBirthday = () => {
    if (!birthday) {
      return null;
    }

    return (
      <Form
        onSubmit={handleFormSubmit}
        method="PUT"
        style={{ width: "30%", marginLeft: "35%" }}
      >
        <Form.Group className="mb-3" controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" defaultValue={birthday.first_name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" defaultValue={birthday.last_name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" defaultValue={birthday.address} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" defaultValue={birthday.city} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" defaultValue={birthday.state} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" defaultValue={birthday.zip} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" defaultValue={birthday.email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" defaultValue={birthday.phone} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="birth_date">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control type="date" defaultValue={birthday.birth_date} />
        </Form.Group>
        <Button type="submit">Save Changes</Button>
      </Form>
    );
  };
  return (
    <div>
      <h1>Update Birthday</h1>
      {renderBirthday()}
    </div>
  );
};

export default UpdateBirthdayPage;
