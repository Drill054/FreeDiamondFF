'use client'; // Penting karena kita menggunakan hooks (useState/useEffect)

import React, { useState, useEffect } from 'react';
import { fetchWhatsAppPosts } from '@/lib/api';
import PostFeed from '@/components/PostFeed';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchWhatsAppPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        console.error("Gagal memuat postingan:", err);
        setError("Gagal terhubung ke sumber data WA. Coba cek API Key atau koneksi.");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-10">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">
          📰 WA Channel Display
        </h1>
        <p className="text-xl text-indigo-600 mt-3">
          Visualisasi Postingan Langsung dari WhatsApp
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        {isLoading && (
          <div className="text-center py-20">
            <div className="animate-spin inline-block w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full mb-4"></div>
            <p className="text-lg text-indigo-600">Memuat postingan WA...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8" role="alert">
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {!isLoading && posts.length > 0 && (
          <PostFeed posts={posts} />
        )}

        {!isLoading && posts.length === 0 && !error && (
             <div className="text-center py-20 bg-white rounded-lg shadow-lg">
                <p className="text-2xl text-gray-500">Tidak ada konten untuk ditampilkan saat ini.</p>
            </div>
        )}
      </main>
    </div>
  );
}