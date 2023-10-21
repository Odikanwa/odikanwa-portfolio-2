import React from "react";
import { useState } from "react";
import classNames from "classnames";
import projects from "./projectsData";
import "../styles/projectsMenu.css";
import { Modal } from "@mui/material";

const ProjectsMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeProject, setActiveProject] = useState(1);
  const projectItems = [
    "PROJECT ONE",
    "PROJECT TWO",
    "PROJECT THREE",
    "PROJECT FOUR",
  ];

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const Modal1 = ({ children }) => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    );
  };

  const renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title} onClick={handleOpen}></img>
        <div>{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
        <Modal1>
          <div className="modal-img-container">
            <img
              className="modal-img"
              src={project.image}
              alt={project.title}
              onClick={handleOpen}
            ></img>
            <p className="modal-close-btn" onClick={handleClose}>
              X
            </p>
          </div>
        </Modal1>
      </div>
    ));
  };

  return (
    <div className="project-menu">
      <div className="project-items-container">
        {projectItems.map((item, index) => (
          <div
            key={index}
            className={classNames("project-item", {
              activeProject: activeProject === index + 1,
            })}
            onClick={() => handleProjectClick(index + 1)}
          >
            <h2 className="title">{item}</h2>
          </div>
        ))}
      </div>
      <div className="project-sub-container">
        {renderContent([projects[activeProject]])}
      </div>
    </div>
  );
};

export default ProjectsMenu;
