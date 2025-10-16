import React from 'react'
import { Image } from 'lucide-react'

const Gallery: React.FC = () => {
  const documents = [
    { id: 1, title: 'Dokumentasi 1', image: '/images/doc 1.jpg' },
    { id: 2, title: 'Dokumentasi 2', image: '/images/doc 2.jpg' },
    { id: 3, title: 'Dokumentasi 3', image: '/images/doc 3.jpg' },
    { id: 4, title: 'Dokumentasi 4', image: '/images/doc 4.jpg' },
    { id: 5, title: 'Dokumentasi 5', image: '/images/doc 5.jpg' },
    { id: 6, title: 'Dokumentasi 6', image: '/images/doc 6.jpg' },
    { id: 7, title: 'Dokumentasi 7', image: '/images/doc 7.jpg' },
    { id: 8, title: 'Dokumentasi 8', image: '/images/doc 8.jpg' },
    { id: 9, title: 'Dokumentasi 9', image: '/images/doc 9.jpg' },
    { id: 10, title: 'Dokumentasi 10', image: '/images/doc 10.jpg' }
  ]

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Galeri & Dokumen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dokumentasi kegiatan dan dokumen penting Team Computer
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Foto Kegiatan Team Computer</h3>
          <div className="flex justify-center">
            <div className="relative group">
              <img 
                src="/images/angkatan 16.jpg" 
                alt="Team Computer Activities" 
                className="w-full max-w-4xl rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-full p-4">
                    <Image className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Dokumentasi Team Computer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={doc.image} 
                    alt={doc.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 text-center">{doc.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Galeri Team Computer</h3>
            <p className="text-lg mb-6 opacity-90">
              Dokumentasi lengkap kegiatan dan prestasi Team Computer
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Image className="w-4 h-4" />
                <span>Foto Kegiatan</span>
              </div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Image className="w-4 h-4" />
                <span>Dokumentasi Lengkap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
