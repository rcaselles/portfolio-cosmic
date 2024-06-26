const { createBucketClient } = require('@cosmicjs/sdk')

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG,
  readKey: process.env.COSMIC_READ_KEY,
})

const is404 = error => /not found/i.test(error.message)

export async function getAllPosts(postType, postCount) {
  try {
    const data = await cosmic.objects
      .find({
        type: postType,
      })
      .props(
        'title,slug,metadata.category,metadata.excerpt,metadata.published_date,created_at,status'
      )
      .limit(postCount)
      .sort('-created_at')
      .status('published')
      .depth(1)
    return data?.objects ?? []
  } catch (error) {
    if (is404(error)) return
    return []
  }
}

export async function getPostAndMorePosts(slug) {
  try {
    const data = await cosmic.objects
      .findOne({
        slug: slug,
      })
      .props('slug,title,metadata,created_at,status')
      .status('published')

    const moreObjects = await cosmic.objects
      .find({
        type: 'posts',
      })
      .props('slug,title,metadata,created_at')
      .status('published')

    const morePosts = moreObjects.objects
      ?.filter(({ slug: object_slug }) => object_slug !== slug)
      .slice(0, 2)

    return {
      post: data?.object ?? [],
      morePosts,
    }
  } catch (error) {
    if (is404(error)) return []
  }
}

export async function getAllCategories(category) {
  try {
    const data = await cosmic.objects
      .find({
        type: category,
      })
      .props('title')
    return data.objects
  } catch (error) {
    if (is404(error)) return
    return []
  }
}

export async function getPageBySlug(slug, props) {
  try {
    const data = await cosmic.objects
      .findOne({
        slug: slug,
      })
      .props(props)
      .depth(1)
    return data.object
  } catch (error) {
    if (is404(error)) return
    return []
  }
}

export async function getSiteSettings() {
  try {
    const data = await cosmic.objects
      .findOne({
        type: 'site-settings',
        slug: 'site-settings',
      })
      .props('metadata')
    return data.object
  } catch (error) {
    if (is404(error)) return
    return []
  }
}
