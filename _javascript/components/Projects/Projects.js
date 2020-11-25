import React from "react";
import { Nav } from "../Nav";
export const Projects = (props) => {
    return (
        <section className="section" id="projects">
            <Nav location="Sections" />
            <h2 className="title">Stuff I've done</h2>
            <div className="container has-text-centered">
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-6">
                        <div className="tile is-child">
                            <div className="project-item">
                                <div className="project-content">
                                    <figure className="project-image">
                                        <img src="assets/project-images/cow-image.webp" alt=""></img>
                                    </figure>
                                    <div className="project-information has-text-weight-light">
                                        <div className="content">
                                            <h3 className="title is-size-2">Cow Products</h3>
                                            <p className="mb-5">A simple landing page, made with plain CSS and a lot of Flexbox.</p>
                                            <div className="buttons">
                                                <button className="button has-text-weight-medium is-info is-normal">
                                                    <span className="icon">
                                                        <i className="fab fa-github-alt"></i>
                                                    </span>
                                                    <span>Github</span>
                                                </button>
                                                <button className="button has-text-weight-medium  is-link is-normal">
                                                    <span className="icon"><i className="fa fa-rocket"></i></span>
                                                    <span>Live page</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-parent is-6">
                        <div className="tile is-child">
                            <div className="project-item">
                                <div className="project-content">

                                    <figure className="project-image">
                                        <img src="assets/project-images/cow-image.webp" alt=""></img>
                                    </figure>
                                    <div className="project-information has-text-weight-light">
                                        <div className="content">
                                            <h3 className="title is-size-2">Cow Products</h3>
                                            <p className="mb-5">A simple landing page, made with plain CSS and a lot of Flexbox.</p>
                                            <div className="buttons">
                                                <button className="button has-text-weight-medium is-info is-normal">
                                                    <span className="icon">
                                                        <i className="fab fa-github-alt"></i>
                                                    </span>
                                                    <span>Github</span>
                                                </button>
                                                <button className="button has-text-weight-medium  is-link is-normal">
                                                    <span className="icon"><i className="fa fa-rocket"></i></span>
                                                    <span>Live page</span></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tile is-ancestor">

                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <div className="project-item">
                                <div className="project-content">

                                    <figure className="project-image">
                                        <img src="assets/project-images/cow-image.webp" alt=""></img>
                                    </figure>
                                    <div className="project-information has-text-weight-light">
                                        <div className="content">
                                            <h3 className="title is-size-2">Project</h3>
                                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magni
                                            tempore debitis non
                                            odio mollitia consequatur, reiciendis nisi ipsam ab, saepe adipisci molestias consequuntur
                      provident reprehenderit illo voluptate ex?</p>
                                            <div className="buttons">
                                                <button className="button has-text-weight-medium is-info is-normal">
                                                    <span className="icon">
                                                        <i className="fab fa-github-alt"></i>
                                                    </span>
                                                    <span>Github</span>
                                                </button>
                                                <button className="button has-text-weight-medium  is-link is-normal">
                                                    <span className="icon"><i className="fa fa-rocket"></i></span>
                                                    <span>Live page</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};