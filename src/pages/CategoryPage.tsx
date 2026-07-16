import { useParams, Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getCategoryBySlug } from '../data/products'

function CategoryPage() {
  const { category } = useParams<{ category: string }>()
  
  const categoryData = category ? getCategoryBySlug(category) : undefined

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-(--color-surface-strong)">
        <Navbar />
        <div aria-hidden="true" className="h-[96px]" />
        <main id="main-content" className="py-[64px] px-(--space-4) md:px-(--space-6)">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-[32px] leading-[40px] font-bold text-(--color-text-secondary) mb-[24px]">
              Category Not Found
            </h1>
            <p className="text-(--color-text-tertiary) mb-[32px]">
              The requested product category does not exist.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-[24px] py-[12px] bg-(--color-text-inverse) text-(--color-text-on-dark) rounded-[4px] no-underline hover:opacity-90 transition-opacity"
            >
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-(--color-surface-strong)">
      <Navbar />
      
      {/* Navbar height spacer */}
      <div aria-hidden="true" className="h-[96px]" />

      <main id="main-content">
        {/* Page Header */}
        <section className="py-[64px] px-(--space-4) md:px-(--space-6) bg-(--color-surface-base) border-b border-(--color-border-subtle)">
          <div className="max-w-7xl mx-auto">
            <h1 
              className="m-0 text-[48px] leading-[56px] tracking-[-0.02em] font-extrabold uppercase text-(--color-text-secondary) mb-[16px]"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              {categoryData.name}
            </h1>
            <p 
              className="m-0 text-[18px] leading-[28px] text-(--color-text-tertiary) font-normal max-w-3xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {categoryData.intro}
            </p>
          </div>
        </section>
        {/* Products Grid */}
        <section className="py-[64px] px-(--space-4) md:px-(--space-6) bg-(--color-surface-base)">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
              {categoryData.products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${category}/${product.id}`}
                  className="group block no-underline bg-(--color-surface-elevated) border border-(--color-border-subtle) rounded-[8px] overflow-hidden hover:shadow-lg transition-all duration-200 hover:border-(--color-text-inverse)"
                >
                 {/* Product Image */}
                  <div className="aspect-4/3 bg-(--color-surface-strong) border-b border-(--color-border-subtle) flex items-center justify-center">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-w-[70%] max-h-[70%] object-contain"
                      />
                    ) : (
                      <div 
                        className="w-[120px] h-[120px] border-2 border-dashed border-(--color-text-tertiary) rounded-[4px] flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <span 
                          className="text-(--color-text-tertiary) text-[12px] uppercase tracking-wider font-medium"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Image
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-[24px]">
                    <h3 
                      className="m-0 text-[20px] leading-[28px] font-semibold text-(--color-text-secondary) mb-[8px] group-hover:text-(--color-text-inverse) transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {product.name}
                    </h3>
                    
                    <p 
                      className="m-0 text-[14px] leading-[20px] text-(--color-text-accent) font-medium mb-[12px] uppercase tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {product.classification || 'Filter'}
                    </p>
                    
                    <p 
                      className="m-0 text-[14px] leading-[22px] text-(--color-text-tertiary) font-normal"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {product.cardDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default CategoryPage