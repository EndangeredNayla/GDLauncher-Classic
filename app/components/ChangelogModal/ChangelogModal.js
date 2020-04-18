import React, { useState, useEffect } from 'react';
import store from '../../localStore';
import styles from './ChangelogModal.scss';
import Modal from '../Common/Modal/Modal';
import ChangelogRow from './ChangelogRow';

export default props => {
  const [unMount, setUnMount] = useState(false);

  useEffect(() => {
    store.set('showChangelogs', false);
  }, []);

  const openDiscord = () => {
    require('electron').shell.openExternal('https://discord.gg/ZxRxPqn');
  };

  return (
    <Modal
      history={props.history}
      unMount={unMount}
      title={`GDLauncher Classic: ${require('../../../package.json').version} Changelog`}
      style={{ height: '70vh', width: 540 }}
    >
      <div className={styles.container}>

        <h2 className={styles.hrTextYellow}>GDLauncher Classic</h2>
        <span className={styles.summary}>
          Changelog
        </span>
        <div style={{ margin: 15 }} />
        <div className={styles.subHrList}>
          <ul>
            <ChangelogRow
              main="Fixed the Mojang Login from becoming Unauthenticated"
            />
            <ChangelogRow
              main="Fixed some issues relating to download Curse Modpacks"
            />
            <ChangelogRow
              main="Replaced the GDLauncher Color Scheme to match the Next Release"
            />
          </ul>
        </div>
      </div>
    </Modal >
  );
};
