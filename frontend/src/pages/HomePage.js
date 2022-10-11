import { useEffect, useState } from "react";
import birthdayAPI from "../api/birthdayAPI";
import AllBirthdays from "../components/AllBirthdays";
import Table from "react-bootstrap/Table";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const HomePage = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
    fetchAllBirthdays(searchTerm);
  };

  const fetchAllBirthdays = async () => {
    if (searchTerm) {
      console.log(searchTerm);
      const data = await birthdayAPI.searchBirthday(searchTerm);
      console.log(data);
      setBirthdays(data ? data : []);
    }
    // const data = await birthdayAPI.getAllBirthdays();
    // setBirthdays(data ? data : []);
  };

  useEffect(() => {
    fetchAllBirthdays();
  }, [searchTerm]);

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
      <Container>
        <h1>Birthdays</h1>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            value={text}
            onChange={handleChange}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark" type="submit">
            Search
          </Button>
        </Form>
      </Container>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <td>Name</td>
            <td>Birth Date</td>
            <td>Age</td>
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
