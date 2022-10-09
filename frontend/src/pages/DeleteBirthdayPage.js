import { useParams, useNavigate } from "react-router-dom";
import birthdayAPI from "../api/birthdayAPI";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const DeleteBirthdayPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const cancelDelete = () => {
    navigate(-1);
  };

  const deleteBirthday = async () => {
    const data = await birthdayAPI.deleteBirthday(params.id);
    if (data) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Delete Birthday</h1>
      <Alert variant="danger">Are you sure you want to delete this?</Alert>
      <Button variant="danger" type="submit" onClick={deleteBirthday}>
        Yes
      </Button>
      <Button variant="secondary" type="submit" onClick={cancelDelete}>
        No
      </Button>
    </div>
  );
};

export default DeleteBirthdayPage;
