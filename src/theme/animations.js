import { css } from "styled-components";

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
