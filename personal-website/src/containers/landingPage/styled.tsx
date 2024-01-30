import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* transform: rotate(90deg); */
`;

export const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/assets/alum.jpg");
  object-fit: cover;
`;
