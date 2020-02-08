import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: ${props => !props.show && "scale(0)"};
  opacity: ${props => !props.show && "0"};
  box-sizing: border-box;
  transition: all .5s;
`;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    color: ${props => props.theme.syntax};
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 35px;
`;

function SubPage({show, title, children}) {
    return (
        <Wrapper show={show}>
            <Container>
                <Title>{title}</Title>
                {children}
            </Container>
        </Wrapper>
    );
}

export default SubPage;