import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function FormEdit(props) {
  const [values, setValues] = useState({});

  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.cookies.user);
  }, []);

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  const submit = (event) => {
    event.preventDefault();
    event.persist();
    console.log("push data somewhere :)");
    console.log(values);

    //TODO: make registration request to the back-end

    props.setCookies("user", values);
    props.setPage("home");
  };

  const cancel = () => {
    props.setPage("home");
  };

  const deleteUser = () => {
    //TODO: make delete request to the back-end
    props.removeCookie("user");
    props.setPage("home");
  };

  return (
    <Form>
      <Col xs={10} sm={8} className="d-flex flex-column mx-auto form-panel">
        <h1 className="fw-bold mb-3">Editar dados</h1>
        <Form.Group as={Col} sm={12} className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            name="name"
            as="input"
            onChange={onFormChange}
            defaultValue={data.name}
          />
        </Form.Group>
        <Row>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              name="cpf"
              as="input"
              onChange={onFormChange}
              defaultValue={data.cpf}
            />
          </Form.Group>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>PIS</Form.Label>
            <Form.Control
              name="pis"
              as="input"
              onChange={onFormChange}
              defaultValue={data.pis}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              onChange={onFormChange}
              defaultValue={data.email}
            />
          </Form.Group>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={onFormChange}
              defaultValue={data.password}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} xs={8} className="mb-3">
            <Form.Label>Rua</Form.Label>
            <Form.Control
              name="street"
              as="input"
              onChange={onFormChange}
              defaultValue={data.street}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} className="mb-3">
            <Form.Label>Número</Form.Label>
            <Form.Control
              name="number"
              as="input"
              onChange={onFormChange}
              defaultValue={data.number}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={8} className="mb-3">
            <Form.Label>Complemento</Form.Label>
            <Form.Control
              name="complement"
              as="input"
              onChange={onFormChange}
              defaultValue={data.complement}
            />
          </Form.Group>
          <Form.Group as={Col} sm={4} className="mb-3">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              name="cep"
              as="input"
              onChange={onFormChange}
              defaultValue={data.cep}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={6} lg={4} className="mb-3">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              name="city"
              as="input"
              onChange={onFormChange}
              defaultValue={data.city}
            />
          </Form.Group>
          <Form.Group as={Col} sm={6} lg={4} className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              name="state"
              as="input"
              onChange={onFormChange}
              defaultValue={data.state}
            />
          </Form.Group>
          <Form.Group as={Col} sm={12} lg={4} className="mb-3">
            <Form.Label>País</Form.Label>
            <Form.Control
              name="country"
              as="input"
              onChange={onFormChange}
              defaultValue={data.country}
            />
          </Form.Group>
        </Row>
        <Row className="d-flex flex-row gap-5">
          <Button
            as={Col}
            variant="outline-danger"
            onClick={deleteUser}
            className="mt-3 me-auto"
          >
            Excluir conta
          </Button>
          <Button
            as={Col}
            onClick={cancel}
            variant="outline-warning"
            className="mt-3 mx-auto"
          >
            Cancelar
          </Button>
          <Button
            as={Col}
            onClick={submit}
            variant="primary"
            type="submit"
            className="mt-3 ms-auto"
          >
            Confirmar
          </Button>
        </Row>
      </Col>
    </Form>
  );
}

export default FormEdit;
