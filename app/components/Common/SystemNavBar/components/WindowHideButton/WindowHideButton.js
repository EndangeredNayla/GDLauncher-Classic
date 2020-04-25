// @flow
import React, { Component } from 'react';
import { remote } from 'electron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import styles from './WindowHideButton.scss';

type Props = {};
export default class WindowHideButton extends Component<Props> {
  props: Props;

  MinMaxWindow = () => {
    const w = remote.getCurrentWindow();
    w.minimize();
  };

  render() {
    return (
      <div>
        <button className={styles.CloseBtn} onClick={this.MinMaxWindow}>
          <FontAwesomeIcon
            icon={faWindowMinimize}
            style={{ width: '20px', height: '17px' }}
          />
        </button>
      </div>
    );
  }
}
