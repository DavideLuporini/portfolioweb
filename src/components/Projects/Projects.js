import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import whatsApp from "../../Assets/Projects/whatsapp.png"
import todoList from "../../Assets/Projects/TodoList.PNG";
import netflix from "../../Assets/Projects/Netflix.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoList}
              isBlog={false}
              title="Todo List"
              description="Personal todo-list mabe with React-Redux-toolkit's functional components and a CRM for the task"
              ghLink="https://github.com/DavideLuporini/todo-list-React-redux/tree/main/progetto%20todo%20list"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsApp}
              isBlog={false}
              title="WhatsApp web Clone"
              description="Using Vue.js i made a clone of whatsApp web , avaiable only form desktop mode. Interactive: bots can answer to your messages , this made bu Javascript functions"
              ghLink="https://github.com/DavideLuporini/vue-boolzapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="I made a Neflix Clone , personalizing the style of the home , interactive search by title the Movie that you prefer. Every movie has Stars and resume , used an open Api called MovieDB to realise it."
              ghLink="https://github.com/DavideLuporini/vue-boolflix"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
