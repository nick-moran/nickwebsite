const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const result = await graphql(`
  query{
    allContentfulProjectWriteup {
      nodes {
        title
        date
        logo{
            file{
                url
            }
        }
        childContentfulProjectWriteupWriteupRichTextNode {
            content {
                content {
                  value
                }
              }
        }
        linksToTheOutside {
          logo {
            file {
              url
            }
          }
          link
        }
        mediaLinks {
          
          photo {
            file {
              url
            }
          }
          videoLinks {
            medialink {
              videoLinks {
                link
              }
            }
          }
        }
      }
    }
  }`)
  result.data.allContentfulProjectWriteup.nodes.forEach((node) => {
    createPage({
      path: node.title,
      component: path.resolve(`./src/templates/writeupTest.js`),
      context: {
        slug: node.title,
      },
    })
  })
}