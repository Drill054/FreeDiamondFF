import React from 'react';

/**
 * Komponen untuk menampilkan detail satu postingan dari WA.
 * @param {object} props
 * @param {number} props.id - ID postingan
 * @param {string} props.title - Judul postingan
 * @param {string} props.content - Isi teks postingan
 * @param {string} props.imageUrl - URL gambar pendukung
 */
const PostCard = ({ id, title, content, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition duration-300 hover:shadow-xl border border-gray-100">
      {/* Area Gambar */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/800x400?text=Image+Not+Available" }}
      />

      {/* Area Konten */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-indigo-700 mb-2">{title}</h2>
        <p className="text-gray-700 whitespace-pre-wrap mb-4">{content}</p>

        {/* Tombol Aksi Tambahan (Opsional) */}
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default PostCard;