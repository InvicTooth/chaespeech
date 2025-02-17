export default function Footer() {
  return (
    <footer className="bg-primary text-quaternary py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Nathan Sterling. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://github.com/nathansterling"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary mr-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nathansterling"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

