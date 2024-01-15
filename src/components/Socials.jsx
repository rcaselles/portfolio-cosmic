import { EmailIcon, GithubIcon, LinkedinIcon, PaperIcon } from '@/configs/icons'
import { Button } from './Button'

const Socials = ({ resume, email, github, linkedin, newsletter }) => {
  return (
    <div className="flex items-center">
      {resume && (
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="flex items-center mr-4 text-fore-primary border-2 border-accent w-fit px-4 py-1 rounded cursor-pointer hover:text-accent transition-colors"
        >
          <span className="mr-2">
            <PaperIcon />
          </span>
          Resume
        </a>
      )}
      <span className="flex justify-center gap-x-5 ml-2 items-center">
        <a
          href={`mailto:${email}`}
          className="group cursor-pointer"
          aria-label="Email"
          title="Email"
        >
          <EmailIcon />
        </a>
        <a
          href={`https://github.com/${github}`}
          className="group cursor-pointer"
          aria-label="Github"
          title="Github"
        >
          <GithubIcon />
        </a>
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          className="group cursor-pointer"
          aria-label="Linkedin"
          title="Linkedin"
        >
          <LinkedinIcon />
        </a>
        {newsletter && (
          <a
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            href={newsletter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to my newsletter
          </a>
        )}
      </span>
    </div>
  )
}
export default Socials
