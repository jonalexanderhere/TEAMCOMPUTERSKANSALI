import React from 'react'
import { Code2, Laptop, Smartphone, Palette } from 'lucide-react'

const Team: React.FC = () => {

  const departments = [
    {
      name: 'Technical Support',
      icon: Code2,
      members: 8,
      description: 'Memberikan dukungan teknis dan troubleshooting sistem',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Web Design',
      icon: Laptop,
      members: 10,
      description: 'Mendesain dan mengembangkan website yang menarik dan fungsional',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Design Grafis',
      icon: Palette,
      members: 9,
      description: 'Membuat desain visual untuk berbagai media dan kebutuhan',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Multi Media',
      icon: Smartphone,
      members: 8,
      description: 'Mengembangkan konten multimedia dan aplikasi interaktif',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  const angkatan16 = [
    'Raditya Wijaya',
    'Rahil Hidayat',
    'Helmi Yahya',
    'Regita Indah Cahyani',
    'Cahaya Dewi Andira',
    'Andini Putri',
    'Regita Maharani',
    'Amelia Diana',
    'Intan Nurjanah',
    'Raina Yulia Farani',
    'Ananda Dewi Susanti',
    'Desvia Chintya Putri',
    'Intan Andrea Putri',
    'Ervina Amelia',
    'Angel Asy Syita',
    'Fitri Dea Novela',
    'Wulan Safitri',
    'Hidayati',
    'Sofvie Ainurjanah',
    'Adzila Zahra Humairoh',
    'Silvia Zifa',
    'Zilfana Izzatul Lailiah',
    'Neysa'
  ]

  const angkatan17 = [
    'Ridho Fitrawan',
    'Ridho Julianto',
    'Bunga Rodatul Janah',
    'Delta Liya Pratama',
    'Anggi',
    'Tazkiyah Nurussyifa',
    'Farel Sapero',
    'Fadil Erlangga',
    'Rico Iqbal Jeritan',
    'Raisa Alenta',
    'Fitri Puspita Sari',
    'Teguh Anton Susanto'
  ]

  const angkatan18 = [
    'Sarina Oktapia',
    'Aprilia Intan Salsabila',
    'Desi Ana Indah Juita Sari',
    'Destina Riska Ayu',
    'Lisa Septiana',
    'Cut Salsabila Putri',
    'Tasya Ayu Putriana',
    'Andini Syafara',
    'Okta Puji Rahayu',
    'Jesica Anisa Fitri',
    'Lesti Julia Paresa',
    'Zazkia Melanie Maulidya',
    'Marik Aldiyan Pirnando',
    'Dewi Hafiza',
    'Daniel Alvino Akbar',
    'Rama Dani',
    'Lutfi Raditya Utama',
    'Napka Wira Anggara',
    'Lery Sazali',
    'M Zidan Alzimraan'
  ]

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Tim Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tim yang terdiri dari siswa-siswa berprestasi dengan berbagai keahlian 
            di bidang teknologi dan komputer.
          </p>
        </div>

        {/* Pembina */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full px-8 py-4">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">DK</span>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900">DIDIK KURNIAWAN, S.Kom., M.T.I.</h3>
              <p className="text-sm text-primary-600">Pembina Team Computer</p>
            </div>
          </div>
        </div>


        {/* Jurusan */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Jurusan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">{dept.name}</h4>
                <p className="text-gray-600 text-center">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Angkatan 16 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Angkatan 16 - {angkatan16.length} Anggota</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {angkatan16.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {member.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">{member}</h4>
                    <p className="text-xs text-primary-600">Angkatan 16</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Angkatan 17 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Angkatan 17 - {angkatan17.length} Anggota</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {angkatan17.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {member.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">{member}</h4>
                    <p className="text-xs text-secondary-600">Angkatan 17</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Angkatan 18 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Angkatan 18 - {angkatan18.length} Anggota</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {angkatan18.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {member.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">{member}</h4>
                    <p className="text-xs text-purple-600">Angkatan 18</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Total Anggota Team Computer</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">{angkatan16.length}</div>
              <div className="text-lg opacity-90">Angkatan 16</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{angkatan17.length}</div>
              <div className="text-lg opacity-90">Angkatan 17</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{angkatan18.length}</div>
              <div className="text-lg opacity-90">Angkatan 18</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{angkatan16.length + angkatan17.length + angkatan18.length}</div>
              <div className="text-lg opacity-90">Total Anggota</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Team
