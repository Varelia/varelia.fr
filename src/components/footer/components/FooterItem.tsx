import React from 'react'
import GenericImpl from '../../../props/GenericImpl'

interface FooterItemImpl extends GenericImpl {
    icon?: React.ReactElement
    title?: string
}

const FooterItem: React.FC<FooterItemImpl> = ({icon, title, className, children}) => (
    <div className={`footer-item ${className}`}>
        {(icon || title) && <header className="footer-item--header">
            {icon} {title}
        </header>}
        <section className="footer-item--body">
            { children }
        </section>
    </div>
)

export default FooterItem