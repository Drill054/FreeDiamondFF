/**
 * Fungsi untuk mensimulasikan pengambilan data postingan dari Channel WA.
 * Dalam implementasi nyata, fungsi ini akan memanggil API eksternal
 * atau endpoint backend Anda yang sudah terhubung ke WhatsApp.
 * @returns {Promise<Array<Object>>} Array postingan.
 */
export const fetchWhatsAppPosts = async () => {
  console.log("Fetching data from WhatsApp source...");

  // --- LOGIKA ASLI ANDA DIMASUKKAN DI SINI ---
  // Contoh: fetch('/api/whatsapp-data') jika Anda punya backend
  // Contoh lain: axios.get('https://api.thirdpartywa.com/posts')

  // DATA MOCK (Dummy Data)
  const mockData = [
    { id: 1, title: "Update Terbaru Hari Ini!", content: "Selamat pagi! Jangan lupa cek fitur baru kami yang keren banget. #Update #WA", imageUrl: "https://via.placeholder.com/800x400?text=Post+1" },
    { id: 2, title: "Tips Produktivitas", content: "Cara tercepat menguasai manajemen waktu ala profesional. Simak tips lengkapnya!", imageUrl: "https://via.placeholder.com/800x400?text=Post+2" },
    { id: 3, title: "Promo Spesial Bulan Ini", content: "Khusus bulan April 2026, dapatkan diskon 30% untuk semua layanan kami!", imageUrl: "https://via.placeholder.com/800x400?text=Post+3" },
  ];

  // Simulasi delay jaringan
  await new Promise(resolve => setTimeout(resolve, 800));

  return mockData;
};