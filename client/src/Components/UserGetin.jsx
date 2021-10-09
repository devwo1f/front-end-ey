import { InputGroup, FormControl, Button } from "react-bootstrap";

function UserGetin() {
  function handleClick() {}
  return (
    <form>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button onClick={handleClick} type="submit">
        Get In
      </Button>
    </form>
  );
}

export default UserGetin;
