import {graphql, Link} from "gatsby"
import React from "react"

const ProductTemplate = ({data}) => (

	<div>

		<Link to="/">Go back to the homepage</Link>

		<h1 dangerouslySetInnerHTML={{ __html: data.nodeProduct.field_title.value }} />

		<div dangerouslySetInnerHTML={{ __html: data.nodeProduct.field_text.value }} />

	</div>

)

export default ProductTemplate

export const query = graphql`
	query($slug: String!) {
		nodeProduct(fields: { slug: { eq: $slug } }) {
			title
			field_title{value}
			field_text{value}
		}
	}
`

/*
export const query = graphql`
query($slug: String!) {
nodeProduct(fields: { slug: { eq: $slug } }) {
title
preparationTime
difficulty
totalTime
ingredients
instructions
relationships {
category {
name
}
image {
relationships {
imageFile {
localFile {
childImageSharp {
fluid(maxWidth: 470, maxHeight: 353) {
...GatsbyImageSharpFluid
}
}
}
}
}
}
}
}
}
`
*/