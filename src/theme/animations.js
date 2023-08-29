import { css, keyframes } from "styled-components";

export const fadeInFromRight = keyframes`
from {
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
    z-index: -1;
}
to {
    opacity: 1;
    transform: translateX(0%);
}
`;

export const AdminPanelAnimation = css`
  .animation-admin-panel-appear {
    opacity: 0.1;
    transform: translateY(100%);

    &.animation-admin-panel-appear-active {
      opacity: 1;
      transform: translateY(0%);
      transition: 1s;
    }
  }
`;

export const BasketCardAnimation = css`
  .animation-enter,
  .animation-appear {
    .basket-product-animation {
      transition: 0.5s;
      transform: translateX(100px);
      opacity: 0%;
    }
  }

  .animation-enter-active,
  .animation-appear-active {
    .basket-product-animation {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-exit {
    .basket-product-animation {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 1;
    }
  }
  .animation-exit-active {
    .basket-product-animation {
      transition: 0.5s;
      transform: translateX(-100px);
      opacity: 0;
    }
  }
`;

export const menuCardAnimation = css`
  .animation-card-menu-enter {
    opacity: 0.01;
    transform: translateX(-125px);

    &.animation-card-menu-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all 300ms ease-out;
    }
  }

  .animation-card-menu-exit {
    opacity: 1;
    transform: translateX(0);

    &.animation-card-menu-exit-active {
      opacity: 0.01;
      transition: all 300ms ease-out;
    }
  }
`;
