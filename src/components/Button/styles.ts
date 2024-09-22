import { cva, type VariantProps } from 'class-variance-authority';

export const primaryButtonClasses =
  'bg-card-button text-white hover:bg-green-600';
export const secondaryButtonClasses =
  'bg-white border border-card-button text-card-button hover:bg-pageBackground hover:border-card-border hover:text-card-text';

export const disabledPrimaryClasses =
  'bg-card-border hover:bg-card-border  text-gray-500 cursor-not-allowed';

const buttonVariants = cva(
  'py-2 px-6 w-full max-w-[175px] font-semibold rounded transition-colors duration-200',
  {
    variants: {
      variant: {
        primary: primaryButtonClasses,
        secondary: secondaryButtonClasses,
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      disabled: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        disabled: true,
        className: disabledPrimaryClasses,
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'xs',
      disabled: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

const buttonStyles = (variants: ButtonVariants) => buttonVariants(variants);

export default buttonStyles;
