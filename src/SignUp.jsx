import React from 'react';
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SignUp() {

  const { t } = useTranslation();

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase">{t("brand")}</h2>
                <p className=" mb-5">{t("details")}</p>
                <Form>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formFullName"
                    >
                      <Form.Label className="text-center">
                      {t("full-name")}
                      </Form.Label>
                      <Form.Control type="text" placeholder={t("enter-name")} />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formPhoneNumber"
                    >
                      <Form.Label>{t("phone-number")}</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder={t("enter-phone")}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formUsername"
                    >
                      <Form.Label className="text-center">
                      {t("email")}
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="email"
                          placeholder={t("enter-username")}
                        />
                        <InputGroup.Text className="text-primary">
                          @brand.com
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>{t("password")}</Form.Label>
                      <Form.Control type="password" placeholder={t("enter-password")} />
                    </Form.Group>
                  </Row>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                    {t("signup")}
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    {t("account-offer")}{" "}
                    <Link to="/"className="text-primary fw-bold" >  {t("login")}
                    </Link>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}