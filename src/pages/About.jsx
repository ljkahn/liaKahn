import React from "react";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <>
      <div className="about">
        Born and raised in Boston, MA, and now developing in Denver, CO. I have
        a passion for full-stack development with a higher interest in back-end
        development. From being a motorcycle mechanic to studying neuroscience;
        from rock climbing to audio engineering - I have never met a problem I
        didn't want to solve.
      </div>

      <div className="work">
        <Row>
          <Col md={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
