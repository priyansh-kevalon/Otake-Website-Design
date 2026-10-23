const REVIEW_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus. Nullam congue blandit quam, sit amet scelerisque turpis pellentesque eu.'

function Stars({ color, label }) {
  return (
    <div className="flex items-center gap-[3px]" role="img" aria-label={label}>
      {[0, 1, 2, 3, 4].map((star) => (
        <svg
          key={star}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={color}
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

function LeftDecoration() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="tf-left-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe3f4" />
          <stop offset="45%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#5b5bf0" />
        </linearGradient>
        <linearGradient id="tf-left-b" x1="0" y1="0" x2="1" y2="0.7">
          <stop offset="0%" stopColor="#fff3c4" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>

      <ellipse cx="34" cy="63" rx="20" ry="4" fill="#000000" opacity="0.32" />

      <path d="M32 12c12.7 0 23 9.4 23 21s-10.3 21-23 21S9 44.6 9 33 19.3 12 32 12Z" fill="url(#tf-left-a)" />
      <path
        d="M32 12c12.7 0 23 9.4 23 21 0 1.9-.3 3.8-.9 5.6-3.2-10.8-11-18.6-22.1-18.6S13.1 27.8 9.9 38.6A21 21 0 0 1 9 33c0-11.6 10.3-21 23-21Z"
        fill="#ffffff"
        opacity="0.3"
      />
      <circle cx="25" cy="26" r="4.5" fill="#ffffff" opacity="0.65" />

      <path d="M50 28l11 6.4v12.8L50 53.6 39 47.2V34.4L50 28Z" fill="url(#tf-left-b)" />
      <path d="M50 28l11 6.4L50 40.8 39 34.4 50 28Z" fill="#ffffff" opacity="0.55" />
      <path d="M50 40.8l11-6.4v12.8L50 53.6V40.8Z" fill="#ec4899" opacity="0.35" />
    </svg>
  )
}

function RightDecoration() {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="tf-right-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d9d3f2" />
        </linearGradient>
        <linearGradient id="tf-right-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>

      <ellipse cx="37" cy="66" rx="22" ry="4" fill="#000000" opacity="0.3" />

      <path
        d="M22 54c-7.2 0-13-4.8-13-10.7S15 32.6 21.8 32.6c.6 0 1.2.1 1.8.1C25.9 23.6 32.7 17 40.8 17c9.4 0 17 7.3 17.9 16.6l1.1-.1c6.2 0 11.2 4.5 11.2 10.1S66 53.6 59.8 53.6L22 54Z"
        fill="url(#tf-right-a)"
      />
      <path
        d="M40.8 17c-8.1 0-14.9 6.6-17.2 15.7.6-.1 1.2-.1 1.8-.1 1.9 0 3.8.4 5.5 1.1C32.6 26.6 36.4 21.9 41.5 21c5.4 0 9.9 4.5 10.9 10.3l1.3-.1C53 23.3 47.4 17 40.8 17Z"
        fill="#ffffff"
        opacity="0.75"
      />

      <path d="M30 40c0-6.1 5-11 11-11 1.7 0 3.3.4 4.7 1.1-2.6 1.4-4.4 4.1-4.4 7.2 0 3.6 2.4 6.7 5.7 7.7-1.9 1-4 1.5-6.3 1.5-5.9 0-10.7-2.9-10.7-6.5Z" fill="url(#tf-right-b)" opacity="0.9" />

      <circle cx="58" cy="20" r="7.5" fill="#FFE45E" />
      <circle cx="55.5" cy="17.5" r="2.6" fill="#ffffff" opacity="0.65" />
    </svg>
  )
}

function PaperPlaneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M21.5 2.5L2.8 9.9c-.8.3-.8 1.4.1 1.6l5.5 1.6 1.6 5.5c.2.9 1.3.9 1.6.1L21.5 2.5Z"
        fill="#8b8a93"
      />
      <path d="M21.5 2.5L9.4 13.1" stroke="#0d0c10" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ReviewCard({ starColor, starLabel, heading, logo }) {
  return (
    <article className="rounded-[20px] bg-[#18171D] p-[5px]">
      <div className="flex h-full min-h-[300px] flex-col rounded-[16px] bg-[#0D0C10] p-5">
        <Stars color={starColor} label={starLabel} />

        <h3 className="mt-3 text-[16px] font-medium leading-snug text-white">{heading}</h3>

        <p className="mt-2.5 text-[13.5px] leading-[1.7] text-[#8B8A93]">{REVIEW_DESCRIPTION}</p>

        <div className="mt-auto flex items-end justify-between pt-6">
          <span className="flex items-center gap-1.5">{logo}</span>
          <span className="cursor-pointer text-[11.5px] text-[#b4b3bd] transition-colors hover:text-white">
            Read More →
          </span>
        </div>
      </div>
    </article>
  )
}

function Testimonials() {
  return (
    <section id="customer-reviews" className="w-full scroll-mt-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="otake-testimonials relative overflow-hidden rounded-[20px]">
        <div className="relative mx-auto max-w-[1040px] px-6 py-16 sm:px-8 lg:py-24">
          <div className="relative flex flex-col items-center text-center">
            <span className="pointer-events-none absolute -left-2 top-6 hidden sm:block lg:-left-10">
              <LeftDecoration />
            </span>
            <span className="pointer-events-none absolute -right-2 top-6 hidden sm:block lg:-right-10">
              <RightDecoration />
            </span>

            <span className="inline-block rounded-full bg-[#FFE45E] px-3 py-[5px] text-[11px] font-semibold text-[#1A1A1A]">
              Product Features
            </span>

            <h2 className="mt-6 text-[30px] font-bold leading-[1.12] tracking-tight text-white sm:text-[34px] lg:text-[40px]">
              Hear what our
              <br />
              customers have to say
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12">
            <ReviewCard
              starColor="#FFD84D"
              starLabel="Rated 5 out of 5"
              heading="Revolutionizing Transactions:"
              logo={
                <span className="text-[14px] font-semibold tracking-[0.2em] text-[#8B8A93]">PENG</span>
              }
            />

            <ReviewCard
              starColor="#66B8FF"
              starLabel="Rated 5 out of 5"
              heading="Empowering growth:"
              logo={
                <span className="text-[13px] tracking-[0.02em] text-[#8B8A93]">veroxfloo.</span>
              }
            />

            <ReviewCard
              starColor="#EC64D5"
              starLabel="Rated 5 out of 5"
              heading="Leverage analytics for growth:"
              logo={
                <span className="flex items-center gap-1.5 text-[14px] tracking-[0.01em] text-[#8B8A93]">
                  <PaperPlaneIcon />
                  Invoice2go
                </span>
              }
            />

            <ReviewCard
              starColor="#9276FF"
              starLabel="Rated 5 out of 5"
              heading="Streamline workflows:"
              logo={
                <span className="text-[13px] font-semibold tracking-[0.22em] text-[#8B8A93]">RPUBLICA</span>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
