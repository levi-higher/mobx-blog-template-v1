import Layout from '@layout';
import { colors } from '@utils/colors';
import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  width: 100%;
`;

const LatestContainer = styled.ul`
  width: 60%;
`;

const Title = styled.p`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.795);
`;

const DateTime = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.678);
`;

const Latest = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 5px;
  padding: 10px 20px;
  height: 48px;
  width: 100%;
  transition: all 0.1s linear;
  cursor: pointer;
  backdrop-filter: blur(8px);

  &:first-child {
    margin-top: 0;
  }
`;

interface PostInfo {
  title: string;
  dateTime: string;
}

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const DUMMY_POSTS: PostInfo[] = Array(20);

  const DUMMY_POST: PostInfo = {
    title: 'WIP',
    dateTime: moment().format('YYYY-MM-DD'),
  };

  function handleRenderPosts() {
    _.fill(DUMMY_POSTS, DUMMY_POST);

    return _.map(DUMMY_POSTS, (post, index) => (
      <Latest key={`latest_${index}`}>
        <div>
          <Title>
            {post.title} {index + 1}
          </Title>
          <DateTime>{post.dateTime}</DateTime>
        </div>
      </Latest>
    ));
  }

  return (
    <Layout>
      <Container>
        <LatestContainer>{handleRenderPosts()}</LatestContainer>
      </Container>
    </Layout>
  );
};

export default IndexPage;
