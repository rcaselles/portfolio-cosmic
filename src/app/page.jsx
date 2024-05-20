import Socials from '@/components/Socials'
import { getAllPosts, getPageBySlug } from '@/lib/cosmic'
import Link from "next/link"

async function getData() {

  const [allPosts, allWorks, pageData] = await Promise.all([
    getAllPosts( 'posts', 3) || [],
    getAllPosts( 'works', 3) || [],
    getPageBySlug('home-page', 'metadata'),
  ])
  return {
    allPosts,
    allWorks,
    pageData,
  }
}

export async function generateMetadata() {
  const [pageData, socialData, siteSettings] = await Promise.all([
    getPageBySlug('home-page', 'metadata'),
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])

  const title = (pageData?.metadata?.meta_title) ?? ""
  const description = (pageData?.metadata?.meta_description) ?? ""
  const image = (
    pageData?.metadata?.meta_image?.imgix_url ??
    siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
  )
  const url = (siteSettings?.metadata?.site_url) ?? ""
  const twitterHandle = (socialData?.metadata?.twitter) ?? ""

  return {
    title: title,
    description: description,
    image: image,
    openGraph: {
      title: title,
      description: description,
      url: url,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
        {
          url: image,
          width: 1800,
          height: 1600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: twitterHandle,
      images: [image],
    },
  }
}

const HomePage = async () => {
  const data = await getData()
  const pageData = data.pageData
  const socials = pageData?.metadata.socials
  return (
    <>

      <section className="w-full text-center items-center justify-center flex flex-col-reverse md:flex-row">
        <div className="flex-1 flex flex-col gap-y-4 text-center items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary relative w-[max-content] 
                      before:absolute before:inset-0 before:animate-typewriter
                      after:absolute after:inset-0 after:w-[0.125em] after:animate-caret"
          >
            {pageData?.metadata.heading || 'Developer Portfolio'}
          </h1>
          <h2 className="mb-4 max-w-lg">
            {pageData?.metadata.sub_heading || ''}
          </h2>
          <Socials
            email={socials?.metadata.email}
            github={socials?.metadata.github}
            linkedin={socials?.metadata.linkedin}
            newsletter={socials?.metadata.newsletter}
          />
        </div>
      </section>
      <section className="mt-24">
        <h3 className="text-2xl md:text-3xl text-fore-primary font-bold mb-6">
          About Me
        </h3>
        <div
          className="text-fore-primary mb-8 space-y-4"
          dangerouslySetInnerHTML={{
            __html: (pageData?.metadata.about),
          }}
        />
        <Link
          href="/about"
          className="flex items-center text-accent underline underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit"
        >
          Learn more
        </Link>
      </section>
    </>
  )
}
export const dynamic = 'force-dynamic'
export default HomePage
