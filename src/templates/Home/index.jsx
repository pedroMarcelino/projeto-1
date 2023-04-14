import { Component } from 'react';

import './styles.css';

import { loadPost } from '../../utils/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 2,
    searchValue: ''
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

  handleChange = (e) => {
    const { value } = e.target;
    // console.log(value)
    this.setState({ searchValue: value });

  }

  render() {
    const { posts, postPerPage, page, allPosts, searchValue } = this.state;
    const noMorePost = page + postPerPage > allPosts.length;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
      :
      posts;

    return (
      <section className='container'>

        <div className="search-conteiner">

          {!!searchValue && (
            <div>
              <h1>Procura : {searchValue}</h1> <br /> <br />
            </div>
          )}

          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        </div>


        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não tem post hoje :( </p>
        )}


        <div className="button-container">
          {!searchValue && (
            <Button
              text="Load More Post"
              onClick={this.loadMorePost}
              disabled={noMorePost}
            />
          )}

        </div>
      </section>
    );
  }
}
