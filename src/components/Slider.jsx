import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: coral;
  position: relative;
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  cursor: pointer;
`;

const Wrapper=styled.div`
display: flex;
width: 100vw;
`;
const ImgContainer=styled.div`
flex:1
`;
const InfoContainer=styled.div`
flex: 1;
`;
const Slider = () => {
  return (
    <Container>
      <Arrow direction={"left"}>
        <ArrowLeftOutlined />
      </Arrow>
    <Wrapper>
        <ImgContainer>
        </ImgContainer>
        <InfoContainer>

        </InfoContainer>
    </Wrapper>
      <Arrow direction={"right"}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
