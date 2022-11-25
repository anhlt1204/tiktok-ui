import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://avatars.githubusercontent.com/in/2141?s=64&v=4" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>Nguyen Van A</h4>
                <span className={cx('username')}>nguyenvana</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </div>
        </div>
    );
}

export default AccountItem;
