import PropTypes from 'prop-types';

function Page({ children, cool }) {
  return (
    <div>
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}

export default Page;

Page.propTypes = {
  children: PropTypes.any,
  cool: PropTypes.string,
};
