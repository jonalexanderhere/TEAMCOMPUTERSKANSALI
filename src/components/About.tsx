import React from 'react'
import { Target, Users, Lightbulb, Award, Code2, BookOpen, Laptop, Smartphone } from 'lucide-react'

const About: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: 'Programming',
      description: 'Mempelajari berbagai bahasa pemrograman modern seperti Python, JavaScript, dan Java'
    },
    {
      icon: Laptop,
      title: 'Web Development',
      description: 'Mengembangkan website dan aplikasi web dengan teknologi terdepan'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Membuat aplikasi mobile untuk Android dan iOS'
    },
    {
      icon: BookOpen,
      title: 'Digital Learning',
      description: 'Sistem pembelajaran digital yang interaktif dan efektif'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Visi',
      description: 'Menjadi ekstrakurikuler teknologi terdepan yang menghasilkan lulusan siap kerja di era digital'
    },
    {
      icon: Lightbulb,
      title: 'Misi',
      description: 'Mengembangkan skill teknologi siswa melalui pembelajaran praktis dan proyek nyata'
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description: 'Membangun budaya kerja sama tim yang solid dalam mengembangkan proyek teknologi'
    },
    {
      icon: Award,
      title: 'Prestasi',
      description: 'Mencapai prestasi terbaik dalam kompetisi teknologi tingkat regional dan nasional'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Tentang Team Computer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Team Computer adalah ekstrakurikuler teknologi di SMK Negeri 1 Liwa yang fokus 
            pada pengembangan skill komputer dan teknologi digital untuk mempersiapkan siswa 
            menghadapi tantangan era digital.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:bg-primary-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Visi, Misi & Nilai</h3>
            <p className="text-lg text-gray-600">
              Prinsip-prinsip yang menjadi landasan Team Computer dalam mengembangkan potensi siswa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* School Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">SMK Negeri 1 Liwa</h4>
              <p className="text-sm text-gray-600">Lampung Barat, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
