import styled from 'styled-components';

const Network = () => {
  return (
    <NetworkContainer>
      <NetworkTitle>Huge Global Network of Fast VPN</NetworkTitle>
      <NetworkSubtitle>
        See LaslesVPN everywhere to make it easier for you when you move
        locations.
      </NetworkSubtitle>
      <MapImg src="../assets/img/world.png" alt="" />
      <img src="../assets/img/Sponsored.png" alt="" />
    </NetworkContainer>
  );
};

export default Network;

const NetworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  text-align: center;
`;

const MapImg = styled.img`
  width: 1060px;
  height: 537.77px;
`;

const NetworkTitle = styled.h2`
  width: 385px;
  height: 100px;
  font-weight: 500;
  font-size: 35px;
  line-height: 50px;
  color: #0b132a;
`;

const NetworkSubtitle = styled.h3`
  width: 555px;
  height: 60px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;
  margin-bottom: 120px;
`;
