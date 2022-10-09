import { Link } from "react-router-dom";

const AllBirthdays = (props) => {
  return (
    <tr>
      <td>{props.birthday.name}</td>
      <td>{props.birthday.birth_date}</td>
      <td>{props.birthday.age}</td>
      <td>
        <Link to={`birthdays/${props.birthday.id}`}>Details</Link>
      </td>
    </tr>
  );
};

export default AllBirthdays;
