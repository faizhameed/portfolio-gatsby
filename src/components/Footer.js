export default function Footer() {
  return (
    <footer className="py-16 mt-24 border-t border-border-light dark:border-border-dark">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm text-subtle-light dark:text-subtle-dark">
          © 2025 Faiz Hameed. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            className="text-subtle-light dark:text-subtle-dark hover:text-heading-light dark:hover:text-heading-dark transition-colors"
            href="https://www.instagram.com/faizhameedv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="text-subtle-light dark:text-subtle-dark hover:text-heading-light dark:hover:text-heading-dark transition-colors"
            href="https://www.youtube.com/@faiz_hameed"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            className="text-subtle-light dark:text-subtle-dark hover:text-heading-light dark:hover:text-heading-dark transition-colors"
            href="https://www.linkedin.com/in/faizhameed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-subtle-light dark:text-subtle-dark hover:text-heading-light dark:hover:text-heading-dark transition-colors"
            href="https://github.com/faizhameed"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-subtle-light dark:text-subtle-dark hover:text-heading-light dark:hover:text-heading-dark transition-colors"
            href="https://faizhameed.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
