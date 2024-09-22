import buttonStyles, { ButtonVariants } from './styles';
import cx from '../../utils/cx';

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    ButtonVariants {
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  text,
  onClick,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cx(buttonStyles({ variant, size, disabled }), className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
