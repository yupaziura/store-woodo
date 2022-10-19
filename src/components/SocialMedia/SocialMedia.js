import {ReactComponent as Facebook} from '../../img/icons/facebook.svg';
import {ReactComponent as Pinterest} from '../../img/icons/pinterest.svg';


import './SocialMedia.scss';


const SocialMedia = () => {
    return (
        <div className="social">
            <div>
                <a target="_blank" rel="noreferrer" href='https://facebook.com'>
                    <Facebook className='icon'/>
                </a>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href='https://pinterest.com'>
                    <Pinterest className='icon'/>
                </a>
            </div>
        </div>
    )
}

export default SocialMedia;