import React from "react"; 
import { Nav } from "../Nav"; 
export const Home = () => {
    return (
        <div>
            <header className="hero is-primary has-text-centered-touch has-text-right is-fullheight" id="information">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered is-vcentered">
                            <div className="column is-4" id="information-column">
                                <h1 className="title name is-size-huge is-size-3-only-touch mb-5">I&apos;m Lenin Nava</h1>
                                <h2 className="subtitle is-size-3 is-size-3-tablet mb-3">And I&apos;m a Front-end <br></br> web Developer/designer.</h2>
                                <div className="social-links">
                                    <span className="icon is-large">
                                        <a className="fab fa-lg fa-github-alt"></a>
                                    </span>
                                    <span className="icon is-large">

                                        <a className="fab fa-lg fa-telegram"></a>
                                    </span>
                                    <span className="icon is-large">
                                        <a href="#" className="fab fa-lg fa-twitter"></a>
                                    </span>
                                </div>
                            </div>
                            <div className="column has-text-right is-hidden-touch has-text-weight-normal is-family-secondary">
                                <Nav location="Home" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
