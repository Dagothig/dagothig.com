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
    faImages,
} from "@fortawesome/free-solid-svg-icons";

library.add(faGamepad, faCode, faExternalLinkAlt, faMobile, faImages);

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        url
                    }
                }
            }
        `}
        render={data => (
            <>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>
                    <link rel="canonical" href={data.site.siteMetadata.url} />
                    <link rel="icon" href="favicon.ico" type="image/x-icon" />
                    <meta
                        name="description"
                        content={data.site.siteMetadata.description}
                    />
                </Helmet>
                {children}
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
