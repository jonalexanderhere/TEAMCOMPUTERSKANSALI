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
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Team Computer
                <span className="block text-primary-600">SMK Negeri 1 Liwa</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ekstrakurikuler teknologi dan komputer yang membentuk generasi muda 
                yang siap menghadapi era digital dengan skill dan kreativitas terdepan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#about" className="btn-primary inline-flex items-center justify-center">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 w-4 h-4" />
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
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
