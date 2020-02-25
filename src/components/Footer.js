import React from 'react';
import sniffyRev from '../img/sniffy-rev.png';

function Footer() {
        const variable = "";
    return (
        <div class="footer">
            <div class="footer-left">
            <p><strong>J Tuquib</strong> - Web &amp; Graphics Developer<br />
            <span>Tgrafix - A Design &amp; Development Laboratory</span></p>
            </div>
            <div class="footer-right">
                <img src={ sniffyRev } alt="I am a coder!" width="90px" />
                <p><span>Copyright &copy; 2020. &nbsp;&nbsp;</span> <span>All rights reserved.</span></p>
            </div>
        </div>
    )
}

export default Footer;
