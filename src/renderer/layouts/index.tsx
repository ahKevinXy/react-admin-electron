import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProLayout,
  // SettingDrawer,
  ProCard,
  WaterMark,
} from '@ant-design/pro-components';
import { useState, useEffect } from 'react';
import { message } from 'antd';

import { useRoutes, useLocation, useNavigate } from 'react-router-dom';

import router from '../routers/index';
// 去往登录页的组件
function ToLogin() {
  const navigateTo = useNavigate();
  // 加载完这个组件之后实现跳转
  useEffect(() => {
    // 加载完组件之后执行这里的代码
    navigateTo('/login');
    message.warning('您还没有登录，请登录后再访问！');
  }, []);
  return <div />;
}
function Layout(props) {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
  });
  const [isLayout, setLayout] = useState();
  const [pathname, setPathname] = useState('/login');
  const [getPages, setGetPages] = useState();
  useEffect(() => {
    // 加载完组件之后执行这里的代码
    getComponets(pathname, props.router.routes);
  }, [pathname]);
  const getComponets = (path, routers) => {
    for (let i = 0; i < routers.length; i++) {
      if (routers[i].path === path) {
        setGetPages(routers[i].component);
        return;
      }
      if (routers[i].children && routers[i].children.length > 0) {
        getComponets(path, routers[i].children);
      }
    }
    // return <>这是默认页面</>;
  };

  return (
    <div
      id="layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={216}
        route={props.router}
        // {...defaultProps}
        location={{
          pathname,
        }}
        title="ReactAdminElectron"
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: 'ahKevinXy',
          size: 'small',
        }}
        // actionsRender={(props) => {
        //   if (props.isMobile) return [];
        //   return [
        //     <InfoCircleFilled key="InfoCircleFilled" />,
        //     <QuestionCircleFilled key="QuestionCircleFilled" />,
        //     <GithubFilled key="GithubFilled" />,
        //   ];
        // }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/login');
              // getComponets(item.path);
            }}
          >
            {dom}
          </div>
        )}
        // {...settings}
      >
        <PageContainer>
          <WaterMark content="ahKevinXy" fontSize={32}>
            <ProCard
              style={{
                // height: '100vh',
                minHeight: 400,
              }}
            >
              {getPages}
            </ProCard>
          </WaterMark>
        </PageContainer>
      </ProLayout>
    </div>
  );
}

export default Layout;
