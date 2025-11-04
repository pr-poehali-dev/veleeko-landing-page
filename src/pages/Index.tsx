import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Droplets" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">ВелеЭко</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#cases" className="text-foreground hover:text-primary transition-colors">Кейсы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white">
            Получить консультацию
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="corner-accent inline-block p-8">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Технологии очистки воды
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-xl">
                Проектируем, производим и монтируем системы очистки воды для ЖКХ и промышленности с 2008 года
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8">
                  Узнать стоимость
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 flex items-center justify-center">
                <Icon name="Droplets" className="text-primary opacity-20" size={400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Наши решения</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Индивидуальный подход к каждой задаче</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Factory', title: 'Промышленная очистка', desc: 'Системы для производственных объектов' },
              { icon: 'Building2', title: 'Решения для ЖКХ', desc: 'Комплексная водоподготовка' },
              { icon: 'Wrench', title: 'Сервис и монтаж', desc: 'Установка и обслуживание' },
              { icon: 'FlaskConical', title: 'Анализ воды', desc: 'Лабораторные исследования' }
            ].map((service, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '17', label: 'лет опыта', icon: 'Award' },
              { number: '500+', label: 'объектов', icon: 'Building' },
              { number: '100%', label: 'гарантия', icon: 'ShieldCheck' },
              { number: '24/7', label: 'поддержка', icon: 'Headphones' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={stat.icon} className="text-primary" size={40} />
                </div>
                <div className="text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Наши проекты</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Реализованные решения</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Водоочистка ЖК "Новый город"', category: 'ЖКХ', icon: 'Building2' },
              { title: 'Промышленная станция "ПромТех"', category: 'Промышленность', icon: 'Factory' },
              { title: 'Система фильтрации "Эко-Завод"', category: 'Производство', icon: 'Wrench' }
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover-scale border-2 hover:border-primary/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name={project.icon} className="text-primary opacity-40" size={80} />
                </div>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-accent text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Сертификаты и партнёры</h2>
              <p className="text-xl mb-8 text-white/90">
                Мы работаем по всем стандартам качества и сотрудничаем с ведущими производителями оборудования
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['ISO 9001', 'ISO 14001', 'ГОСТ Р', 'Росстандарт'].map((cert, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Icon name="BadgeCheck" className="text-white mx-auto mb-2" size={32} />
                    <div className="font-semibold">{cert}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 flex items-center justify-center">
                <Icon name="Award" className="text-white opacity-20" size={300} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Получить консультацию</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Оставьте заявку, и мы свяжемся с вами в течение часа</p>
          <Card className="corner-accent p-8 border-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                  <Textarea
                    placeholder="Опишите вашу задачу"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-2 min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-accent text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Droplets" className="text-white" size={32} />
                <span className="text-2xl font-bold">ВелеЭко</span>
              </div>
              <p className="text-white/80">Технологии очистки воды с 2008 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Промышленная очистка</li>
                <li>Решения для ЖКХ</li>
                <li>Сервис и монтаж</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@veleeco.ru
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Icon name="Youtube" className="text-white/80 hover:text-white cursor-pointer transition-colors" size={24} />
                <Icon name="Linkedin" className="text-white/80 hover:text-white cursor-pointer transition-colors" size={24} />
                <Icon name="Mail" className="text-white/80 hover:text-white cursor-pointer transition-colors" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            © 2024 ВелеЭко. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
