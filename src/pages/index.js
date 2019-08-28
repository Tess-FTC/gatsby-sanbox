import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      meta={[
        {
          name: "description",
          content: "This is the meta description for home page.",
        },
      ]}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby asdfasdf.</p>
    <p>Now go build something great.</p>
    <p>Hellowsdfasd</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
