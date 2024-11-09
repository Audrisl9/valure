import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    // Kontainer utama halaman, dengan pengaturan padding horizontal dan tata letak responsif
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16">
      
      {/* Bagian Gambar */}
      <div className="w-full lg:w-1/2 relative lg:sticky top-20 h-max">
        {/* Komponen untuk menampilkan gambar produk */}
        <ProductImages />
      </div>
      
      {/* Bagian Teks */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        
        {/* Nama Produk */}
        <h1 className="text-4xl font-medium">Nama Produk</h1>
        
        {/* Deskripsi Produk */}
        <p className="text-gray-500">
          Produk elektronik berkualitas tinggi yang dapat memenuhi kebutuhan Anda sehari-hari.
          Dengan desain modern dan fitur-fitur canggih, produk ini dirancang untuk memberikan
          pengalaman terbaik bagi penggunanya.
        </p>
        
        {/* Garis pemisah atas */}
        <div className="h-[2px] bg-gray-100 mt-4 mb-2" />
        
        {/* Bagian Harga */}
        <div className="flex items-center gap-8">
          {/* Harga asli dengan coretan */}
          <h3 className="text-xl text-gray-500 line-through">Rp.750.000</h3>
          {/* Harga setelah diskon */}
          <h2 className="font-medium text-2xl">Rp.599.000</h2>
        </div>

        {/* Garis pemisah bawah */}
        <div className="h-[2px] bg-gray-100 mt-2 mb-4" />
        
        {/* Komponen Custom dan Add */}
        <CustomizeProduct />
        <Add />

        {/* Garis Pemisah */}
        <div className="h-[2px] bg-gray-100" />

        {/* Deskripsi Tambahan */}
        <div className="text-sm">
          <h4 className="font-medium mb-4">Spesifikasi Utama</h4>
          <p>
            - Layar Full HD dengan kualitas gambar tajam<br />
            - Baterai tahan lama hingga 12 jam penggunaan aktif<br />
            - Prosesor terbaru yang mendukung performa cepat dan lancar<br />
            - Tersedia berbagai pilihan warna yang menarik
          </p>
        </div>
        
        <div className="text-sm">
          <h4 className="font-medium mb-4">Keunggulan Produk</h4>
          <p>
            Produk ini menawarkan kualitas yang terjamin dengan harga yang terjangkau.
            Dilengkapi dengan teknologi terbaru untuk mendukung kebutuhan hiburan dan produktivitas Anda.
            Cocok untuk penggunaan pribadi maupun bisnis.
          </p>
        </div>
        
        <div className="text-sm">
          <h4 className="font-medium mb-4">Garansi dan Dukungan Pelanggan</h4>
          <p>
            Kami menyediakan garansi resmi selama 1 tahun dan layanan dukungan pelanggan 24/7. 
            Apabila Anda memiliki pertanyaan atau membutuhkan bantuan, tim kami siap membantu kapan saja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
