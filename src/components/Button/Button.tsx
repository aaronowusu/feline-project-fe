import buttonStyles, { ButtonVariants } from './styles';
import cx from '../../utils/cx';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  text,
  className,
  ...props
}) => {
  return (
    <button
      className={cx(buttonStyles({ variant, size }), className)}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
