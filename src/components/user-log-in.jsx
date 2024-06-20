import Card from "react-bootstrap/Card";

const UserLogIn = () => {
  return (
    <Card class="card mx-auto" style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title className="login">Log In</Card.Title>
        <Card.Text>
            <form>
                <label>Username:
                    <input type="text"
                    name="username"/>
                </label>
                <input type="submit" />
            </form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserLogIn;
