module.exports = {
    siteMetadata: {
        title: "Guillaume's gallery",
        description: "Simple gallery of various little projects I've done or partook in.",
        author: 'Guillaume Noël-Martel'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-transformer-json',
            options: {
                typeName: 'Json'
            }
        },
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/data/`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'
    ]
};
