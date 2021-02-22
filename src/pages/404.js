import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';

const NotFoundPage = ({ location }) => {
  return (
    <Layout title="Not Found" description="404 page" location={location}>
      <h1>Page not found</h1>
      <p>
        It seems you may be a little lost, feel free to <Link to="/">go home</Link>
      </p>
    </Layout>
  );
}

export default NotFoundPage
