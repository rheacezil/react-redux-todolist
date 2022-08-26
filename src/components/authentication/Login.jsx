import styles from "./Login.css";
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <div className={styles.container}>
      <Form className={styles.formContainer}>
        <h2>LOGIN</h2>

        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            size="sm"
            placeholder="Enter your email"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            placeholder="Enter your password"
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
