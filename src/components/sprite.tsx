import React from 'react';

interface Props {
  name: string
  spriteSource?: string
  className?: string
  width?: number
  height?: number
}

export const Sprite: React.FC<Props> = ({ name, spriteSource, ...props }) => (
  <svg {...props}>
    <use href={`${spriteSource}#${name}`} />
  </svg>
);

Sprite.defaultProps = {
  spriteSource: '/sprites.svg',
};
