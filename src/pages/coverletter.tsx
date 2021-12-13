import Layout from '@layout';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

interface CoverLetterPageProps {}

const CoverLetterPage: React.FC<CoverLetterPageProps> = () => {
  return (
    <Layout>
      <Container>123</Container>
    </Layout>
  );
};

export default CoverLetterPage;
