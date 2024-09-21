import React from 'react';
import ribbonStyles, { RibbonVariants } from './styles';
import cx from '../../utils/cx';

interface RibbonProps extends RibbonVariants {
  text?: string;
  className?: string;
}

const Ribbon: React.FC<RibbonProps> = ({
  color,
  position,
  text = 'FREE GIFT',
  className,
}) => {
  return (
    <div className={cx(ribbonStyles({ color, position }), className)}>
      {text}
    </div>
  );
};

export default Ribbon;
