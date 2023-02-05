import React, { lazy } from 'react';

import Login from 'renderer/pages/Login';

const router = [
  {
    path: '/login',
    element: <Login />,
    name: '登录',
  },
  {
    path: '/',
    element: <Login />,
    name: '登录',
  },
];
export default router;
