import { cva, VariantProps } from 'class-variance-authority';

export const ribbonVariants = cva(
  'absolute text-sm font-bold px-4 py-1 font-inter border-ribbon-border border tracking-tight whitespace-nowrap', 
  {
    variants: {
      color: {
        primary: 'bg-ribbon-background text-ribbon-text',
      },
      position: {
        topRight: '-top-3 left-full transform -translate-x-3/4 rotate-[14deg]', 
        bottomCenter: '-bottom-5 left-1/2 transform -translate-x-1/2 -rotate-6',
      },
    },
    defaultVariants: {
      color: 'primary',
      position: 'topRight',
    },
  }
);

export type RibbonVariants = VariantProps<typeof ribbonVariants>;

const ribbonStyles = (variants: RibbonVariants) => ribbonVariants(variants);

export default ribbonStyles;
