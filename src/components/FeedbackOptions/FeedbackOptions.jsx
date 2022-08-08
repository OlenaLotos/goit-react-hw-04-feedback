import PropTypes from 'prop-types';
import { Button, BtnWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <Button type="button" key={option} onClick={() => onBtnClick(option)}>
            {option}
          </Button>
        );
      })}
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
