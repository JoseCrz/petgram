import styled, { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(6px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyframes} ${type};`

export const ImageWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
export const Image = styled.img`
  ${fadeIn({ time: '2.5s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 5px;
  }
`
