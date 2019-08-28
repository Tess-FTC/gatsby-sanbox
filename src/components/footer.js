import React from "react"
import footerStyle from "./style/footer.module.scss"

const Footer = () => (
  <footer className={footerStyle.footer}>
    <p className={footerStyle.footer__content}>
      This is the site built with{" "}
      <a href="https://www.gatsbyjs.org" className={footerStyle.footer__link}>
        Gatsby
      </a>
    </p>
  </footer>
)

export default Footer
