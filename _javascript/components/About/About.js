import React from 'react';
import ReactDOM from 'react-dom';


export const About = (props) => {
    return (
        <footer class="footer has-text-centered" id="footer">
            <div class="columns">
                <div class="column">
                    <p class="mb-5">
                        <span class="mb-4">Oh no! The contact links are in the header instead of here.</span>
                    </p>
                    <button class="button has-text-weight-medium is-link mb-5" href="#information"
                        class="has-text-weight-medium"><span class="icon"><i class="fas fa-chevron-up"></i></span> <span> Go up
            there</span></button>
                </div>
                <div class="column">
                    <h2>There will be a email form here.</h2>
                </div>
            </div>
            <p class="is-size-7">
                © 2020 by <span class="has-text-weight-medium">Lenin Nava</span>
            </p>
        </footer>
    )
};