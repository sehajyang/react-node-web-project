import React from 'react';

import styles from './AlbumTitleList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const AlbumTitleItem = () => {
    return(
      <div className={cx('album-title')}>
        <Link to="/album/LY_A">LOVE YOURSELF 結 'Answer'</Link> <br />
        LOVE YOURSELF 轉 'Tear' <br />
        LOVE YOURSELF 承 'Her' <br />
        YOU NEVER WALK ALONE <br />
        WINGS <br />
        화양연화 Young Forever <br />
        화양연화 pt.2 <br />
        화양연화 pt.1 <br />
        DARK&WILD <br />
        SKOOL LUV AFFAIR SPECIAL ADDITION <br />
        SKOOL LUV AFFAIR <br />
        O!RUL8,2? <br />
        2 COOL 4 SKOOL <br />
      </div>
    )
}

const AlbumTitleList = () => (
  <div>
    <AlbumTitleItem/>
  </div>
);


export default AlbumTitleList;