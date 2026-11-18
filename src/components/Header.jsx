import '../styles/Header.css'

function Header() {
  return (
    <header className="site-header">
      <a className="site-header__logo" href="#/" aria-label="미니 쇼핑몰 홈">
        미니 쇼핑몰
      </a>
      <nav aria-label="주요 메뉴">
        <ul className="site-header__menu">
          <li>상품 목록</li>
          <li>주문하기</li>
          <li>관리자</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
