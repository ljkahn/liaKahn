import React from "react";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import austynCody from "../assets/workImages/austynCody.png";
import Blurb from "../assets/workImages/Blurb.png";
import Horrors from "../assets/workImages/littleSiteOfHorrors.png";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <>
      <Row className="mt-15 justify-content-center">
        <Col md={6}>
          <div className="about text-center mb-20">
            Born and raised in Boston, MA, and now developing in Denver, CO. I
            have a passion for full-stack development with a higher interest in
            back-end development. From being a motorcycle mechanic to studying
            neuroscience; from rock climbing to audio engineering - I have never
            met a problem I didn't want to solve.
          </div>
        </Col>
      </Row>
      <div className="work">
        <Row>
          <Col md={4}>
            <a href="https://blurb4-web-6d7dbae39646.herokuapp.com/home">
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img variant="top" src={Blurb} className="work" />
                <Card.Body>
                  <Card.Title>Blurb</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={4}>
            <a href="https://blurb4-web-6d7dbae39646.herokuapp.com/home">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={austynCody}
                  className="img-fluid work"
                />
                <Card.Body>
                  <Card.Title>Austyn Cody</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={4}>
            <a href="https://blurb4-web-6d7dbae39646.herokuapp.com/home">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={Horrors}
                  className="img-fluid work"
                />
                <Card.Body>
                  <Card.Title>Little Site of Horrors</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        {/* <Row>
          <Col md={4}>
            <a href="https://blurb4-web-6d7dbae39646.herokuapp.com/home">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Blurb} />
                <Card.Body>
                  <Card.Title>Blurb</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={4}>
            <a href="https://blurb4-web-6d7dbae39646.herokuapp.com/home">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Blurb} />
                <Card.Body>
                  <Card.Title>Blurb</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={4}>
            <a href="https://blurb4-web-6d7dbae39646.herokuapp.com/home">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Blurb} />
                <Card.Body>
                  <Card.Title>Blurb</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default About;
