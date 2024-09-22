import { cx as clacx, type CxOptions } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const cx = (...inputs: CxOptions) => {
  return twMerge(clacx(...inputs));
};

export default cx;
