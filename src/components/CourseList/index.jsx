import { createElement } from 'rax';
import View from 'rax-view';
import styles from './index.module.css';

function CourseList() {
  const arr_color = ['#FC4956', '#59ADF8', '#FF4D7C', '#3CD38E', '#6F76F1', '#FCA315'];
  const getColor = () => {
    const index = Math.floor(Math.random() * 6);
    return arr_color[index];
  };
  const course = [
    {
      name: '物联网应用系统设计',
      time: '8:00-9:50',
      location: '未知',
    },
    {
      name: '物联网应用系统设计',
      time: '8:00-9:50',
      location: '未知',
    },
    {
      name: '物联网应用系统设计',
      time: '8:00-9:50',
      location: '未知',
    },
  ];
  return (
    <View className={styles.courseContainer}>
      {
        course.map((item, i) => {
          return (
            <View key={i + 1}>
              <View className={i === 0 ? styles.none : styles.top_line} />
              <View className={styles.course_detail}>
                <View className={styles.course_num} style={{ backgroundColor: getColor() }}>{i + 1}</View>
                <View className={styles.left}>
                  <View className={styles.course_name}>{item.name}</View>
                  <View className={styles.course_location}>{item.location}</View>
                </View>
                <View className={styles.right}>
                  <View className={styles.course_time}>{item.time}</View>
                </View>
              </View>
            </View>
          );
        })
      }
    </View>
  );
}

export default CourseList;
