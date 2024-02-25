import DateContainer from './DateContainer/DateContainer'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import { FaClock } from 'react-icons/fa'

const PostHeader = ({ post }) => {
  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <div className="flex items-center mb-8">
        <div className="flex items-center relative">
          <span className="ml-2 text-sm flex gap-2">
            <span>Roberto Caselles | </span>
            <DateContainer
              dateString={post.created_at}
              formatStyle="LLLL dd, yyyy"
            />{' '}
            |{' '}
            <span className="flex items-center justify-center gap-2">
              <FaClock />
              {post.metadata.time_to_read} to read
            </span>
          </span>
        </div>
      </div>
      {post?.metadata?.cover_image?.imgix_url && (
        <CoverImage
          title={post.title}
          url={post.metadata.cover_image.imgix_url}
        />
      )}
    </>
  )
}
export default PostHeader
