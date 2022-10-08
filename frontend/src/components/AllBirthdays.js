const AllBirthdays = (props) => {
  return (
    <tr>
      <td>{props.birthday.name}</td>
      <td>{props.birthday.phone}</td>
      <td>{props.birthday.birth_date}</td>
      <td>{props.birthday.age}</td>
    </tr>
  );
};

export default AllBirthdays;
