import illustration from '../../image/illustration.svg';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class HeaderContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container mt-5 mt-md-2">
                            <div class="row align-items-center">
                                <div class="col-12 col-lg-8 text-xs-center text-center text-lg-left">
                                    <div class="header-caption px-4 py-1">
                                        218 Countries Infected
                                    </div>
                                    <h1 class="text-white header-text pt-2">BEWARE OF <span class="text-orange">CORONA</span></h1>
                                    <p class="header-subtext text-gray mt-3 mb-5 text-justify">
                                        Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                                    </p>
                                    <a href="https://id.wikipedia.org/wiki/Pandemi_COVID-19" target="_blank" class="mt-2 text-decoration-none btn-corona-detail d-inline-block">
                                        <h2 class="text-orange">Indonesian Covid Tracker</h2>
                                    </a>
                                </div>
                                <div class="col-12 col-lg-4 position-relative illustration text-center">
                                    <img src="${illustration}" class="img-illustration">
                                </div>
                            </div>
                        </div>`;
    }
}

customElements.define('header-content',HeaderContent);