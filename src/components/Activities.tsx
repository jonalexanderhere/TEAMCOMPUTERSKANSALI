import React from 'react'
import { Trophy, Users, BookOpen, Calendar } from 'lucide-react'

const Activities: React.FC = () => {

  const achievements = [
    // 2025
    { year: '2025', title: 'Juara 1 LKS IT Network Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Technical Support' },
    { year: '2025', title: 'Juara 3 LKS Cyber Security Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Technical Support' },
    { year: '2025', title: 'Juara 1 LKS TKJT Kabupaten', competition: 'LKS SMK Kabupaten Lampung Barat', participants: 'Tim Technical Support' },
    { year: '2025', title: 'Juara 2 LKS Design Grafis Kabupaten', competition: 'LKS SMK Kabupaten Lampung Barat', participants: 'Tim Design Grafis' },
    
    // 2023
    { year: '2023', title: 'Juara 1 LKS TKJ Kabupaten', competition: 'LKS SMK Kabupaten Lampung Barat', participants: 'Tim Technical Support' },
    
    // 2020
    { year: '2020', title: 'Juara 1 Web Blog Provinsi', competition: 'Lomba Web Blog Provinsi', participants: 'Tim Web Design' },
    { year: '2020', title: 'Juara 3 Web Blog Provinsi', competition: 'Lomba Web Blog Provinsi', participants: 'Tim Web Design' },
    { year: '2020', title: 'Juara 1 Technical Support LKS SMK Kabupaten', competition: 'LKS SMK Kabupaten Lampung Barat', participants: 'Tim Technical Support' },
    
    // 2019
    { year: '2019', title: 'Juara 3 Design Grafis SMK Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Design Grafis' },
    { year: '2019', title: 'Juara 4 Web Desain PRJ UNILA VI Provinsi', competition: 'PRJ UNILA VI Provinsi', participants: 'Tim Web Design' },
    
    // 2017
    { year: '2017', title: 'Juara 2 Web Design LKS SMK Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Web Design' },
    { year: '2017', title: 'Juara 2 IT Software LKS SMK Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Technical Support' },
    { year: '2017', title: 'Juara 2 Design Grafis LKS SMK Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Design Grafis' },
    
    // 2016
    { year: '2016', title: 'Juara 1 Web Design LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Web Design' },
    { year: '2016', title: 'Juara 2 Design Grafis LKS SMK Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Design Grafis' },
    
    // 2015
    { year: '2015', title: 'Juara 1 Technical Support LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Technical Support' },
    { year: '2015', title: 'Juara 2 Web Design LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Web Design' },
    
    // 2014
    { year: '2014', title: 'Juara 1 Web Design LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Web Design' },
    { year: '2014', title: 'Juara 1 Technical Support LKS SMK Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Technical Support' },
    { year: '2014', title: 'Juara 2 Technical Support LKS SMK Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Technical Support' },
    
    // 2013
    { year: '2013', title: 'Juara 1 Web Design LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Web Design' },
    { year: '2013', title: 'Juara 2 Web Design LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Web Design' },
    { year: '2013', title: 'Juara 1 Technical Support LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Technical Support' },
    
    // 2012
    { year: '2012', title: 'Juara 5 Web Design LKS SMK Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Web Design' },
    { year: '2012', title: 'Juara 3 Technical Support LKS SMK Provinsi', competition: 'LKS SMK Provinsi Lampung', participants: 'Tim Technical Support' },
    { year: '2012', title: 'Juara 1 Web Design LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Web Design' },
    { year: '2012', title: 'Juara 1 Technical Support LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Technical Support' },
    
    // 2011
    { year: '2011', title: 'Juara 1 Web Design LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Web Design' },
    { year: '2011', title: 'Juara 1 Technical Support LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Technical Support' },
    
    // 2010
    { year: '2010', title: 'Juara 1 Web Design LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Web Design' },
    { year: '2010', title: 'Juara 1 Technical Support LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Technical Support' },
    
    // 2009
    { year: '2009', title: 'Juara 1 Web Design LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Web Design' },
    { year: '2009', title: 'Juara 1 Technical Support LKS SMK Lam-bar', competition: 'LKS SMK Lampung Barat', participants: 'Tim Technical Support' }
  ]

  const programs = [
    {
      icon: BookOpen,
      title: 'Programming',
      description: 'Mempelajari berbagai bahasa pemrograman modern seperti Python, JavaScript, dan Java'
    },
    {
      icon: Users,
      title: 'Web Development',
      description: 'Mengembangkan website dan aplikasi web dengan teknologi terdepan'
    },
    {
      icon: Trophy,
      title: 'Mobile Development',
      description: 'Membuat aplikasi mobile untuk Android dan iOS'
    },
    {
      icon: Calendar,
      title: 'Digital Learning',
      description: 'Sistem pembelajaran digital yang interaktif dan efektif'
    }
  ]

  return (
    <section id="activities" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kegiatan & Prestasi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai kegiatan pembelajaran dan prestasi yang telah dicapai Team Computer 
            dalam mengembangkan potensi teknologi siswa.
          </p>
        </div>


        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Prestasi Lengkap Team Computer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 leading-tight">{achievement.title}</h4>
                      <p className="text-xs text-gray-600">{achievement.competition}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary-600 bg-white px-2 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-700 text-xs">
                  <span className="font-medium">Tim:</span> {achievement.participants}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Prestasi Stats */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{achievements.length}</div>
                <div className="text-lg opacity-90">Total Prestasi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{achievements.filter(a => a.title.includes('Juara 1')).length}</div>
                <div className="text-lg opacity-90">Prestasi Juara 1</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{achievements.filter(a => a.competition.includes('Provinsi')).length}</div>
                <div className="text-lg opacity-90">Prestasi Provinsi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2009-2025</div>
                <div className="text-lg opacity-90">Konsistensi Prestasi</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg opacity-90 mb-4">
                Team Computer telah meraih {achievements.length} prestasi di bidang Technical Support, 
                Web Design, dan Design Grafis sejak tahun 2009 hingga sekarang.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">LKS Kabupaten</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">LKS Provinsi</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Web Blog</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">IT Network</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Cyber Security</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">PRJ UNILA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Program Unggulan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <program.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{program.title}</h4>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
