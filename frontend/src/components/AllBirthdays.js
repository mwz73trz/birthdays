import { useNavigate } from "react-router-dom";

const AllBirthdays = (props) => {
  const navigate = useNavigate();
  const singleBirthday = () => {
    navigate(`birthdays/${props.birthday.id}`);
  };
  return (
    <tr onClick={singleBirthday}>
      <td>
        {props.birthday.first_name} {props.birthday.last_name}
      </td>
      <td>{props.birthday.birth_date}</td>
      <td>{props.birthday.age}</td>
    </tr>
  );
};

export default AllBirthdays;
