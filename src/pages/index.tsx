import Layout from '@layout';
import { colors } from '@utils/colors';
import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 60px;
  width: 100%;
`;

const LatestContainer = styled.ul`
  position: relative;
  margin-left: 30%;
  width: 100%;
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
  margin-top: -1px;
  padding: 10px 20px;
  height: 48px;
  width: 100%;
  transition: all 0.1s linear;
  border-top: 0.5px solid rgb(68, 68, 68);
  border-left: 0.5px solid rgb(68, 68, 68);
  border-bottom: 0.5px solid rgb(68, 68, 68);
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    z-index: 4;
    border-top: 0.5px solid rgb(255, 255, 255);
    border-left: 0.5px solid rgb(255, 255, 255);
    border-bottom: 0.5px solid rgb(255, 255, 255);
  }

  &:hover > ${Title} {
    color: rgb(255, 255, 255);
  }

  &:hover > ${DateTime} {
    color: rgb(255, 255, 255);
  }
`;

const LatestBlur = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 48px;
  z-index: 3;
  background: linear-gradient(transparent, transparent, ${colors.black}, ${colors.black});
`;

interface PostInfo {
  title: string;
  dateTime: string;
}

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const DUMMY_POSTS: PostInfo[] = Array(20);

  const DUMMY_POST: PostInfo = {
    title: 'POST',
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
        <LatestContainer>
          {handleRenderPosts()}
          <Latest>
            <Title>no more</Title>
          </Latest>
          <LatestBlur />
        </LatestContainer>
      </Container>
    </Layout>
  );
};

export default IndexPage;
