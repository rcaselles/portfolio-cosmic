import { getAllPosts, getPageBySlug } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import AboutMeSection from '@/sections/AboutMeSection'

async function getData() {
  const [allPosts, allWorks, pageData] = await Promise.all([
    getAllPosts('posts', 3) || [],
    getAllPosts('works', 3) || [],
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

  const title = pageData?.metadata?.meta_title ?? ''
  const description = pageData?.metadata?.meta_description ?? ''
  const image =
    pageData?.metadata?.meta_image?.imgix_url ??
    siteSettings?.metadata?.default_meta_image?.imgix_url ??
    ''
  const url = siteSettings?.metadata?.site_url ?? ''
  const twitterHandle = socialData?.metadata?.twitter ?? ''

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
  const pageData = data?.pageData ?? {}

  return (
    <>
      <IntroSection
        heading={pageData?.metadata.heading}
        subHeading={pageData?.metadata.sub_heading}
        socials={pageData?.metadata.socials}
      />
      <AboutMeSection bodyText={pageData?.metadata.about} />
    </>
  )
}
export default HomePage
