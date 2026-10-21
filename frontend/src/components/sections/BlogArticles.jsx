const ARTICLE_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus. Nulla congue blandit quam, sit amet scelerisque turpis pellentesque eu.'

const ARTICLES = [
  {
    id: 'shipping',
    imageBg: 'bg-[#E8F5FF]',
    imageFilter: '',
    categories: ['Shipping'],
    title: ['Use data analytics to', 'improve shipping times.'],
  },
  {
    id: 'sales',
    imageBg: 'bg-[#EDE9FF]',
    imageFilter: 'hue-rotate-[45deg]',
    categories: ['Data', 'Sales Growth'],
    title: ['Sales growth stories', 'powered by marketing.'],
  },
  {
    id: 'customers',
    imageBg: 'bg-[#FCE7F3]',
    imageFilter: 'hue-rotate-[-50deg]',
    categories: ['Data', 'Shipping', 'Sales Growth'],
    title: ['Tips for building a returning', 'customer base.'],
  },
]

function ArticleCard({ imageBg, imageFilter, categories, title, wideOnSm }) {
  return (
    <article
      className={`flex min-h-[345px] flex-col rounded-[18px] bg-white p-2.5 ${
        wideOnSm
          ? 'sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc(50%-8px)] lg:col-span-1 lg:mx-0 lg:w-auto lg:max-w-none'
          : ''
      }`}
    >
      <div
        className={`flex h-[142px] w-full items-center justify-center overflow-hidden rounded-[14px] ${imageBg}`}
      >
        <img
          src="/images/hero-character.png"
          alt=""
          aria-hidden="true"
          className={`h-full w-full object-contain p-2 ${imageFilter}`}
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-md bg-[#F1F0F4] px-2 py-[3px] text-[10.5px] font-medium leading-none text-[#55535E]"
          >
            {category}
          </span>
        ))}
      </div>

      <h3 className="mt-2.5 text-[17px] font-bold leading-[1.28] tracking-[-0.02em] text-[#25232A]">
        {title[0]}
        <br />
        {title[1]}
      </h3>

      <p className="mt-2 line-clamp-2 text-[12.5px] leading-[1.55] text-[#8B8A93]">
        {ARTICLE_DESCRIPTION}
      </p>

      <button
        type="button"
        className="mt-auto flex h-9 w-full items-center justify-center rounded-[10px] border border-[#E8E6EF] bg-white text-[12px] font-medium text-[#25232A] transition-colors hover:border-[#D6D2E4] hover:bg-[#FAFAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8E6EF]"
      >
        Learn More
      </button>
    </article>
  )
}

function BlogArticles() {
  return (
    <section className="otake-blog relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-[1150px] px-6 pb-20 pt-24 sm:px-8 lg:pb-28 lg:pt-32">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block rounded-full bg-[#FFE36A] px-3 py-[5px] text-[11px] font-semibold leading-none text-[#1A1A1A]">
            Blog Articles
          </span>

          <h2 className="mt-6 text-[30px] font-bold leading-[1.12] tracking-tight text-[#25232A] sm:text-[34px] lg:text-[42px]">
            Take a look at the latest
            <br />
            articles from Otake
          </h2>

          <p className="mt-4 text-[14px] leading-[1.6] text-[#8B8A93]">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Vivamus non enim lacus.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <ArticleCard
              key={article.id}
              imageBg={article.imageBg}
              imageFilter={article.imageFilter}
              categories={article.categories}
              title={article.title}
              wideOnSm={index === ARTICLES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogArticles
