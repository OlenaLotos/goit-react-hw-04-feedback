import PropTypes from 'prop-types';
import { Reviews, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Reviews>
      <Title>{title}</Title>
      {children}
    </Reviews>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
