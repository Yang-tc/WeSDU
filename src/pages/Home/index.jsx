import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './index.module.css';
import CourseList from '../../components/CourseList';

import home_pic from '../../../img/home_pic.svg';
import schedule_icon from '../../../img/schedule_icon.svg';
import test_icon from '../../../img/test_icon.svg';
import score_icon from '../../../img/score_icon.svg';
import opcourse_icon from '../../../img/opcourse_icon.svg';
import library_icon from '../../../img/library_icon.svg';
import card_icon from '../../../img/card_icon.svg';
import rublesson_icon from '../../../img/rublesson_icon.svg';
import empty_icon from '../../../img/empty_icon.svg';
import bus_icon from '../../../img/bus_icon.svg';
import phone_icon from '../../../img/phone_icon.svg';
import issues_icon from '../../../img/issues_icon.svg';

export default function Home() {
  return (
    <View className={styles.homeContainer}>
      <View className={styles.head}>
        <Text className={styles.title}>首页</Text>
        <img className={styles.home_pic} src={home_pic} />
      </View>
      <View className={styles.home}>
        <View className={styles.list}>
          <table className={styles.table}>
            <tr>
              <td>
                <img src={schedule_icon} className={styles.icon} />
                <Text className={styles.icon_title}>课程表</Text>
              </td>
              <td>
                <img src={test_icon} className={styles.icon} />
                <Text className={styles.icon_title}>考试安排</Text>
              </td>
              <td>
                <img src={score_icon} className={styles.icon} />
                <Text className={styles.icon_title}>成绩查询</Text>
              </td>
            </tr>
            <tr>
              <td>
                <img src={opcourse_icon} className={styles.icon} />
                <Text className={styles.icon_title}>选课啦</Text>
              </td>
              <td>
                <img src={library_icon} className={styles.icon} />
                <Text className={styles.icon_title}>图书馆</Text>
              </td>
              <td>
                <img src={card_icon} className={styles.icon} />
                <Text className={styles.icon_title}>一卡通</Text>
              </td>
              <td>
                <img src={rublesson_icon} className={styles.icon} />
                <Text className={styles.icon_title}>蹭课助手</Text>
              </td>
            </tr>
            <tr>
              <td>
                <img src={empty_icon} className={styles.icon} />
                <Text className={styles.icon_title}>空教室</Text>
              </td>
              <td>
                <img src={bus_icon} className={styles.icon} />
                <Text className={styles.icon_title}>校车查询</Text>
              </td>
              <td>
                <img src={phone_icon} className={styles.icon} />
                <Text className={styles.icon_title}>校内电话</Text>
              </td>
              <td>
                <img src={issues_icon} className={styles.icon} />
                <Text className={styles.icon_title}>意见反馈</Text>
              </td>
            </tr>
          </table>
        </View>
        <CourseList />
      </View>
    </View>
  );
}
