import axios from "axios";
import { useEffect } from "react";
const AddUser = ({ data, setData, user, setUser }) => {
  const users = () => {
    const url = "https://randomuser.me/api/";
    axios(url)
      .then((data) => setUser(data.data.results))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    users();
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <table className="table">
            <tr className="head-tr">
              <th className="th">Name</th>
              <th className="th">Email</th>
              <th className="th">Phone</th>
              <th className="th">Age</th>
            </tr>

            <tr key={index} className="body-tr">
              <td> {item?.name.first} </td>
              <td>{item?.email}</td>
              <td>{item?.phone}</td>
              <td>{item?.dob.age}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default AddUser;
