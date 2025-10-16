import React from 'react'
import { ArrowRight, Code2, Users, Trophy, BookOpen } from 'lucide-react'

const Hero: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Anggota Aktif', value: '50+' },
    { icon: Trophy, label: 'Prestasi', value: '25+' },
    { icon: BookOpen, label: 'Program', value: '10+' },
    { icon: Code2, label: 'Proyek', value: '100+' },
  ]

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Team Computer
                <span className="block text-primary-600">SMK Negeri 1 Liwa</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ekstrakurikuler teknologi dan komputer yang membentuk generasi muda 
                yang siap menghadapi era digital dengan skill dan kreativitas terdepan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about" className="btn-primary inline-flex items-center justify-center">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#activities" className="btn-secondary inline-flex items-center justify-center">
                Lihat Kegiatan
              </a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/images/logo.png" 
              alt="Team Computer Logo" 
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
