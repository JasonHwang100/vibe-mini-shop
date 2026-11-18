import products from '../data/products.js'
import '../styles/ProductSection.css'

const priceFormatter = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
  maximumFractionDigits: 0,
})

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-placeholder" aria-hidden="true">
        이미지 준비 중
      </div>
      <div className="product-card__details">
        <h3>{product.name}</h3>
        <p>{priceFormatter.format(product.price)}</p>
      </div>
    </article>
  )
}

function ProductSection() {
  return (
    <section className="product-section" id="products" aria-labelledby="products-title">
      <h2 id="products-title">상품 목록</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductSection
