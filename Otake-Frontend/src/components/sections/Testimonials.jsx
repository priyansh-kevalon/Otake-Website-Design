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
      <div className="otake-testimonials relative overflow-hidden rounded-[20px] border border-[#27252D]">
        <div className="relative mx-auto max-w-[1040px] px-6 py-16 sm:px-8 lg:py-24">
          <div className="relative flex flex-col items-center text-center">
            <img
              src="/images/testimonials-decoration.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 top-6 hidden h-12 w-12 object-contain sm:block lg:-left-10"
            />
            <img
              src="/images/testimonials-decoration.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 top-6 hidden h-12 w-12 object-contain sm:block lg:-right-10"
            />

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
