import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="avatar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Lê Minh Tiến</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
            </div>
        </div>
    );
}

export default AccountItem;
