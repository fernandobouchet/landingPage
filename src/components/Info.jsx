import styled from 'styled-components';

const Info = () => {
  return (
    <InfoContainer>
      <InfoSubContainer>
        <StyledImg src="../assets/icons/user.png" alt="" />
        <div>
          <InfoNumber>90+</InfoNumber>
          <InfoName>Users</InfoName>
        </div>
      </InfoSubContainer>
      <InfoSubContainer>
        <StyledImg src="../assets/icons/location.png" alt="" />
        <div>
          <InfoNumber>30+</InfoNumber>
          <InfoName>Locations</InfoName>
        </div>
      </InfoSubContainer>
      <InfoSubContainer>
        <StyledImg src="../assets/icons/Server.png" alt="" />
        <div>
          <InfoNumber>50+</InfoNumber>
          <InfoName>Servers</InfoName>
        </div>
      </InfoSubContainer>
    </InfoContainer>
  );
};

export default Info;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1140px;
  height: 200px;
  margin: 60px 0;
  padding: 30px 0;
  background: #ffffff;
  border-radius: 10px;
`;

const InfoSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
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
