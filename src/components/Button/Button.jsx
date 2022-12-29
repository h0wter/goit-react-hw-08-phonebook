import { PropTypes } from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({
  onClick = function () {},
  type,
  children,
  disabled,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};
