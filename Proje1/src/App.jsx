import './App.css'
import 'bulma/css/bulma.css';
import Course from './Course'
import Angular  from './images/angular.jpg'
import Boostrap  from './images/bootstrap5.png'
import CSharp  from './images/ccsharp.png'
import KompleWeb  from './images/kompleweb.jpg'

function App() {

  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="
                Angular, modern web uygulamaları geliştirmek için kullanılan popüler bir açık kaynak JavaScript çerçevesidir. Google tarafından desteklenmektedir ve genellikle dinamik tek sayfa uygulamaları (SPA) oluşturmak için kullanılır. Angular, TypeScript programlama dili üzerine kurulmuştur, bu da daha temiz kod, hata yönetimi ve geliştirici araçları konusunda avantajlar sağlar."
              />
            </div>
            <div className="column">
              <Course
                image={Boostrap}
                title="Boostrap 5"
                description="
                Bootstrap, web geliştirme dünyasında en popüler ön uç (front-end) çerçevelerinden biridir. Twitter tarafından 2011 yılında başlatılan bu açık kaynaklı proje, geliştiricilerin duyarlı (responsive), mobil ilk (mobile-first) web siteleri tasarlamalarını kolaylaştırmak amacıyla tasarlanmıştır. Bootstrap, HTML, CSS ve JS bileşenlerinden oluşur ve web sitelerinin hızlı bir şekilde prototiplenmesine, inşa edilmesine ve özelleştirilmesine olanak tanır."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Komple Web"
                description="
                Web geliştirme, internet üzerinde çalışan uygulamaların ve sayfaların oluşturulması ve yönetilmesi sürecidir. Bu süreç, web tasarımı, web içeriği geliştirme, client-side/server-side scripting ve ağ güvenliği konfigürasyonu gibi geniş bir yelpazeyi kapsar. Komple web geliştirme, hem ön yüz (front-end) hem de arka yüz (back-end) geliştirmeyi içerir."
              />
            </div>
            <div className="column">
              <Course
                image={CSharp}
                title="Yazılımcı Olma Kursu"
                description="
                Yazılımcı Olma Kursu, teknolojiye meraklı bireylerin yazılım geliştirme dünyasına adım atmaları için tasarlanmış kapsamlı bir eğitim programıdır. Bu kurs, katılımcıları sıfırdan başlayarak temel programlama kavramları, algoritma mantığı, veri yapıları ve nesne yönelimli programlama gibi yazılım geliştirmenin temel taşlarıyla tanıştırır. Ardından, popüler programlama dilleri üzerinden uygulamalı örneklerle derinlemesine bir öğrenim süreci sunar."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App
