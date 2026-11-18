import '../styles/HeroBanner.css'

function HeroBanner() {
  function scrollToProducts() {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="hero-banner">
      <div className="hero-banner__content">
        <h1>이번 주 새로 들어 온 상품</h1>
        <p>작은 가게의 정성을 담아 새롭게 준비한 상품을 만나보세요.</p>
        <button
          className="hero-banner__button"
          type="button"
          onClick={scrollToProducts}
        >
          상품 보러 가기
        </button>
      </div>
    </section>
  )
}

export default HeroBanner
