import Link from 'next/link'
import footerClassNames from './FooterClassNames'

const Footer = () => {
    const {
        container, 
        footer,
        section,
        section1,
        section1Content,
        section1Heading,
        section2,
        section2Content,
        section2Heading,
        section2ul,
        section3,
        section3Content,
        section3Heading,
        sectionLink,
    } = footerClassNames
  return (
    <footer
        className={footer}
    >
        <div className={container}>
            <div className={section}>
                <div className={section1}>
                    <h2 className={section1Heading}>LOGO</h2>
                    <p className={section1Content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia fuga ex 
                        dolores omnis.
                    </p>
                </div>
                <div className={section2}>
                    <h2 className={section2Heading}>
                        About us
                    </h2>
                    <ul className={section2ul}>
                        <li>
                            <Link href="#" className={sectionLink}>
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={sectionLink}>
                                Blog           
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={section3}>
                    <h2 className={section3Heading}>Contact us</h2>
                    <p className={section1Content}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Consectetur inventore nam animi itaque maxime ipsam atque voluptas fuga eligendi? 
                        Tempora dolor corporis aspernatur.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer