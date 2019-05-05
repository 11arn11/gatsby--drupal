const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === `node__product`) {

		createNodeField({
			node,
			name: `slug`,
			value: node.path.alias,
		})
	}

}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return graphql(`
	{
	  allNodeProduct {
	    edges {
	      node {
	        id
	        title
	        field_title {
	          value
	          format
	          processed
	        }
	        field_text {
	          value
	          format
	          processed
	        }
	        path {
	          alias
	        }
	      }
	    }
	  }
	}
  `).then(result => {
		result.data.allNodeProduct.edges.forEach(({ node }) => {
			createPage({
				path: node.path.alias,
				component: path.resolve(`./src/templates/product.js`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.path.alias,
				},
			})
		})
	})
}