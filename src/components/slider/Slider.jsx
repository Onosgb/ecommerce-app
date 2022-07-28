import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  InforContainer,
  Image,
  Tittle,
  Desc,
  Button,
} from "./Slider.styles";

import { sliderItems } from "../../data/data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlide("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => (
          <Slide bg={item.bg} key={index}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InforContainer>
              <Tittle>{item.title}</Tittle>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InforContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlide("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
