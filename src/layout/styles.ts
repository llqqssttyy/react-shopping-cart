import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 36px 24px 40px;
  margin-bottom: 64px;
  overflow-y: auto;
  min-height: calc(100vh - 128px);
`;

export const BottomWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 430px;
  z-index: 1000;
  background-color: white;
`;
