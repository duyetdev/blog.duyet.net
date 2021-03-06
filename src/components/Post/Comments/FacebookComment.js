import React from 'react';
import {
  FacebookProvider, Comments, CommentsCount, Initialize
} from 'react-facebook';
import styles from './FacebookComment.module.scss';

export default class ReactCommento extends React.PureComponent {
  state = { show: false };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.timeout = setTimeout(this.onScroll, 5000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    clearTimeout(this.timeout);
  }

  onScroll = () => {
    this.setState({ show: true });
    window.removeEventListener('scroll', this.onScroll);
  };

  render() {
    if (!this.state.show) {
      return <div style={{ paddingBottom: '100px' }} />;
    }

    const { fbCommentUrl } = this.props;
    if (fbCommentUrl === 'none') {
      return null;
    }

    const { url } = this.props;
    const { appId } = this.props.facebookComment;

    return (
      <FacebookProvider appId={appId}>
        <div className={styles['fbcomment-container']}>
          <div className={styles['fbcomment-container__message']}>Facebook Comment trên duyet.net sẽ ngưng hoạt động từ 2019-10, vui lòng sử dụng Commento bên dưới</div>
          {fbCommentUrl
            ? <Comments href={fbCommentUrl} numPosts={100} mobile={true} />
            : (
              <>
                <Comments href={url} numPosts={100} mobile={true} />
                <Comments href={url.replace('http://', 'https://')} numPosts={100} mobile={true} />
              </>
            )}
        </div>
      </FacebookProvider>
    );
  }
}