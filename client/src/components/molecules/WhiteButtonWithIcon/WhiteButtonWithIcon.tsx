import React from 'react';
import styled from 'styled-components';
import { Button, Text, Icon } from '@components/atoms';
import { color } from '@theme/index';

interface WhiteButtonWithIconProps {
  children: React.ReactChild;
  iconSrc: string;
  onClick: () => void;
}

const WhiteButtonWithIconWrap = styled.div<any>`
  display: flex;
  width: fit-content;
  p {
    margin-left: 0.3rem;
  }
`;

const WhiteButtonWithIcon: React.FC<WhiteButtonWithIconProps> = ({ children, iconSrc, onClick, ...props }) => {
  return (
    <WhiteButtonWithIconWrap>
      <Button
        onClick={onClick}
        backgroundColor={color.tertiary}
        borderColor={color.tertiary}
        fontColor={color.primary}
        hoverColor={color.hover_primary}
        {...props}>
        <Icon size="small" src={iconSrc} isHover={false} />
        <Text fontColor={color.primary} size="superSmall">
          {children}
        </Text>
      </Button>
    </WhiteButtonWithIconWrap>
  );
};

export { WhiteButtonWithIcon, WhiteButtonWithIconProps };