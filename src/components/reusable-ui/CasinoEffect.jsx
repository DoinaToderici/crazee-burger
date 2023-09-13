import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <CasinoEffectStyled>
      <TransitionGroup>
        <CSSTransition classNames={"count-animation"} timeout={300} key={count}>
          <span className={className}>{count}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectStyled>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  padding: 0 0 0 10px;

  span {
    display: inline-block;
    white-space: nowrap;
  }

  // MOUNTING
  .count-animation-enter {
    transform: translateY(100%);
  }

  .count-animation-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }

  // UNMOUNTING
  .count-animation-exit {
    transform: translateY(0%);
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .count-animation-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }
`;
