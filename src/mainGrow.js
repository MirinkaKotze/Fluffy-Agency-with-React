import growImage from './assets/images/uploading-illustration.png';
import './assets/styles/mainGrow.css';

function GrowBlock() {
  return (
    <section className="grow_container">
      <div className="grow_text text">
        <h4 className="grow_text--intro text_intro">An Agency That Helps You</h4>
        <h1 className="grow_text--head text_head">Grow your Business</h1>
        <p className="grow_text--info text_info">
          Build an award winning website that grows your business with the help
          of Last Door. Our 15+ years of experience in building websites have
          grown businesses of 1000+ clients.
        </p>
        <div className="grow_button">
          <button className="buttom_orange" type="button">
            Get Your Free Consulation Now
          </button>
        </div>
      </div>
      <div>
        <img className="grow_image" src={growImage} alt="Girl with bookshelf" />
      </div>
    </section>
  );
}

export default GrowBlock;
