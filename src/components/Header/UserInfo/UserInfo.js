import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LogoutModal from './LogoutModal/LogoutModal';
import './UserInfo.css';

const UserInfo = () => {
  const [hidden, setHidden] = useState(true);
  const user = useSelector(state => state.auth.userName);
  const disposeModal = () => setHidden(true);

  return (
    <>
      <div className="userinfo-container" onClick={() => setHidden(false)}>
        <p className="userinfo-p">{user}</p>
      </div>
      {!hidden ? <LogoutModal disposeModal={disposeModal} /> : null}
    </>
  );
};

export default UserInfo;
