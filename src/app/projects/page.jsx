import { getAllPosts, getAllCategories, getPageBySlug } from '@/lib/cosmic'
import FilteredPosts from '@/components/FilteredPosts'

async function getData() {
  const [allPosts, allWorkCategories] = await Promise.all([
    getAllPosts('works') || [],
    getAllCategories('work-categories') || [],
  ])
  return {
    allPosts,
    allWorkCategories,
  }
}

export async function generateMetadata() {
  const [socialData, siteSettings] = await Promise.all([
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])

  const title = 'Projects | rcaselles | JavaScript, React, Node, Development'
  const description =
    'Projects about fullstack development with Javascript by rcaselles'
  const image = siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
  const url = `${siteSettings?.metadata?.site_url ?? ''}/works`
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

const WorksPage = async () => {
  const data = await getData()
  const allPosts = data.allPosts
  const allWorkCategories = data.allWorkCategories

  return (
    <>
      <h1 className="text-2xl md:text-3xl text-fore-primary font-bold mb-12">
        Projects
      </h1>
      {(!allPosts.length && <span>There are no projects</span>) || (
        <FilteredPosts
          posts={allPosts}
          categories={allWorkCategories}
          postType={'works'}
        />
      )}
    </>
  )
}

export default WorksPage
