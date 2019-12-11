import styled from "styled-components";

export const MobileViewContainer = styled.section`
  .ant-card {
    border-radius: 10px;
    box-shadow: 3px 3px 40px 0 rgba(13, 13, 13, 0.1);
    padding: 5px;
    margin: 5px;
  }
  .ant-card-body {
    padding: 5px 0px;
  }
  .ant-card-actions > li {
    margin: 0px;
  }
  .row1 {
    width: 100%;
    display: flex;
    .right {
      /* display: flex;
      flex-direction: column;
      align-items: center; */
      margin-left: 5px;
      line-height: 0.6;
    }
  }
  .row2 {
  }
  .img-container {
    width: 125px;
    overflow: hidden;
    position: relative;
    height: 125px;
    border-radius: 5px;
    box-shadow: 3px 3px 40px 0 rgba(13, 13, 13, 0.1);
    img {
      max-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
  .description {
    padding-top: 5px;
  }
`;
