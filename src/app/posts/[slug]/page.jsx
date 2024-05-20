import PostBody from '@/components/Post/PostBody'
import PostHeader from '@/components/Post/PostHeader'
import { getPostAndMorePosts, getPageBySlug } from '@/lib/cosmic'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const [getData, socialData, siteSettings] = await Promise.all([
    getPostAndMorePosts(params.slug),
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])

  const currentPage = 'posts'

<<<<<<< Updated upstream
  const title = getData?.post?.title ?? ''
  const description = getData?.post?.metadata?.excerpt ?? ''
  const image =
    getData?.post?.metadata?.cover_image?.imgix_url ??
    siteSettings?.metadata?.default_meta_image?.imgix_url ??
    ''
  const url = `${siteSettings?.metadata?.site_url ?? ''}/${currentPage ?? ''}/${
    params?.slug ?? ''
  }`
  const twitterHandle = socialData?.metadata?.twitter ?? ''
=======
  const title = (getData?.post?.title) ?? ""
  const description = (getData?.post?.metadata?.excerpt) ?? ""
  const image = (
    getData?.post?.metadata?.cover_image?.imgix_url ?? 
    siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
  )
  const url = (
    `${siteSettings?.metadata.site_url ?? ""}/${currentPage}/${params.slug ?? ""}`
  )
  const twitterHandle = (socialData?.metadata?.twitter) ?? ""
>>>>>>> Stashed changes

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

const SinglePost = async ({ params }) => {
<<<<<<< Updated upstream
  const getData = await getPostAndMorePosts(params.slug, false)
=======
  const getData = await getPostAndMorePosts(params.slug)
>>>>>>> Stashed changes

  if (!getData) {
    return notFound()
  }

  const post = getData.post

  return (
    <>
      <article className="border-b border-back-subtle py-8 mb-8">
        <PostHeader post={post} />
        <PostBody content={post.metadata.content} />
      </article>
    </>
  )
}
export default SinglePost
