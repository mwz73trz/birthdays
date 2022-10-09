import { useEffect, useState } from "react";
import birthdayAPI from "../api/birthdayAPI";
import AllBirthdays from "../components/AllBirthdays";
import Table from "react-bootstrap/Table";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [birthdays, setBirthdays] = useState([]);

  const fetchAllBirthdays = async () => {
    const data = await birthdayAPI.getAllBirthdays();
    setBirthdays(data ? data : []);
  };

  useEffect(() => {
    fetchAllBirthdays();
  }, []);

  const renderAllBirthdays = () => {
    return birthdays.map((birthday, index) => {
      return (
        <tbody>
          <AllBirthdays birthday={birthday} />
        </tbody>
      );
    });
  };
  return (
    <div className="home-container">
      <h1>Birthdays</h1>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <td>Name</td>
            <td>Birth Date</td>
            <td>Age</td>
            <td>More</td>
          </tr>
        </thead>
        {renderAllBirthdays()}
      </Table>
      <Link to={`/birthdays/add`}>
        <IoMdAddCircle />
      </Link>
    </div>
  );
};

export default HomePage;
