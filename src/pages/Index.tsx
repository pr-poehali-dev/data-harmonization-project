import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "Run Club — это больше, чем беговой клуб. Это место, где каждый шаг имеет значение, а каждый финиш становится общей победой. Мы собираем людей, которые верят: бег меняет жизнь. Неважно, делаешь ли ты первые шаги или готовишься к ультрамарафону — здесь тебя встретят с теплом и поддержкой. Мы бежим вместе по утренним улицам, горным тропам и ночным паркам. Потому что дорога легче, когда рядом свои."

  const timelineEntries = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Бегунья в художественном размытии движения",
      title: "С первого шага — ты наш",
      description:
        "Не важно, пробегаешь ли ты свой первый километр или двадцатый марафон. В Run Club двери открыты для каждого. Мы верим: любая дистанция важна, любой темп достоин уважения. Просто зашнуруй кроссовки — мы подождём.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Бегун с решимостью и концентрацией",
      title: "Тренировки, которые работают",
      description:
        "Групповые пробежки, тренировочные планы и опытные пейсмейкеры — всё, что нужно для реального роста. Мы не просто бегаем вместе, мы помогаем друг другу становиться быстрее, выносливее и увереннее. Твой следующий личный рекорд уже близко.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Бегун в динамике, демонстрирующий силу и грацию",
      title: "Сообщество — наша сила",
      description:
        "Рассветные пробежки, посиделки после финиша, совместные старты на соревнованиях. В Run Club ты найдёшь не просто партнёров по тренировкам — ты найдёшь своих людей. Тех, с кем тяжело на трассе и легко за чашкой кофе.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">ДЛЯ ЧЕГО МЫ ЗДЕСЬ</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">ТВОЙ ПУТЬ — ТВОЯ ИСТОРИЯ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                В Run Club каждый находит своё. Вот как это выглядит на практике.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Говорят{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">УЧАСТНИКИ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Не верь нам на слово — послушай тех, кто уже бежит вместе с нами каждый день.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}