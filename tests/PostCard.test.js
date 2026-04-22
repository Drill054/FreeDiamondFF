import React from 'react';
import { render, screen } from '@testing-library/react';
import PostCard from '../src/components/PostCard';

describe('PostCard Component', () => {
  const mockPost = {
    id: 101,
    title: 'Test Judul',
    content: 'Ini adalah isi teks postingan yang panjang.',
    imageUrl: 'http://test-image.com/post1.jpg'
  };

  test('should render all required elements', () => {
    render(<PostCard {...mockPost} />);

    // Cek judul
    expect(screen.getByText(/Test Judul/i)).toBeInTheDocument();

    // Cek konten
    expect(screen.getByText(/Ini adalah isi teks postingan yang panjang\./i)).toBeInTheDocument();

    // Cek bahwa gambar sudah ter-render
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test Judul');
  });

  test('should handle missing image gracefully', () => {
    render(<PostCard {...mockPost} imageUrl="" />);

    // Pastikan alt tag tetap ada
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test Judul');
  });
});