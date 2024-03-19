import {
    React,
    Component
} from 'react';
import '../static/styles/footer.css';
import FooterOption from './FooterOption';
import Logo from '../static/images/logo.png';
import store from '../model/store';


export default class Footer extends Component {

    render() {

        return (

            <footer className="main-footer">
                <p className='last-update'>{store.footer.lastUpdate}</p>
                <ul className="footer-share">

                    {results}

                </ul>
                <a
                    className='logo-anchor'
                    rel='noreferrer'
                    href="https://bank.solidnetwork.xyz/"
                    target="_blank">
                    <img alt="The Solid Network Bank" className="logo-image" src={Logo} />
                </a>
            </footer>

        );

    }
}



function getOpt(idx, href, name) {

    const opt = {
        li: {
            name: "footer-social-option"
        },
        anchor: {
            name: "footer-social-option-link",
            href: href
        },
        span: {
            name: name
        },
        idx: idx
    }

    return opt;

}

const opts = [];
opts.push(
    getOpt(1,
        "https://bank.solidnetwork.xyz/",
        "icon-social_twitter"
    )
);

opts.push(
    getOpt(2,
        "https://bank.solidnetwork.xyz/",
        "icon-social_instagram"
    )
);

opts.push(
    getOpt(3,
        "https://bank.solidnetwork.xyz/",
        "icon-social_tiktok"
    )
);


opts.push(
    getOpt(4,
        "https://bank.solidnetwork.xyz/",
        "icon-social_facebook"
    )
);


opts.push(
    getOpt(5,
        "https://bank.solidnetwork.xyz/",
        "icon-social_youtube"
    )
);


const results = opts.map((opt) =>
    <FooterOption
        key={opt.idx}
        opt={opt} />
);


