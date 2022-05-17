import React from 'react'
import './Footer.css'

export default function Footer(props) {
    return (
        <footer className={`bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'} py-3 footerStyle`}>
            <span>Copyright &copy; Vivan Sanjay Athreya</span>
        </footer>
    )
}
