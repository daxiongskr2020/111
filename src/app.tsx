//项目运行时的配置
import React from 'react';
import {history} from 'umi';
import {Button}  from 'antd'
import  style from '@/app.less'
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings; currentUser?:any };
// initialState: { settings?: LayoutSettings};
}): BasicLayoutProps => {
  return {
    rightContentRender: () => <div className={style.use_left}>
        当前用户名:大雄 <Button>退出</Button>
    </div>,
    footerRender: () => <div>底部区域</div>,
    onPageChange: () => {
    //   const { currentUser } = initialState;
    //   const { location } = history;
    //   // 如果没有登录，重定向到 login
    //   if (!currentUser && location.pathname !== '/user/login') {
    //     history.push('/user/login');
    //   }
    console.log(1); 
    
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};