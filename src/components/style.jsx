import styled from '@emotion/styled';

const Container = styled.div`
  //position: relative;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
`;

const SlideContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  position: absolute;
  z-index: 0;

  display: none;

  p {
    margin: 0;
    font-size: 45px;
    font-weight: bold;
    line-height: 1.35;
    letter-spacing: -1.5px;
    word-spacing: 1.5px;
    text-align: center;
  }

  &.enabled {
    display: block;
  }


  &.scdown {
    position: absolute;
    padding: 30px 0;
    width: 100%;
    height: 50px;
    text-align: center;
    bottom: 0px;
  }
`;

const styledComponent = {
    Container,
    Sticky,
    SlideContainer,
    Slide
}

export default styledComponent;

