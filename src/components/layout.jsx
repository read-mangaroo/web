import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
