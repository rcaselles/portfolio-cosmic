import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const AboutMeSection = ({ bodyText }) => {
  return (
    <section className="mt-24">
      <h3 className="text-2xl font-bold mb-6">About Me</h3>
      <div
        className="text-fore-primary mb-8 space-y-4"
        dangerouslySetInnerHTML={{
          __html: bodyText,
        }}
      />
      <Link
        href="/about"
        className="font-bold flex items-center text-accent hover:underline hover:underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit"
      >
        <span className="mr-1">
          <FaArrowRight />
        </span>
        Learn more
      </Link>
    </section>
  )
}

export default AboutMeSection
