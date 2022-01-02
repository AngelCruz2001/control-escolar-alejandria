import React from 'react'
import logoAleNoText from "../../resources/images/logoAleNoText.png";

export const StudetsFooter = () => {
    return (
        <footer className='studentsFooter'>
            <img src={logoAleNoText} height="100px" width="100px"  alt="logo" />
            <div className='studentsFooter-info'>
                <div className='studentsFooter-info-content'>
                    <p> Desliza para ver más</p>
                    <i class="fas fa-hand-point-right"></i>
                </div>
            </div>
        </footer>
    )
}
