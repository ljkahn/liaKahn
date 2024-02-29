import React from "react";
import austynCody from "../assets/workImages/austynCody.png";
import Blurb from "../assets/workImages/Blurb.png";
import Horrors from "../assets/workImages/littleSiteOfHorrors.png";
import Seekers from "../assets/workImages/gameSeekers.png";
import Pomodoro from "../assets/workImages/pomodoro.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Japanese from "../assets/workImages/japaneseTattoo.png";

function About() {
  return (
    <>
      <div className="about text-center mb-20">
        Lia Kahn is a developer out of Denver, CO. Passionate about full-stack
        development with emphasis in back-end development. From being a
        motorcycle mechanic to studying neuroscience; from rock climbing to
        audio engineering - Lia has never met a problem she didn't want to
        solve.
      </div>
      <div className="work main-container">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className="work-card"
                style={{ backgroundColor: "#191919" }}
              >
                <img
                  src={Blurb}
                  alt="Blurb"
                  className="work portfolio center-image"
                />
                <CardContent style={{ padding: "16px" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="card-text"
                  >
                    <div className="card-title"></div>
                    <div>
                      <a
                        href="https://blurb4-web-6d7dbae39646.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          className="btn"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Deployed Site
                        </Button>
                      </a>
                      <a
                        href="https://github.com/ljkahn/Blurb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Github Repo
                        </Button>
                      </a>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className="work-card"
                style={{ backgroundColor: "#191919" }}
              >
                <img
                  src={austynCody}
                  alt="Austyn Cody"
                  className="work portfolio center-image"
                />
                <CardContent style={{ padding: "16px" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="card-text"
                  >
                    <div className="card-title"></div>
                    <div>
                      <a
                        href="https://www.austyncody.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          className="btn"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Deployed Site
                        </Button>
                      </a>
                      <a
                        href="https://github.com/ljkahn/austynCody"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Github Repo
                        </Button>
                      </a>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className="work-card"
                style={{ backgroundColor: "#191919" }}
              >
                <img
                  src={Horrors}
                  alt="Little Site of Horrors"
                  className="work portfolio center-image"
                />
                <CardContent style={{ padding: "16px" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="card-text"
                  >
                    <div className="card-title"></div>
                    <div>
                      <a
                        href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          className="btn"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Deployed Site
                        </Button>
                      </a>
                      <a
                        href="https://github.com/ljkahn/littleSiteOfHorrors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Github Repo
                        </Button>
                      </a>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className="work-card"
                style={{ backgroundColor: "#191919" }}
              >
                <img
                  src={Seekers}
                  alt="Game Seekers"
                  className="work portfolio center-image"
                />
                <CardContent style={{ padding: "16px" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="card-text"
                  >
                    <div className="card-title"></div>
                    <div>
                      <a
                        href="https://ljkahn.github.io/videoGameProj/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          className="btn"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Deployed Site
                        </Button>
                      </a>
                      <a
                        href="https://github.com/ljkahn/videoGameProj"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Github Repo
                        </Button>
                      </a>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className="work-card"
                style={{ backgroundColor: "#191919" }}
              >
                <img
                  src={Pomodoro}
                  alt="Pomodoro"
                  className="work portfolio center-image"
                />
                <CardContent style={{ padding: "16px" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="card-text"
                  >
                    <div className="card-title"></div>
                    <div>
                      <a
                        href="https://pomodoroclock94.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          className="btn"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Deployed Site
                        </Button>
                      </a>
                      <a
                        href="https://github.com/ljkahn/Pomodoro"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Github Repo
                        </Button>
                      </a>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className="work-card"
                style={{ backgroundColor: "#191919" }}
              >
                <img
                  src={Japanese}
                  alt="Japanese Tattoo Meanings/History App"
                  className="work portfolio center-image"
                />
                <CardContent style={{ padding: "16px" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="card-text"
                  >
                    <div className="card-title"></div>
                    <div>
                      {/* <a href="" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outlined"
                          className="btn"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Deployed Site
                        </Button>
                      </a> */}
                      <a
                        href="https://github.com/ljkahn/JapaneseTattooMeanings"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outlined"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Github Repo
                        </Button>
                      </a>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default About;
