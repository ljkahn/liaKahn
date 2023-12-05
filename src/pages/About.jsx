import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import austynCody from "../assets/workImages/austynCody.jpg";
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
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={Blurb} className="work portfolio" />
              <Card.Body>
                <Card.Text className="card-text">
                  <Button variant="outline-light" className="btn">
                    Deployed
                  </Button>
                  <Button variant="outline-light">Github</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={austynCody}
                className="work portfolio"
              />
              <Card.Body>
                <Card.Text className="btn card-text">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-light" className="btn">
                      Deployed
                    </Button>
                  </a>
                  <a
                    href="https://github.com/ljkahn/austynCody"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-light">Github</Button>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={Horrors}
                className="work portfolio"
              />
              <Card.Body>
                <Card.Text className="btn card-text">
                  <a
                    href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-light" className="btn">
                      Deployed
                    </Button>
                  </a>
                  <a
                    href="https://github.com/ljkahn/littleSiteOfHorrors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-light">Github</Button>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <a href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/">
              <Card
                className="work-card"
                style={{ backgroundColor: "rgb(20, 20, 20)" }}
              >
                <Card.Img
                  variant="top"
                  src={Horrors}
                  className="work portfolio"
                />
                <Card.Body>
                  <Card.Text className="card-text">
                    <Button variant="outline-light" className="btn">
                      Deployed
                    </Button>
                    <Button variant="outline-light">Github</Button>
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
