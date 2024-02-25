import Socials from '@/components/Socials'

const IntroSection = ({ heading, subHeading, socials }) => {
  return (
    <section className="w-full text-center items-center justify-center flex flex-col-reverse md:flex-row">
      <div className="flex-1 flex flex-col gap-y-4 text-center items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary relative ">
          {heading || 'Developer Portfolio'}
        </h1>
        <h2 className="mb-4 max-w-lg">{subHeading || ''}</h2>
        <Socials
          email={socials?.metadata?.email}
          github={socials?.metadata?.github}
          linkedin={socials?.metadata?.linkedin}
          newsletter={socials?.metadata?.newsletter}
        />
      </div>
    </section>
  )
}

export default IntroSection
