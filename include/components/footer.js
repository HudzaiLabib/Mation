const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
   <footer style="background-color: #0172cb" class="">
      <div
         class="container d-flex align-items-center justify-content-between"
      >
         <div class="pt-3">
            <p class="text-white fs-5">Copyright © 2022 Tim P1</p>
         </div>
         <div class="d-flex gap-3">
            <a href=""
               ><img
                  width="15px"
                  height="24px"
                  src="../../assets/icon/icon-fb.png"
                  alt=""
            /></a>
            <a href=""
               ><img
                  width="24px"
                  height="24px"
                  src="../../assets/icon/icon-ig.png"
                  alt=""
            /></a>
            <a href=""
               ><img
                  width="24px"
                  height="24px"
                  src="../../assets/icon/icon-tiktok.png"
                  alt=""
            /></a>
         </div>
      </div>
   </footer>
`;

class Footer extends HTMLElement {
   constructor() {
   super(); 
   }

   connectedCallback() {
      const bootstrap = document.querySelector('link[href*="bootstrap"]');
      const shadowRoot = this.attachShadow({ mode: 'closed' });

      if (bootstrap) {
      shadowRoot.appendChild(bootstrap.cloneNode());
      }

      shadowRoot.appendChild(footerTemplate.content);
   }
}

customElements.define('footer-component', Footer);