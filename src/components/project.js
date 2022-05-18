import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Markdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ project }) => (
    <div className="card my-4 shadow-sm">
        <div className="card-body">
            {project.thumb && (
                <Img
                    className="float-left"
                    fixed={project.thumb.childImageSharp.fixed}
                    style={{ margin: -16, marginRight: 0 }}
                />
            )}
            <h2 className="card-title">{project.name}</h2>
            {project.subtitle && (
                <h5 className="card-subtitle mb-3 text-muted">
                    {project.subtitle}
                </h5>
            )}
            <div className="mb-3">
                {project.links.map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={link.icon}
                            className="mr-2"
                            style={{
                                maxWidth: "1.25em",
                                maxHeight: "1em",
                                verticalAlign: "-0.125em",
                            }}
                        />
                        {link.name}
                    </a>
                ))}
            </div>
            <Markdown source={project.description} />
            <div className="row grid">
                {project.images.map((image, i) => (
                    <div key={i} className="col col-auto">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={image.childImageSharp.original.src}
                            style={{ display: "block" }}
                        >
                            <Img
                                fixed={image.childImageSharp.fixed}
                                style={{ display: "block" }}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

Project.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        links: PropTypes.array.isRequired,
        images: PropTypes.array.isRequired,
    }),
};

export default Project;
