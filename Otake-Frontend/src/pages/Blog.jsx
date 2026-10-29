import GetStarted from '../components/sections/GetStarted.jsx'
import FAQ from '../components/sections/FAQ.jsx'

const BLOG_POSTS = [
  {
    id: 1,
    title: 'How to Scale Your Startup with Smart Automation',
    category: 'Startup',
    date: 'Oct 28, 2025',
    readTime: '6 min read',
    excerpt: 'Discover how automation can help early-stage teams save time, cut costs, and focus on building what matters.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: 'from-pink-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'AI-Powered Insights: Driving Smarter Business Decisions',
    category: 'Growth AI',
    date: 'Oct 25, 2025',
    readTime: '8 min read',
    excerpt: 'Leverage predictive analytics to forecast revenue, reduce churn, and make data-driven decisions with confidence.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: 'from-purple-500/20 to-blue-500/20',
  },
  {
    id: 3,
    title: 'Building a Customer-Centric Support Strategy',
    category: 'Business',
    date: 'Oct 22, 2025',
    readTime: '5 min read',
    excerpt: 'Learn how to create support workflows that delight customers and build long-term loyalty.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: 'from-orange-500/20 to-pink-500/20',
  },
  {
    id: 4,
    title: 'E-Commerce Shipping: Optimize for Speed & Cost',
    category: 'Shipping',
    date: 'Oct 19, 2025',
    readTime: '7 min read',
    excerpt: 'Compare carriers, automate labels, and streamline fulfillment to boost customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 5,
    title: 'Productivity Hacks for Remote Teams',
    category: 'Productivity',
    date: 'Oct 16, 2025',
    readTime: '6 min read',
    excerpt: 'Practical tips and tools to keep distributed teams aligned, engaged, and productive.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: 'from-green-500/20 to-teal-500/20',
  },
  {
    id: 6,
    title: 'Security Best Practices for SaaS Platforms',
    category: 'Security',
    date: 'Oct 13, 2025',
    readTime: '9 min read',
    excerpt: 'Protect your data with zero-trust architecture, encryption, and compliance-ready strategies.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: 'from-red-500/20 to-orange-500/20',
  },
]

function Blog() {
  return (
    <div className="w-full">
      <section className="otake-about-hero relative w-full pt-6 pb-12 sm:pt-16 sm:pb-16 lg:pt-24">
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[760px] text-center">
            <span className="inline-block rounded-[4px] bg-[#FFE36A] px-4 py-1.5 text-[11px] font-semibold text-neutral-800 sm:text-[12px]">
              Our Blog
            </span>
            <h1 className="mt-5 text-[34px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-[48px] md:text-[56px]">
              Insights, Ideas &amp;
              <br />
              Innovation
            </h1>
            <p className="mx-auto mt-4 max-w-[620px] text-[14px] leading-relaxed text-neutral-900 sm:text-[16px]">
              Explore the latest trends in SaaS, AI, automation, and growth strategies to scale your business smarter.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group relative overflow-hidden rounded-[24px] border border-neutral-100 bg-white shadow-[0_12px_40px_rgba(150,130,200,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(150,130,200,0.18)]"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} to-transparent`} />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-neutral-900 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[18px] font-bold leading-snug text-neutral-900 transition-colors group-hover:text-purple-700">
                    {post.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-neutral-600">{post.excerpt}</p>
                  <button className="mt-2 inline-flex items-center gap-2 text-[12px] font-semibold text-neutral-900">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <GetStarted />
      <FAQ />
    </div>
  )
}

export default Blog
