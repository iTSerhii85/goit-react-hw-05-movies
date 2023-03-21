import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styles';

export const Loader = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="2"
        width="150"
        visible={true}
      />
    </Wrapper>
  );
};
