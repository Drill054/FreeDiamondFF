import React from 'react';
import PostCard from './PostCard';

/**
 * Komponen utama yang menampilkan daftar (feed) dari postingan WA.
 * @param {Array<Object>} posts - Daftar semua postingan.
 */
const PostFeed = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center p-10 bg-gray-50 rounded-lg shadow-inner">
        <p className="text-xl text-gray-500">Belum ada postingan dari Channel WA. Silakan cek konfigurasi!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default PostFeed;