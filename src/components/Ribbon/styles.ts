import { cva, type VariantProps } from 'class-variance-authority';

export const topRightPosition =
  '-top-3 left-full transform -translate-x-3/4 rotate-[14deg]';
export const bottomCenterPosition =
  '-bottom-5 left-1/2 transform -translate-x-1/2 -rotate-6';
export const colorPrimary = 'bg-ribbon-background text-ribbon-text';

export const ribbonVariants = cva(
  'absolute text-sm font-bold px-4 py-1 font-inter border-ribbon-border border tracking-tight whitespace-nowrap',
  {
    variants: {
      color: {
        primary: colorPrimary,
      },
      position: {
        topRight: topRightPosition,
        bottomCenter: bottomCenterPosition,
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
