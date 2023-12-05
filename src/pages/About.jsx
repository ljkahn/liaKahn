import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import austynCody from "../assets/workImages/austynCody.png";
import Blurb from "../assets/workImages/Blurb.png";
import Horrors from "../assets/workImages/littleSiteOfHorrors.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function About() {
  return (
    <>
      <Row className="mt-15 justify-content-center">
        <Col md={6}>
          <div className="about text-center mb-20">
            Lia Kahn is a developer out of Denver, CO. Passionate about
            full-stack development with emphasis in back-end development. From
            being a motorcycle mechanic to studying neuroscience; from rock
            climbing to audio engineering - Lia has never met a problem she
            didn't want to solve.
          </div>
        </Col>
      </Row>
      <div className="work main-container">
        <Row className="text-align-center">
          <Col md={6}>
            <a href="https://blurb4-web-6d7dbae39646.herokuapp.com/home">
              <Card className="work-card">
                <Card.Img
                  variant="top"
                  src={Blurb}
                  className="work portfolio"
                />
                <Card.Body>
                  <Card.Text className="card-text">
                    <Button variant="dark">Blurb</Button>
                    <Button variant="dark">Github</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={6}>
            <a href="https://blurb4-web-6d7dbae39646.herokuapp.com/home">
              <Card className="work-card">
                <Card.Img
                  variant="top"
                  src={austynCody}
                  className="work portfolio"
                />
                <Card.Body>
                  <Card.Text className="btn card-text">
                    <Button variant="dark">Dark</Button>
                    <Button variant="dark">Dark</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <a href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/">
              <Card className="work-card">
                <Card.Img
                  variant="top"
                  src={Horrors}
                  className="work portfolio"
                />
                <Card.Body>
                  <Card.Text className="btn card-text">
                    <Button variant="dark">Dark</Button>
                    <Button variant="dark">Dark</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={6}>
            <a href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/">
              <Card className="work-card">
                <Card.Img
                  variant="top"
                  src={Horrors}
                  className="work portfolio"
                />
                <Card.Body>
                  <Card.Text className="card-text">
                    <Button variant="dark">Dark</Button>
                    <Button variant="dark">Dark</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
