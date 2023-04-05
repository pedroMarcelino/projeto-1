import { Component } from 'react';

import './styles.css';

import { loadPost } from '../../utils/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 52
  };

  timeOutUpdate = null;

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await loadPost();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,

    });
  }

  loadMorePost = () => {
    const { page, postPerPage, allPosts, posts } = this.state;

    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  render() {
    const { posts, postPerPage, page, allPosts } = this.state;
    const noMorePost = page + postPerPage > allPosts.length;

    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className="button-container">
          <Button
            text="Load More Post"
            onClick={this.loadMorePost}
            disabled={noMorePost}
          />
        </div>
      </section>
    );
  }
}
