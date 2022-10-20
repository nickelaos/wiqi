const path = require(`path`);
const slugify = require(`slugify`);

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`The site has been built!`);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const slugPrefix = "interview-questions";

  // CATEGORY --------------------------------------------------------------------------------------------------------
  const categoryTemplate = path.resolve(`src/templates/category.tsx`);

  const allCategoriesResult = await graphql(`
    {
      allContentfulCategory(filter: { enabled: { eq: true } }) {
        nodes {
          name
          id
          tooltip
          thumbnail {
            gatsbyImageData(
              layout: FIXED
              placeholder: TRACED_SVG
              width: 200
              height: 200
            )
          }
          article {
            id
            enabled
            title {
              title
            }
            updatedAt
            createdAt
            content {
              raw
            }
            category {
              id
            }
          }
        }
      }
    }
  `);

  if (allCategoriesResult.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query (allContentfulCategory).`
    );
    return;
  }

  allCategoriesResult.data.allContentfulCategory.nodes.forEach((node) => {
    const path = `/${slugPrefix}/${slugifyTitle(node.name)}`;
    createPage({
      path,
      component: categoryTemplate,
      context: {
        node,
      },
    });
  });

  // ARTICLE ---------------------------------------------------------------------------------------------------------

  const articleTemplate = path.resolve(`src/templates/article.tsx`);

  const allArticlesResult = await graphql(`
    {
      allContentfulArticle {
        totalCount
        nodes {
          title {
            title
          }
          updatedAt
          createdAt
          enabled
          id
          content {
            raw
          }
          category {
            id
            name
          }
        }
      }
    }
  `);

  if (allArticlesResult.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query (allContentfulArticle).`
    );
    return;
  }

  allArticlesResult.data.allContentfulArticle.nodes.forEach((node) => {
    const path = `/${slugPrefix}/${slugifyTitle(
      node.category[0].name
    )}/${slugifyTitle(node.title.title)}`;
    createPage({
      path,
      component: articleTemplate,
      context: {
        node,
      },
    });
  });
};

function slugifyTitle(title) {
  return slugify(title, {
    lower: true,
  });
}
