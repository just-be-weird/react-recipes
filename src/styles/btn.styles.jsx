import styled from "styled-components";

export const Button = styled.button`
  &.btn,
  .btn:disabled {
    border: none;
    width: 4rem;
    height: 4rem;
    background: #333;
    border-radius: 50%;
    color: #fff;
    transition: all 0.15s ease-in-out;
    transform: scale(1);
    cursor: pointer;
    &:hover {
      box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.3);
      transform: scale(1.01);
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  &.btn--ghost {
    background: transparent;
  }
`;
