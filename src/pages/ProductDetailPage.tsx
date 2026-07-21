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
        <div aria-hidden="true" className="h-24" />
        <main id="main-content" className="py-16 px-(--space-4) md:px-(--space-6)">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-[32px] leading-10 font-bold text-(--color-text-secondary) mb-6">
              Product Not Found
            </h1>
            <p className="text-(--color-text-tertiary) mb-8">
              The requested product does not exist.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-(--color-text-inverse) text-(--color-text-on-dark) rounded-sm no-underline hover:opacity-90 transition-opacity"
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
      <div aria-hidden="true" className="h-24" />

      <main id="main-content">
        {/* Breadcrumb */}
        <section className="py-4 px-(--space-4) md:px-(--space-6) bg-(--color-surface-base) border-b border-(--color-border-subtle)">
          <div className="max-w-7xl mx-auto">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-[14px] leading-5" style={{ fontFamily: "'Inter', sans-serif" }}>
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
        <section className="py-12 px-(--space-4) md:px-(--space-6) bg-(--color-surface-base) border-b border-(--color-border-subtle)">
          <div className="max-w-7xl mx-auto">
            <h1 
              className="m-0 text-[40px] leading-12 tracking-[-0.02em] font-extrabold uppercase text-(--color-text-secondary) mb-2"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              {product.name}
            </h1>
            <p 
              className="m-0 text-[16px] leading-6 text-(--color-text-accent) font-medium uppercase tracking-[0.02em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {product.classification || 'Filter'}
            </p>
          </div>
        </section>

        {/* Product Content */}
        <section className="py-16 px-(--space-4) md:px-(--space-6) bg-(--color-surface-base)">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Image */}
              <div className="flex flex-col">
                <div className="aspect-square bg-(--color-surface-strong) border border-(--color-border-subtle) rounded-lg relative overflow-hidden mb-6">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div 
                        className="w-50 h-50 border-2 border-dashed border-(--color-text-tertiary) rounded-lg flex items-center justify-center"
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
              <div className="flex flex-col gap-10">
                {/* Description */}
                <div>
                  <h2 
                    className="m-0 text-[24px] leading-8 font-semibold text-(--color-text-secondary) mb-4 uppercase tracking-[0.01em]"
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                  >
                    Description
                  </h2>
                  <p 
                    className="m-0 text-[16px] leading-6.5 text-(--color-text-tertiary) font-normal"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {product.description}
                  </p>
                </div>
                {/* Advantages */}
                {product.advantages && product.advantages.length > 0 && (
                  <div>
                    <h2 
                      className="m-0 text-[24px] leading-8 font-semibold text-(--color-text-secondary) mb-4 uppercase tracking-[0.01em]"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      Advantages
                    </h2>
                    <ul className="list-none m-0 p-0 space-y-3">
                      {product.advantages.map((advantage, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-3 text-[16px] leading-6 text-(--color-text-tertiary)"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span 
                            className="w-1.5 h-1.5 bg-(--color-text-accent) rounded-full mt-2.25 shrink-0"
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
                      className="m-0 text-[24px] leading-8 font-semibold text-(--color-text-secondary) mb-4 uppercase tracking-[0.01em]"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      Specifications
                    </h2>
                    <div className="space-y-4">
                      {Object.entries(product.specifications || product.generalSpecs || {}).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-(--color-border-subtle)">
                          <dt 
                            className="text-[14px] leading-5 font-medium text-(--color-text-secondary) min-w-40 uppercase tracking-[0.02em]"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {key}:
                          </dt>
                          <dd 
                            className="m-0 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
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
          <section className="py-16 px-(--space-4) md:px-(--space-6) bg-(--color-surface-base) border-t border-(--color-border-subtle)">
            <div className="max-w-7xl mx-auto">
              <h2 
                className="m-0 text-[24px] leading-8 sm:text-[32px] sm:leading-10 tracking-[-0.01em] font-bold uppercase text-(--color-text-secondary) mb-6 sm:mb-8"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Technical Specifications
              </h2>
              
              {/* Desktop Table View (hidden on mobile) */}
              <div className="hidden md:block overflow-x-auto">
                {product.customTable && product.customTable.rows.length > 0 ? (
                  // Custom table format
                  <table className="w-full bg-(--color-surface-elevated) border border-(--color-border-subtle) rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-(--color-surface-strong) border-b border-(--color-border-subtle)">
                        {product.customTable.headers.map((header, index) => (
                          <th 
                            key={index}
                            className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
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
                              className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
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
                  <table className="w-full bg-(--color-surface-elevated) border border-(--color-border-subtle) rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-(--color-surface-strong) border-b border-(--color-border-subtle)">
                        <th 
                          className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Type
                        </th>
                        <th 
                          className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Dimensions (WxHxD mm)
                        </th>
                        <th 
                          className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Filter Class
                        </th>
                        <th 
                          className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          # Pockets
                        </th>
                        <th 
                          className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Filter Surface
                        </th>
                        <th 
                          className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Airflow (m³/h)
                        </th>
                        <th 
                          className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Airflow (L/s)
                        </th>
                        <th 
                          className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Pressure Drop (Pa)
                        </th>
                        <th 
                          className="text-left py-4 px-5 text-[12px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-wider"
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
                            className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-secondary) font-medium"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.type}
                          </td>
                          <td 
                            className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.dimensions}
                          </td>
                          <td 
                            className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.filterClassification}
                          </td>
                          <td 
                            className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.pockets}
                          </td>
                          <td 
                            className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.filterSurface}
                          </td>
                          <td 
                            className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.airflowM3h}
                          </td>
                          <td 
                            className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.airflowLs}
                          </td>
                          <td 
                            className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.pressureDrop}
                          </td>
                          <td 
                            className="py-3.5 px-5 text-[14px] leading-5 text-(--color-text-accent) font-medium"
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

              {/* Mobile Card View (visible only on mobile) */}
              <div className="md:hidden space-y-4">
                {product.customTable && product.customTable.rows.length > 0 ? (
                  // Custom table mobile cards
                  product.customTable.rows.map((row, rowIndex) => (
                    <div 
                      key={rowIndex}
                      className="bg-(--color-surface-elevated) border border-(--color-border-subtle) rounded-lg p-5 space-y-3"
                    >
                      {product.customTable!.headers.map((header, cellIndex) => (
                        <div key={cellIndex} className="flex flex-col gap-1">
                          <dt 
                            className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {header}
                          </dt>
                          <dd 
                            className="m-0 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {Array.isArray(row) ? row[cellIndex] : (row[header] || 'N/A')}
                          </dd>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  // Standard table mobile cards
                  product.specsTable?.map((row, index) => (
                    <div 
                      key={index}
                      className="bg-(--color-surface-elevated) border border-(--color-border-subtle) rounded-lg p-5 space-y-3"
                    >
                      <div className="flex flex-col gap-1">
                        <dt 
                          className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Type
                        </dt>
                        <dd 
                          className="m-0 text-[14px] leading-5 text-(--color-text-secondary) font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.type}
                        </dd>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <dt 
                          className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Dimensions (WxHxD mm)
                        </dt>
                        <dd 
                          className="m-0 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.dimensions}
                        </dd>
                      </div>

                      <div className="flex flex-col gap-1">
                        <dt 
                          className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Filter Class
                        </dt>
                        <dd 
                          className="m-0 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.filterClassification}
                        </dd>
                      </div>

                      <div className="flex flex-col gap-1">
                        <dt 
                          className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          # Pockets
                        </dt>
                        <dd 
                          className="m-0 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.pockets}
                        </dd>
                      </div>

                      <div className="flex flex-col gap-1">
                        <dt 
                          className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Filter Surface
                        </dt>
                        <dd 
                          className="m-0 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.filterSurface}
                        </dd>
                      </div>

                      <div className="flex flex-col gap-1">
                        <dt 
                          className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Airflow (m³/h)
                        </dt>
                        <dd 
                          className="m-0 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.airflowM3h}
                        </dd>
                      </div>

                      <div className="flex flex-col gap-1">
                        <dt 
                          className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Airflow (L/s)
                        </dt>
                        <dd 
                          className="m-0 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.airflowLs}
                        </dd>
                      </div>

                      <div className="flex flex-col gap-1">
                        <dt 
                          className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Pressure Drop (Pa)
                        </dt>
                        <dd 
                          className="m-0 text-[14px] leading-5 text-(--color-text-tertiary) font-normal"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {row.pressureDrop}
                        </dd>
                      </div>

                      {row.energyLabel && (
                        <div className="flex flex-col gap-1">
                          <dt 
                            className="text-[11px] leading-4 font-medium text-(--color-text-secondary) uppercase tracking-[0.02em]"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            Energy Label
                          </dt>
                          <dd 
                            className="m-0 text-[14px] leading-5 text-(--color-text-accent) font-medium"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {row.energyLabel}
                          </dd>
                        </div>
                      )}
                    </div>
                  ))
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