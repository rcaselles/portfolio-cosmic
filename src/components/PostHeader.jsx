import DateContainer from './DateContainer/DateContainer'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import { ExternalLinkIcon } from '@/configs/icons'
import { FaClock } from 'react-icons/fa'

const PostHeader = ({ post }) => {
  return <>
    <PostTitle>{post.title}</PostTitle>
    <div className="flex items-center mb-8">
      <div className="flex items-center relative">
        <span className="ml-2 text-sm flex gap-2">
          <span>
            Roberto Caselles |{' '}
          </span>

          <DateContainer dateString={post.created_at} formatStyle="LLLL dd, yyyy" /> |{' '}
          <span className='flex items-center justify-center gap-2'>
            <FaClock />
            {(post.metadata.time_to_read)} to read
          </span>
        </span>
      </div>
    </div>
    {
      post?.metadata?.cover_image?.imgix_url &&
      <CoverImage
        title={post.title}
        url={post.metadata.cover_image.imgix_url}
      />
    }

    <div className="flex flex-row justify-between sm:items-center pb-8 border-b">
      <div className="sm:flex items-center gap-x-2">
        {post.metadata.live_url ? (
          <>
            <a
              href={post.metadata.live_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-accent hover:text-gray-500 text-sm md:ml-4 w-fit"
            >
              Live Site
              <span>
                <ExternalLinkIcon />
              </span>
            </a>

            <a
              href={post.metadata.repo_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-accent hover:text-gray-500 text-sm"
            >
              Github Repo
              <span>
                <ExternalLinkIcon />
              </span>
            </a>
          </>
        ) : undefined}
      </div>
    </div>
  </>;
}
export default PostHeader
