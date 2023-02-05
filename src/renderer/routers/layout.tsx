import React, { lazy } from 'react';

import { Navigate } from 'react-router-dom';
import {
  // ChromeFilled,
  // CrownFilled,
  SmileFilled,
  // TabletFilled,
  HomeOutlined,
  CustomerServiceOutlined,
  // UsergroupAddOutlined,
  AccountBookOutlined,
  IdcardOutlined,
  UngroupOutlined,
  SettingOutlined,
  OrderedListOutlined,
  PayCircleOutlined,
  RocketOutlined,
} from '@ant-design/icons';

import Home from '../pages/Home';

const LayoutRouter = {
  path: '/',
  // component: <Hello />,
  routes: [
    {
      path: '/dashboard',
      component: <Home />,
      name: '首页',
      icon: <HomeOutlined />,
    },

    //
  ],
};
export default LayoutRouter;
