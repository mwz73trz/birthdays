import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import birthdayAPI from "../api/birthdayAPI";
import Card from "react-bootstrap/Card";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const SingleBirtdayPage = () => {
  const params = useParams();
  const [birthday, setBirthday] = useState(null);

  const fetchSingleBirthday = async () => {
    const data = await birthdayAPI.getSingleBirthday(params.id);
    setBirthday(data);
  };

  useEffect(() => {
    fetchSingleBirthday();
  }, [params.id]);

  const renderSingleBirthday = () => {
    if (!birthday) {
      return null;
    }

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {birthday.first_name} {birthday.last_name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Birth Date: {birthday.birth_date} Age: {birthday.age}
          </Card.Subtitle>
          <Card.Text>{birthday.address}</Card.Text>
          <Card.Text>
            {birthday.city}, {birthday.state} {birthday.zip}
          </Card.Text>
          <Card.Text>Email: {birthday.email}</Card.Text>
          <Card.Text>Phone: {birthday.phone}</Card.Text>
          <Link to={`/birthdays/${birthday.id}/update`}>
            <FaEdit />
          </Link>
          <Link to={`/birthdays/${birthday.id}/delete`}>
            <FaTrashAlt />
          </Link>
        </Card.Body>
      </Card>
    );
  };

  return <div>{renderSingleBirthday()}</div>;
};

export default SingleBirtdayPage;
