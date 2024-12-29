import PropTypes from "prop-types";



const Layout = ({ children }) => {
  return (
    <main className="!w-full !h-full overflow-x-hidden">
      {/* <ScrollToTop /> */}
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is a valid React node and is required
};

export default Layout;
