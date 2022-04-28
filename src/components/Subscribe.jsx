import styled from 'styled-components';

const Subscribe = () => {
  return (
    <SubscribeContainer>
      <Container>
        <TextContainer>
          <SubscribeTitle>
            Subscribe Now for Get Special Features!
          </SubscribeTitle>
          <SubscribeSubTitle>
            Let's subscribe with us and find the fun.
          </SubscribeSubTitle>
        </TextContainer>
        <SubscribeButton>Subscribe Now</SubscribeButton>
      </Container>
    </SubscribeContainer>
  );
};

export default Subscribe;

const SubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1140px;
  height: 233px;
  justify-content: space-evenly;
`;

const TextContainer = styled.div`
  width: 370px;
`;
const SubscribeTitle = styled.h2`
  font-weight: 500;
  font-size: 35px;
  line-height: 45px;
  color: #0b132a;
`;

const SubscribeSubTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;
`;

const SubscribeButton = styled.button`
  width: 250px;
  height: 60px;
  border: none;
  background: #f53838;
  border-radius: 10px;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 25px 45px 5px rgba(245, 56, 56, 0.35);
  transition: 0.2s linear;

  &:hover {
    transform: scale(1.05);
  }
`;
