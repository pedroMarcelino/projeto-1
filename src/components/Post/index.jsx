import { PostCard } from './components/PostCard';

export const Post = ({ posts }) => (
  <div className="posts" >
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);