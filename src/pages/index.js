import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Project from "../components/project";

export default () => (
    <Layout>
        <StaticQuery
            query={graphql`
                query indexQuery {
                    intro: file(name: { eq: "intro" }) {
                        childMarkdownRemark {
                            html
                        }
                    }
                    projects: file(name: { eq: "projects" }) {
                        childrenJson {
                            id
                            name
                            subtitle
                            description
                            date
                            links {
                                name
                                icon
                                url
                            }
                            thumb {
                                childImageSharp {
                                    fixed(quality: 100, width: 96, height: 96) {
                                        width
                                        height
                                        src
                                        srcSet
                                    }
                                }
                            }
                            images {
                                childImageSharp {
                                    fixed(quality: 100, width: 96, height: 96) {
                                        width
                                        height
                                        src
                                        srcSet
                                    }
                                    original {
                                        src
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <div className="bg-primary text-white hero shadow">
                        <div
                            className="container"
                            dangerouslySetInnerHTML={{
                                __html: data.intro.childMarkdownRemark.html,
                            }}
                        />
                    </div>
                    <div className="container">
                        {data.projects.childrenJson
                            .sort(p => p.date)
                            .reverse()
                            .map(p => (
                                <Project key={p.id} project={p} />
                            ))}
                    </div>
                    <div className="container my-4 text-center">
                        Made with{" "}
                        <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
                        <span className="mx-2">|</span>
                        <a href="https://github.com/Dagothig/dagothig.com">
                            Source
                        </a>
                        <span className="mx-2">|</span>
                        Merci à{" "}
                        <a href="https://www.instagram.com/catiniata/">
                            Myriam Noël-Martel
                        </a>{" "}
                        pour l' E S P A C E
                    </div>
                </>
            )}
        />
    </Layout>
);
