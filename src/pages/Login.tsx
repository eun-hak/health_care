import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type Credentials = {
  id: string;
  password: string;
};

const mockCredentials: Credentials = {
  id: "a",
  password: "a",
};
const LoginForm = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<Credentials>({
    id: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof Credentials
  ) => {
    setCredentials({ ...credentials, [field]: event.target.value });
  };

  const handleClick = () => {
    navigate("/Profile");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      credentials.id === mockCredentials.id &&
      credentials.password === mockCredentials.password
    ) {
      console.log("로그인 성공");
      handleClick();
    } else {
      setError("아이디 혹은 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="id">id:</Label>
        <Input
          type="id"
          id="id"
          name="id"
          value={credentials.id}
          onChange={(event) => handleChange(event, "id")}
        />

        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={(event) => handleChange(event, "password")}
        />
        <Error>{error && <div>{error}</div>}</Error>

        <Button type="submit">로그인</Button>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;

const Title = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Error = styled.div`
  font-size: 10px;
  font-weight: 700;
`;
const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2c5ae9;
  color: white;
  border: none;
  border-radius: 3px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #2c5ae9;
  }
`;
