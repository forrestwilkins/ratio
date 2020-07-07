import React, { Component } from 'react';

import settingsIcon from '../images/settingsIcon.svg';
import styles from '../styles/HomePage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class HomePage extends Component {
  state = {
    activeControl: 'size'
  }

  setActiveControl = (control) => {
    this.setState({
      activeControl: control
    });
  };

  render() {
    const { activeControl } = this.state;
    return (
      <div className={styles.home}>
        <div className={styles.output}>
          <div style={{fontSize: '128px'}}>128</div>
          <div style={{fontSize: '64px'}}>64</div>
          <div style={{fontSize: '32px'}}>32</div>
          <div style={{fontSize: '16px'}}>16</div>
        </div>

        <div className={styles.mainControls}>
          <div className={styles.row}>
            <div className={styles.mathButton + ' ' + styles.hideForIphone8}>
              <div className={styles.buttonText}>+</div>
            </div>
            <div onClick={() => {this.setActiveControl('size')}} className={cx(styles.controlButton, {
              activeButton: activeControl === 'size'
            })}>
              <div className={styles.buttonText}>Size</div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.settingsButton + ' ' + styles.hideForIphone11 + ' ' + styles.showForIphone8}>
              <img className={styles.settingsIcon} src={settingsIcon} alt="Settings Icon"/>
            </div>
            <div className={styles.mathButton + ' ' + styles.hideForIphone8}>
              <div className={styles.buttonText}>-</div>
            </div>
            <div onClick={() => {this.setActiveControl('ratio')}} className={cx(styles.controlButton, {
              activeButton: activeControl === 'ratio'
            })}>
              <div className={styles.buttonText}>ratio</div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.mathButton + ' ' + styles.hideForIphone11 + ' ' + styles.showForIphone8}>
              <div className={styles.buttonText}>+</div>
            </div>
            <div onClick={() => {this.setActiveControl('lineHeight')}} className={cx(styles.controlButton, {
              activeButton: activeControl === 'lineHeight'
            })}>
              <div className={styles.lineHeightButtonText}>Line Height</div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.mathButton + ' ' + styles.hideForIphone11 + ' ' + styles.showForIphone8}>
              <div className={styles.buttonText}>-</div>
            </div>
            <div onClick={() => {this.setActiveControl('size')}} className={styles.controlButton}>
              <div className={styles.buttonText}>Reset</div>
            </div>
          </div>

          <div className={styles.row + ' ' + styles.hideForIphone8}>
            <div className={styles.settingsButton}>
              <img className={styles.settingsIcon} src={settingsIcon} alt="Settings Icon"/>
            </div>
          </div>
        </div>

        <div className={styles.logoButton}>
          ratio
        </div>
      </div>
    );
  }
}

export default HomePage;