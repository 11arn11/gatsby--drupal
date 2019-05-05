import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({data}) => (

	<Layout>

		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

		<h1>Hi people</h1>

		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>

		<div style={{maxWidth : `300px`, marginBottom : `1.45rem`}}>
			<Image/>
		</div>

		<Link to="/page-2/">Go to page 2</Link>

		{data.allNodeProduct.edges.map(({ node }, i) => (
			<Link to={node.path.alias} className="link" >
				<div className="post-list">
					<h1>{node.title}</h1>
					<span>{node.created}</span>
					<p>{node.id}</p>
				</div>
			</Link>
		))}

	</Layout>

)

export const query = graphql`
	{
	  allNodeProduct {
	    edges {
	      node {
	        id
	        title
	        created
	        path {
	          alias
	        }
	      }
	    }
	  }
	}
`