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
      title={`WHAT'S NEW IN v${require('../../../package.json').version}`}
      style={{ height: '70vh', width: 540 }}
    >
      <div className={styles.container}>

        <h2 className={styles.hrTextYellow}>WARNING!</h2>
        <span className={styles.summary}>
          This update is <span style={{ color: '#f39c12' }}>unoffical</span>. Please do not report bug reports to the main Issue Tracker.
        </span>
        <div style={{ margin: 15 }} />
        <h2 className={styles.hrTextGreen}>SOME COOL NEW STUFF</h2>
        <div className={styles.subHrList}>
          <ul>
            <ChangelogRow
              main="Added Some Portable Builds"
              secondary=" For people who don't like installing"
            />
            <ChangelogRow
              main="Improved our Curse Exporter"
              secondary=" for people who make Curse Modpacks"
            />
            <ChangelogRow
              main="Removed our Discord RPC Support"
              secondary=" we are listening"
            />
          </ul>
        </div>
        <h2 className={styles.hdTextBlue}>WE LOVE YOU</h2>
        <span className={styles.summary}>
          We love our users, that's why we have a dedicated discord server just
          to talk with all of them :)
        </span>
        <br />
        <img
          src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg"
          className={styles.discordImg}
          onClick={openDiscord}
        />
      </div>
    </Modal >
  );
};
