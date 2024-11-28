import styles from './Siderbar.module.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigator = useNavigate();
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sideContent_1}>
          <div className={styles.side_header_logo}>
            <img
              className={styles.logo_image}
              src={'../../../public/img/e-office.png'}
              alt="로고 이미지"
            />
          </div>

          <ul className={styles.sidebar_menu}>
            <li
              onClick={() => navigator('')}
              className={styles.sidebar_menu_item}
            >
              회의실 등록
            </li>
            <li
              onClick={() => navigator('')}
              className={styles.sidebar_menu_item}
            >
              회의실 수정 / 삭제
            </li>
            <li
              onClick={() => navigator('')}
              className={styles.sidebar_menu_item}
            >
              회의실 예약
            </li>
            <li
              onClick={() => navigator('/createminutes')}
              className={styles.sidebar_menu_item}
            >
              회의록 작성
            </li>
          </ul>
        </div>

        <div className={styles.cellbar}></div>

        <div>
          <ul className={styles.sidebar_menu}>
            <li
              onClick={() => navigator('/profile')}
              className={styles.sidebar_menu_item}
            >
              프로필 수정
            </li>

            <li className={styles.sidebar_menu_item}>
              <div className={styles.side_footer_logo}>
                <img
                  className={styles.logo_image}
                  src={'../../../public/img/Group.png'}
                  alt="사이드바 아래 로고"
                />
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
