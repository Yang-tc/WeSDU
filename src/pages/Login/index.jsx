import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import navigate from '@uni/navigate';
import login_pic from '../../../img/login_pic.svg';

import styles from './index.module.css';

export default function Login() {
  const submitLogin = () => {
    const user = document.getElementById('user').value;
    const pasw = document.getElementById('pasw').value;
    navigate.switchTab({
      url: '/pages/Home/index',
    });
  };
  return (
    <View className={styles.homeContainer}>
      <View className={styles.head}>
        <Text className={styles.title}>我的山大</Text>
        <img src={login_pic} className={styles.pic} />
      </View>
      <View className={styles.login}>
        <Text className={styles.login_text}>统一认证登录</Text>
        <TextInput id="user" className={styles.login_usr} placeholder="请输入学号" />
        <TextInput id="pasw" className={styles.login_pasw} placeholder="统一认证密码" password="true" />
        <button className={styles.login_button} type="default" plain="true" onClick={submitLogin}>登录</button>
      </View>
    </View>
  );
}
