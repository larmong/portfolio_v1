import styled from '@emotion/styled';
import { Default } from '@commons/styles/emotion';

export const TagWrapper = styled.div`
  position: relative;
  height: 20px;
`;
export const HoverTag = styled.div`
  transition: opacity 0.4s ease;
  opacity: 0;
  position: absolute;
  top: 36px;
  left: 0;
  background: #fff;
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
  color: ${Default.color};
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 11px solid #ffffff;
    border-left: 8px solid transparent;
    border-right: 10px solid transparent;
    pointer-events: none;
  }
`;
