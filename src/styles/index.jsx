import styled from "styled-components";

const AppContainer = styled.div`
  & {
    &.container {
      text-align: center;
      width: 100vw;
      height: 100vh;
      background: #1e272c;
      padding: 30vh 0 0;
      color: #fff;
      .music__ {
        &container {
          background: linear-gradient(120deg, #1db954, #1ed760);
          padding: 2.4rem;
          margin: 0 30vw;
          border-radius: 3px;
        }
        &track {
          &--list {
            margin: 1rem 1rem 3.2rem;
            max-width: 768px;
            display: grid;
            justify-content: center;
            color: #deffe8;
            font-size: 1.6rem;
            font-weight: 500;
            letter-spacing: 1px;
          }
          &--track {
            display: grid;
            grid-template-columns: 0.5fr 4fr;
            justify-items: flex-start;
            align-items: center;
            height: 2.2rem;
            .btn--ghost {
              width: 2.2rem;
              height: 2.2rem;
            }
          }
          &--title {
            margin-left: 1rem;
          }
          &--current {
            margin: 1rem auto;
            font-size: 1.6rem;
            font-weight: normal;
            color: #29292b;
          }
        }
        &controls {
          margin: 1.6rem 0 0;
          &--box {
            .btn {
              font-size: 1.8rem;
              line-height: 32px;
              &:not(:last-child) {
                margin-right: 0.5rem;
              }
              &:hover {
                transform: scale(1.01);
                background: #181818;
              }
              //&--play {
              //  &:hover {
              //    font-size: 3rem;
              //  }
              //}
            }
          }
        }
      }
    }
  }
`;

export default AppContainer;
