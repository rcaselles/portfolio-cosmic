import Socials from '@/components/Socials'

const IntroSection = ({ heading, subHeading, socials }) => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-start">
      <div className="flex-1 flex flex-col gap-y-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary relative w-[max-content] 
                      before:absolute before:inset-0 before:animate-typewriter
                      after:absolute after:inset-0 after:w-[0.125em] after:animate-caret">
          {heading || 'Developer Portfolio'}
        </h1>
        <h2 className="mb-4 max-w-lg">
          {subHeading || 'This portfolio is powered by Cosmic'}
        </h2>
        <Socials
          resume={socials?.metadata.resume?.url}
          email={socials?.metadata.email}
          github={socials?.metadata.github}
          linkedin={socials?.metadata.linkedin}
        />
      </div>

    </section>
  );
}

export default IntroSection
