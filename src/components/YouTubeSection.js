import { HiOutlineArrowRight } from "react-icons/hi2";

import { HiPlayCircle } from "react-icons/hi2";

export default function YouTubeSection() {
  return (
    <section
      className="p-8 bg-surface-light dark:bg-surface-dark rounded-3xl"
      id="youtube"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">YouTube / Content Creator</h2>
          <p className="text-subtle-light dark:text-subtle-dark leading-relaxed mb-6">
            I document my journey as an engineer and founder on YouTube. I cover
            topics like career growth in tech, building in public, productivity,
            and the latest in AI.
          </p>
          <a
            className="bg-primary text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            href="https://www.youtube.com/@faiz_hameed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe on YouTube <HiOutlineArrowRight className="text-xl" />
          </a>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <div
            href="https://www.youtube.com/@faiz_hameed"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full bg-border-light dark:bg-border-dark rounded-2xl flex items-center justify-center min-h-[200px]"
          >
            <a
              href="https://www.youtube.com/@faiz_hameed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiPlayCircle className="text-6xl text-subtle-light dark:text-subtle-dark" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
