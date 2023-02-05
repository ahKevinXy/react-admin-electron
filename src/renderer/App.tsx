import React, { useEffect } from 'react';
import Layout from 'renderer/layouts';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useRoutes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import LayoutRouter from './routers/layout';
import router from './routers';
// 手写封装路由守卫
function BeforeRouterEnter() {
  /*
    后台管理系统两种经典的跳转情况：
    1、如果访问的是登录页面， 并且有token， 跳转到首页
    2、如果访问的不是登录页面，并且没有token， 跳转到登录页
    3、其余的都可以正常放行
  */
  const outlet = useRoutes(router);

  const location = useLocation();
  const token = localStorage.getItem('token');

  // 1、如果访问的是登录页面， 并且有token， 跳转到首页
  if (location.pathname === '/login' && token) {
    // 这里不能直接用 useNavigate 来实现跳转 ，因为需要BeforeRouterEnter是一个正常的JSX组件

    return outlet;
  }
  // 2、如果访问的不是登录页面，并且没有token， 跳转到登录页
  if (location.pathname !== '/login' && !token) {
    return outlet;
  }
  if (location.pathname !== '/login' && !token) {
    return <ToLogin />;
  }

  //  判断是否在主应用内如果是就注入,不是就累out

  return <Layout router={LayoutRouter} />;
}

export default function App() {
  useEffect(() => {
    // window.location.href = '/login';
  }, []);

  return (
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      {/* <Layout router={router} /> */}
      <BeforeRouterEnter />
    </React.StrictMode>
  );
}
