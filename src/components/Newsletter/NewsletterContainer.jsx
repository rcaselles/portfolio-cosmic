"use client"
import { Button } from "../Button"

export default function NewsletterContainer({ newsletter }) {
  return (
    <Button onClick={() => window.open(newsletter, "_blank", "noopener,noreferrer")}>Subscribe to my newsletter</Button>)
}