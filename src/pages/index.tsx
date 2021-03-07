import styles from './index.less';
import {Button}  from  'antd'
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className='box'>全局样式</div>
      <Button  type='primary'>组件库antd</Button>
    </div>
  );
}
