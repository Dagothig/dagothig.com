import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "./layout.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faGamepad,
    faCode,
    faExternalLinkAlt,
    faMobile,
} from "@fortawesome/free-solid-svg-icons";

library.add(faGamepad, faCode, faExternalLinkAlt, faMobile);

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>
                    <link rel="canonical" href="https://dagothig.com" />
                    <link rel="icon" href="favicon.ico" type="image/x-icon" />
                </Helmet>
                <div className="body-bg"></div>
                {children}
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
