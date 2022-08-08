import PropTypes from 'prop-types';
import { TextTitle } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <TextTitle>Good : {good}</TextTitle>
      <TextTitle>Neutral : {neutral}</TextTitle>
      <TextTitle>Bad : {bad}</TextTitle>

      <TextTitle>Total : {total}</TextTitle>
      <TextTitle>Positive feedback : {positivePercentage} %</TextTitle>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
