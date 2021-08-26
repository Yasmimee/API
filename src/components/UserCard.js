import React from 'react'
import {Card,Button} from 'reactstrap'

function UserCard ({user}){

    return(
        <div><Card style={{ width: '18rem' }}>
       
        <Card.Body>
        {user.name[0]}
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
           {user.email}
          </Card.Text>
          <Button variant="primary">Go to profile</Button>
        </Card.Body>
      </Card>
      </div>
    )
}
export default UserCard