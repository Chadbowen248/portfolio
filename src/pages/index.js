import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Chad Bowen. Welcome to my portfolio of thing's I'm excited about or learning</h1>
    <ul style={{
      listStyle: `none`
    }}>
      <li>
        <Link to="/projectFormikForm/" style={{textDecoration: `none`, color: `#e85452`, fontFamily: `sans-serif`, fontSize: `1.5rem`}}>Formik Form</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
