// @flow
import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { PACKS_PATH, THEMES } from '../../constants';
import styles from './Home.scss';
import News from './components/News/News';
import Card from '../Common/Card/Card';

// @ts-ignore
type Props = {};

export default // @ts-ignore
class Home extends Component<Props> {
  // @ts-ignore
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      latestBtnClicked: false,
      latestInstalled: false
    };
  }
  /* eslint-disable */
  openLink(url) {
    require('electron').shell.openExternal(url);
  }

  componentDidMount = async () => {
    // Downloads the versions list just the first time
    if (this.props.versionsManifest.length === 0) {
      this.props.getVanillaMCVersions();
    }
    if (this.props.latestMCVersions.release) {
      try {
        await promisify(fs.access)(path.join(PACKS_PATH, this.props.latestMCVersions.release));
        this.setState({ latestInstalled: true });
      } catch (e) {
        this.setState({ latestInstalled: false });
      }
    }
  };

  /* eslint-enable */

  render() {
    return (
      <div>
        <main className={styles.content}>
          <div className={styles.innerContent}>
            <News news={this.props.news} />
          </div>
        </main>
      </div>
    );
  }
}
