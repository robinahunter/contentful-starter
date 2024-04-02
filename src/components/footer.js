import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <a href="https://www.linkedin.com">LinkedIn</a> &middot;{' '}
      <a href="https://github.com/">GitHub</a>
    </div>
  </Container>
)

export default Footer
