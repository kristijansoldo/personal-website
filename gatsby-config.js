/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                data: `@import "./src/styles/_variables.scss";`,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /static/, // See below to configure properly
                },
            },
        },
        `gatsby-plugin-react-helmet`,
    ],
};
