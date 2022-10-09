import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import birthdayAPI from "../api/birthdayAPI";
import Card from "react-bootstrap/Card";

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
          <Card.Title>{birthday.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Birth Date: {birthday.birth_date} Age: {birthday.age}
          </Card.Subtitle>
          <Card.Text>{birthday.address}</Card.Text>
          <Card.Text>
            {birthday.city}, {birthday.state} {birthday.zip}
          </Card.Text>
          <Card.Text>Email: {birthday.email}</Card.Text>
          <Card.Text>Phone: {birthday.phone}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div>{renderSingleBirthday()}</div>;
};

export default SingleBirtdayPage;
