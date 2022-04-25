import styled from 'styled-components';

const Info = () => {
  return (
    <InfoContainer>
      <Container>
        <InfoSubContainer>
          <StyledImg src="../assets/icons/user.png" alt="" />
          <Separator>
            <InfoNumber>90+</InfoNumber>
            <InfoName>Users</InfoName>
          </Separator>
        </InfoSubContainer>
        <InfoSubContainer>
          <StyledImg src="../assets/icons/location.png" alt="" />
          <Separator>
            <InfoNumber>30+</InfoNumber>
            <InfoName>Locations</InfoName>
          </Separator>
        </InfoSubContainer>
        <InfoSubContainer>
          <StyledImg src="../assets/icons/Server.png" alt="" />
          <Separator>
            <InfoNumber>50+</InfoNumber>
            <InfoName>Servers</InfoName>
          </Separator>
        </InfoSubContainer>
      </Container>
    </InfoContainer>
  );
};

export default Info;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
  padding: 30px 0;
  background: #ffffff;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 200px;
  gap: 100px;
  border-radius: 10px;
  box-shadow: 0 40px 60px -50px rgba(245, 56, 56, 0.35); ;
`;
const InfoSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 55px;
  height: 55px;
`;

const InfoNumber = styled.h2`
  width: 49px;
  height: 30px;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #0b132a;
`;

const InfoName = styled.h3`
  width: 91px;
  height: 30px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #4f5665;
`;

const Separator = styled.div`
  padding: 0 40px;
`;
