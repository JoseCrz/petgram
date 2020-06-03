import { css, keyframes } from 'styled-components'

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
const popInKeyframes = keyframes`
  0% { 
    opacity: .5; transform: scale(0.2); 
  }

  100% { 
    opacity: 1; transform: scale(.8); 
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => (
  css`animation: ${time} ${fadeInKeyframes} ${type};`
)
export const popIn = ({ time = '1s', type = 'ease' } = {}) => (
  css`animation: ${time} ${popInKeyframes} ${type};`
)
