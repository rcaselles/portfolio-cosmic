import { getSiteSettings } from "@/lib/cosmic"

const siteSettings = await getSiteSettings()


const Footer = () => {
  return (
    <footer className="flex flex-col items-center md:items-stretch mx-auto gap-y-6 py-12 px-6 md:px-12 lg:px-20">

      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-y-6 md:gap-y-0">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} {siteSettings?.metadata?.copyright ?? ""}
        </span>
      </div>
    </footer>
  )
}
export default Footer
