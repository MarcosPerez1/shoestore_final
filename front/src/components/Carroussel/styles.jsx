import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

export const Slide = styled.img`

transition: transform 0.3s ease;


&.slide-hidden {
  display: none;
}

&.slide-center {
  transform: scale(1.2);
}

&.slide-side {
  transform: scale(0.8); 
}

  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  margin-top:50px;
  width: 100%;
  height: 100%;
  // background: ${props => `url(${props.src}) no-repeat top center`};
`;

export const ArrowLeft = styled(BsArrowLeftCircleFill)`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  left: 1rem;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`;

export const ArrowRight = styled(BsArrowRightCircleFill)`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  right: 1rem;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`;

export const Indicators = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`;

export const Indicator = styled.button`
  background-color: ${({ active }) => (active ? "white" : "grey")};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;

