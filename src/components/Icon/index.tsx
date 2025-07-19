import type { FC } from 'react';

interface IconProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon: FC<IconProps> = ({ src, alt = "icon", width = 24, height = 24, className }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
      style={{ display: 'block' }}
    />
  );
};

export default Icon; 