const lirik = {
  title: 'cara meminum ramune',
  lirik: `Kudengar dari seseorang
Kamu hari ini libur lagi
Aku jadi sangat khawatir
Apa boleh buat jika karena flu
Tapi sepertinya ada hal lain

Minggu lalu saat bertemu
Kamu tidak seperti yang biasanya
Caramu bercanda tertawa
Kelihatan memaksakan diri

Ramune tak bisa diminum sekaligus
Perlahan, ya minumlah dengan lebih perlahan
Sambil mendongak ke atas langit biru
Kelereng dalam botol pun jatuh
Istirahatlah, jika gelembung di hatimu terasa sesak
Tariklah satu napas dalam

Balasan darimu hanya sebaris
Di layar chatting tertulis
"Gak apa-apa" pesan darimu
Tapi waktu orang bilang "Gakpapa"
Sebenarnya tidak seperti itu

Jangan bilang ingin sok kuat
Itu sebabnya aku di sini sekarang
Kita berdua tak jatuh cinta, 'kan?
Ayo hadapi sisi burukmu

Orang dewasa sudah tidak meminum ramune
Pastilah bukan karena tidak suka
Pastilah hari-hari yang sibuk begitu lelah
Kelereng di botol pasti jadi terasa repot
Cara untuk hidup dengan nyaman adalah
Tidak memaksakan dirimu

Ramune tak bisa diminum sekaligus
Setengah, ya tidak apa sisakanlah setengah
Meski soda hilang dan jadi hangat
Waktu kelereng di dada membuat napas tercekak
Sekarang tidak perlu pikirkan apa pun
Beristirahatlah sejenak
`
}

const lyrics = () => {
  const lirik2 = lirik.lirik.replace(/(?:\r\n|\r|\n)/g, '<br />');
  
  return(
  <div className='px-7 pt-9 pb-7 rounded-xl bg-red-200 pe-16'>
    <h3 className='text-black font-poppins font-semibold capitalize tracking-wider text-xl mb-8'>{lirik.title}</h3>
    <p className='pe-8 text-lg font-poppins text-black font-medium' dangerouslySetInnerHTML={{ __html: lirik2 }}></p>
  </div>  
  )
}

export default lyrics