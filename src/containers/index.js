/* eslint-disable no-unreachable */
import React from 'react';
import { Layout } from 'antd';
import Home from './Home';
import Live from './Live';

const Container = () => {
  return (
    <>
      <Content>
        <Home />
        <Live />
      </Content>
    </>
  );
};

export default Container;

const { Content } = Layout;
