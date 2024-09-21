import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'py-2 px-6 w-full max-w-[175px] font-semibold rounded transition-colors duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-card-button text-white hover:bg-green-600',
        secondary: 'bg-white border border-card-button text-card-button hover:bg-pageBackground hover:border-card-border hover:text-card-text',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'xs',
    },
  }
);


export type ButtonVariants = VariantProps<typeof buttonVariants>;

const buttonStyles = (variants: ButtonVariants) => buttonVariants(variants);

export default buttonStyles;