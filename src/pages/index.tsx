import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Snippet from '../components/snippet'

const IndexPage = () => {

  return (
    <Layout>

      <SEO title="Home" />

      <Snippet>
        Swizz Starter
      </Snippet>

    
    </Layout>
  )
}

export default IndexPage
