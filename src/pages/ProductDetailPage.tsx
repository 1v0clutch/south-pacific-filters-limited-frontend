import { useParams, Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getCategoryBySlug, getProductById } from '../data/products'

function ProductDetailPage() {
  const { category, productName } = useParams<{ category: string; productName: string }>()
  
  const categoryData = category ? getCategoryBySlug(category) : undefined
  const product = category && productName ? getProductById(category, productName) : undefined

  if (!categoryData || !product) {
    return (
      <div className="min-h-screen bg-(--color-surface-strong)">
        <Navbar />
        <div aria-hidden="true" className="h-[96px]" />
        <main id="main-content" className="py-[64px] px-(--space-4) md:px-(--space-6)">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-[32px] leading-[40px] font-bold text-(--color-text-secondary) mb-[24px]">
              Product Not Found
            </h1>
            <p className="text-(--color-text-tertiary) mb-[32px]">
              The requested product does not exist.
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
        {/* Breadcrumb */}
        <section className="py-[24px] px-(--space-4) md:px-(--space-6) bg-(--color-surface-base) border-b border-(--color-border-subtle)">
          <div className="max-w-7xl mx-auto">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-[8px] text-[14px] leading-[20px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li>
                  <Link 
                    to={`/products/${category}`}
                    className="text-(--color-text-tertiary) hover:text-(--color-text-inverse) transition-colors no-underline"
                  >
                    {categoryData.name}
                  </Link>
                </li>
                <li className="text-(--color-text-tertiary)">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-(--color-text-secondary) font-medium">
                  {product.name}
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/* Product Header */}
        <section className="py-[48px] px-(--space-4) md:px-(--space-6) bg-(--color-surface-base) border-b border-(--color-border-subtle)">
          <div className="max-w-7xl mx-auto">
            <h1 
              className="m-0 text-[40px] leading-[48px] tracking-[-0.02em] font-extrabold uppercase text-(--color-text-secondary) mb-[8px]"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              {product.name}
            </h1>
            <p 
              className="m-0 text-[16px] leading-[24px] text-(--color-text-accent) font-medium uppercase tracking-[0.02em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {product.classification || 'Filter'}
            </p>
          </div>
        </section>

        {/* Product Content */}
        <section className="py-[64px] px-(--space-4) md:px-(--space-6) bg-(--color-surface-base)">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
              {/* Left Column - Image */}
              <div className="flex flex-col">
                <div className="aspect-square bg-(--color-surface-strong) border border-(--color-border-subtle) rounded-[8px] relative overflow-hidden mb-[24px]">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div 
                        className="w-[200px] h-[200px] border-2 border-dashed border-(--color-text-tertiary) rounded-[8px] flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <span 
                          className="text-(--color-text-tertiary) text-[14px] uppercase tracking-wider font-medium"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Product Image
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="flex flex-col gap-[40px]">
                {/* Description */}
                <div>
                  <h2 
                    className="m-0 text-[24px] leading-[32px] font-semibold text-(--color-text-secondary) mb-[16px] uppercase tracking-[0.01em]"
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                  >
                    Description
                  </h2>
                  <p 
                    className="m-0 text-[16px] leading-[26px] text-(--color-text-tertiary) font-normal"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {product.description}
                  </p>
                </div>
                {/* Advantages */}
                {product.advantages && product.advantages.length > 0 && (
                  <div>
                    <h2 
                      className="m-0 text-[24px] leading-[32px] font-[600] text-[var(--color-text-secondary)] mb-[16px] uppercase tracking-[0.01em]"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      Advantages
                    </h2>
                    <ul className="list-none m-0 p-0 space-y-[12px]">
                      {product.advantages.map((advantage, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-[12px] text-[16px] leading-[24px] text-[var(--color-text-tertiary)]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span 
                            className="w-[6px] h-[6px] bg-[var(--color-text-accent)] rounded-full mt-[9px] flex-shrink-0"
                            aria-hidden="true"
                          />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specifications */}
                {((product.specifications && Object.keys(product.specifications).length > 0) || 
                  (product.generalSpecs && Object.keys(product.generalSpecs).length > 0)) && (
                  <div>
                    <h2 
                      className="m-0 text-[24px] leading-[32px] font-[600] text-[var(--color-text-secondary)] mb-[16px] uppercase tracking-[0.01em]"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      Specifications
                    </h2>
                    <div className="space-y-[16px]">
                      {Object.entries(product.specifications || product.generalSpecs || {}).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row sm:items-center gap-[4px] sm:gap-[16px] py-[12px] border-b border-[var(--color-border-subtle)]">
                          <dt 
                            className="text-[14px] leading-[20px] font-medium text-[var(--color-text-secondary)] min-w-[160px] uppercase tracking-[0.02em]"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {key}:
                          </dt>
                          <dd 
                            className="m-0 text-[14px] leading-[20px] text-[var(--color-text-tertiary)] font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {value}
                          </dd>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Technical Specifications Table - Only render if data exists */}
        {((product.specsTable && product.specsTable.length > 0) || (product.customTable && product.customTable.rows.length > 0)) && (
          <section className="py-[64px] px-(--space-4) md:px-(--space-6) bg-(--color-surface-base) border-t border-(--color-border-subtle)">
            <div className="max-w-7xl mx-auto">
              <h2 
                className="m-0 text-[32px] leading-[40px] tracking-[-0.01em] font-bold uppercase text-(--color-text-secondary) mb-[32px]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Technical Specifications
              </h2>
              
              <div className="overflow-x-auto">
                {product.customTable && product.customTable.rows.length > 0 ? (
                  // Custom table format
                  <table className="w-full bg-(--color-surface-elevated) border border-(--color-border-subtle) rounded-[8px] overflow-hidden">
                    <thead>
                      <tr className="bg-(--color-surface-strong) border-b border-(--color-border-subtle)">
                        {product.customTable.headers.map((header, index) => (
                          <th 
                            key={index}
                            className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.customTable.rows.map((row, rowIndex) => (
                        <tr 
                          key={rowIndex}
                          className="border-b border-(--color-border-subtle) last:border-b-0 hover:bg-(--color-surface-strong) transition-colors"
                        >
                          {product.customTable!.headers.map((header, cellIndex) => (
                            <td 
                              key={cellIndex}
                              className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-tertiary) font-normal"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {Array.isArray(row) ? row[cellIndex] : (row[header] || 'N/A')}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  // Standard table format
                  <table className="w-full bg-(--color-surface-elevated) border border-(--color-border-subtle) rounded-[8px] overflow-hidden">
                    <thead>
                      <tr className="bg-(--color-surface-strong) border-b border-(--color-border-subtle)">
                        <th 
                          className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Type
                        </th>
                        <th 
                          className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Dimensions (WxHxD mm)
                        </th>
                        <th 
                          className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Filter Class
                        </th>
                        <th 
                          className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          # Pockets
                        </th>
                        <th 
                          className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Filter Surface
                        </th>
                        <th 
                          className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Airflow (m³/h)
                        </th>
                        <th 
                          className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Airflow (L/s)
                        </th>
                        <th 
                          className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Pressure Drop (Pa)
                        </th>
                        <th 
                          className="text-left py-[16px] px-[20px] text-[12px] leading-[16px] font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Energy Label
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specsTable?.map((row, index) => (
                        <tr 
                          key={index}
                          className="border-b border-(--color-border-subtle) last:border-b-0 hover:bg-(--color-surface-strong) transition-colors"
                        >
                          <td 
                            className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-secondary) font-medium"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.type}
                          </td>
                          <td 
                            className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.dimensions}
                          </td>
                          <td 
                            className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.filterClassification}
                          </td>
                          <td 
                            className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.pockets}
                          </td>
                          <td 
                            className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.filterSurface}
                          </td>
                          <td 
                            className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.airflowM3h}
                          </td>
                          <td 
                            className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.airflowLs}
                          </td>
                          <td 
                            className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.pressureDrop}
                          </td>
                          <td 
                            className="py-[14px] px-[20px] text-[14px] leading-[20px] text-(--color-text-accent) font-medium"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.energyLabel}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      
    </div>
  )
}

export default ProductDetailPage