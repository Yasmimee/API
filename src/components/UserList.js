import axios from "axios";
import { useEffect, useState} from 'react'
import {Row, Container} from 'reactstrap'
import {react} from 'react'
import UserCard from "./UserCard";
 function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));
    });

   return (
    ( <Container>
        <Row>
     { users.map((user,i)=><UserCard  key={i}  user={user} />)}
        </Row>
     </Container>
     )
   )}
   
export default UserList