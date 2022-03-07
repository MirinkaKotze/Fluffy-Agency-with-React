import responsiveIcon from './assets/images/icon-ultra-responsive.png';
import awardWinningIcon from './assets/images/icon-award-winning-design.png';
import onlineSupportIcon from './assets/images/icon-online-support.png';
import './assets/styles/mainServices.css';

function ServicesBlock() {
    return (
        <section className='services_container'>
      <div className='services_head'>
        <h4 className='services_head--intro text_intro'>Our Services</h4>
        <h1 className='services_head--main text_subhead'>
          Why choose Agency theme
        </h1>
      </div>
      <div className='services_info'>
        <div className='services_info--container'>
          <div className='services_info--image'>
            <img
              src={responsiveIcon}
              alt='icon-ultra-responsive'
            />
          </div>
          <h2 className='services_info--head text_supersubhead'>
            Ultra Responsive
          </h2>
          <p className='services_info--text text_info'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit in erat nec fermentum vestibulum.
          </p>
        </div>

        <div className='services_info--container'>
          <div className='services_info--image'>
            <img
              src={awardWinningIcon}
              alt='icon-award-winning-design'
            />
          </div>
          <h2 className='services_info--head text_supersubhead'>
            Award Winning Design
          </h2>
          <p className='services_info--text text_info'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit in erat nec fermentum vestibulum.
          </p>
        </div>

        <div className='services_info--container'>
          <div className='services_info--image'>
            <img
              src={onlineSupportIcon}
              alt='icon-online-support'
            />
          </div>
          <h2 className='services_info--head text_supersubhead'>
            Support & Updates
          </h2>
          <p className='services_info--text text_info'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit in erat nec fermentum vestibulum.
          </p>
        </div>
      </div>
    </section>
    )
}

export default ServicesBlock 