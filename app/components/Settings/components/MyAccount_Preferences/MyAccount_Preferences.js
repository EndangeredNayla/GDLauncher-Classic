import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';
import { ipcRenderer } from 'electron';
import store from '../../../../localStore';
import CIcon from '../../../Common/Icon/Icon';
import CopyIcon from '../../../Common/CopyIcon/CopyIcon';
import styles from './MyAccount_Preferences.scss';
import SettingCard from '../SettingCard/SettingCard';
import Title from '../Title/Title';
import SwitchSetting from '../SwitchSetting/SwitchSetting';
import * as SettingsActions from '../../../../actions/settings';
import SelectSetting from '../SelectSetting/SelectSetting';

const MyAccount = props => {
  const initialChannel =
    store.get('settings') &&
      (store.get('settings').releaseChannel === 'latest' ||
        store.get('settings').releaseChannel === 'beta')
      ? store.get('settings').releaseChannel
      : 'latest';

  const [channel, setChannel] = useState(
    initialChannel === 'latest' ? 'Stable' : 'Beta'
  );
  const { t } = useTranslation();

  return (
    <div>
      <Title>{t('MyAccount', 'My Account')}</Title>
      <div className={styles.accountInfo}>
        <div>
          <CIcon size={70}>{props.username.charAt(0).toUpperCase()}</CIcon>
        </div>
        <div>
          <span>{t('Username', 'Username')}</span>
          <span className={styles.info}>{props.username}</span>{' '}
          <CopyIcon text={props.username} />
          <div className={styles.divider} />
          <span>{t('Email', 'Email')}</span>
          <span className={styles.info}>{props.email}</span>{' '}
          <CopyIcon text={props.email} />
        </div>
      </div>
      <Title>{t('Preferences', 'Preferences')}</Title>
      <SettingCard>
        <SwitchSetting
          mainText={t('EnableSoundsTitle', 'Enable Sounds')}
          description={t('EnableSoundsDescription', 'Enable sounds to be played when specific actions are triggered')}
          icon="sound"
          checked={props.settings.sounds}
          onChange={props.setSounds}
        />
      </SettingCard>
    </div>
  );
};


function dashUuid(UUID) {
  // UUID is segmented into: 8 - 4 - 4 - 4 - 12
  // Then dashes are added between.

  // eslint-disable-next-line
  return (
    `${
      UUID.substring(0, 8)}-${
      UUID.substring(8, 12)}-${
      UUID.substring(12, 16)}-${
      UUID.substring(16, 20)}-${
      UUID.substring(20, 32)}`
  );

}

function mapStateToProps(state) {
  return {
    username: state.auth.displayName,
    email: state.auth.email,
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingsActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
