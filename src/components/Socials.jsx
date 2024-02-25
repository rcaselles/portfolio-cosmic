import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Socials = ({ email, github, linkedin, newsletter }) => {
  return (
    <div className="flex items-center">
      <span className="flex gap-x-5 ml-2">
        <a
          href={`mailto:${email}`}
          className="group cursor-pointer"
          aria-label="Email"
          title="Email"
        >
          <FaEnvelope className="w-5 h-auto hover:text-gray-500" />
        </a>
        <a
          href={`https://github.com/${github}`}
          className="group cursor-pointer"
          aria-label="Github"
          title="Github"
        >
          <FaGithub className="w-5 h-auto hover:text-gray-500" />
        </a>
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          className="group cursor-pointer"
          aria-label="Linkedin"
          title="Linkedin"
        >
          <FaLinkedin className="w-5 h-auto hover:text-gray-500" />
        </a>
      </span>
    </div>
  )
}
export default Socials
