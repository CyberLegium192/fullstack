export const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('-').map(Number);
      const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      const monthName = monthNames[month - 1]; // Mengambil nama bulan berdasarkan nomor bulan
    
      return `${day} ${monthName} ${year}`;
}