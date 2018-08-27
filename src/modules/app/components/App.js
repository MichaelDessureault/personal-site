import React, { Component } from 'react';
import styles from '../styles/App.css';
import { WrapperContainer } from '../..';
import { navigationLinks } from '../../../helpers/navigation'
import { Link } from 'react-router-dom'


const TextBlock = (props) => {
  return (
    <div className={styles.textBlockContainer}>
      <h3 
        className={
          props.centerTitle 
          ? `${styles.center} ${styles.textBlockTitle}`
          : styles.textBlockTitle
        }
      >
        {props.title}
      </h3>

      <div 
        className={
          props.centerContent
          ? `${styles.center} ${styles.textBlockContent}`
          : styles.textBlockContent
        }  
      >
        {props.children}
      </div>
    </div>
  )
}


class App extends Component {

  render() {
    return (
      <div className={styles.App}>
        <div
          className={styles.elementContainer}
          style={{ 
            backgroundImage: `url("https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`
          }}
        >
          <WrapperContainer>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Michael's Personal Site
              </h1>
            </div>
          </WrapperContainer>
        </div>

        <div>
          <WrapperContainer>
            <div className={styles.berifAboutContainer}>
              <TextBlock
                title={"Berif about me"}
                centerTitle={false}
                centerContent={true}
              >
                <p> Do some bio stuff </p>
                <Link 
                  to={{ pathname: navigationLinks.about.link }} 
                  onClick={(e) => this.props.dispatchAboutStartPoint(true)}> 
                  Learn more 
                </Link>
              </TextBlock>
            </div>
          </WrapperContainer>
        </div>

        <div>
          <WrapperContainer>
            <div className={styles.berifAboutContainer}>
              <TextBlock
                title={"Berif about site"}
                centerTitle={false}
                centerContent={true}
              >
                <p> Do about site berif</p>
                <Link 
                  to={{ pathname: navigationLinks.about.link }}
                  onClick={(e) => this.props.dispatchAboutStartPoint(false)}> 
                  Learn more 
                </Link>
              </TextBlock>
            </div>
          </WrapperContainer>
        </div>
      </div>
    );
  }
}

export default App;
