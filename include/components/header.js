const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
   <header>
      <!-- Navbar  -->
      <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-md-3">
         <div class="container">
            <a
               class="navbar-brand"
               href="../../"
               style="font-family: Sarina; font-size: 40px"
               >Beras Basah</a
            >
            <button
               class="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
               <div class="mx-auto"></div>
               <ul class="navbar-nav">
                  <li class="nav-item">
                     <a class="nav-link text-dark" href="../../virtual-tour.html">Virtual Tour</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link text-dark" href="../../about.html">About</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link text-dark" href="../../akomodasi.html">Akomodasi</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link text-dark" href="../../rencana-perjalanan.html"
                        >Rencana Perjalanan</a
                     >
                  </li>
                  <li class="nav-item">
                     <a class="nav-link text-dark" href="../../guide.html">Guide</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </header>
`;

class Header extends HTMLElement {
   constructor() {
   super(); 
   }

   connectedCallback() {
      // const tailwind = document.querySelector('link[href*="tailwind"]');
      const bootstrap = document.querySelector('link[href*="bootstrap"]');
      const shadowRoot = this.attachShadow({ mode: 'closed' });

      // if (tailwind) {
      // shadowRoot.appendChild(tailwind.cloneNode());
      // }
      if (bootstrap) {
      shadowRoot.appendChild(bootstrap.cloneNode());
      }

      shadowRoot.appendChild(headerTemplate.content);
   }
}

customElements.define('header-component', Header);