import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position : "absolute",
        width : "100%",
        top:"100vh"
    }

    return (
        <footer className="bg-dark text-light" style= {footerStyle}>
            <p className="text-center">
                Copyright &copy; Anshu Verma
            </p>
        </footer>
    )
}