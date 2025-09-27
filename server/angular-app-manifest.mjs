
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cleliafsilva.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/index-2"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/index-3"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/about"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/attorneys"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/attorney-details"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/case-studies"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/case-study-details"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/blog"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/blog-details"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/practices"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/practice-details"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/appointment"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/testimonials"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/faq"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/privacy-policy"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/terms-conditions"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/contact"
  },
  {
    "renderMode": 2,
    "route": "/cleliafsilva.github.io/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 57840, hash: '0a6e6dfc41d759897feb819fb9b5d2f59a06e4ce5c279033600dfbcd93da9972', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23796, hash: '7ffd00478ba3c9b6677749f61b0ea3f567d9314bc8d6ba88a489e2c115965ead', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index-3/index.html': {size: 246961, hash: 'a5cc1991005cf662bc34246bff7dabd728134e98bb4983b3dda9790f78417909', text: () => import('./assets-chunks/index-3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 229732, hash: '53233ad4bc350dbb3fbfa9f43067d1c3e315c3c7ea7640d31456f00efc01c71a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'index-2/index.html': {size: 236247, hash: 'ac7457aacfb64ce8c65d3ff23eb00dcbd21e046a950b078f46e1d6567e6908b5', text: () => import('./assets-chunks/index-2_index_html.mjs').then(m => m.default)},
    'attorneys/index.html': {size: 142068, hash: '3aaf9f4a63a5517c8955175f8468962228ebacccc8d534499ab338b2451a33e6', text: () => import('./assets-chunks/attorneys_index_html.mjs').then(m => m.default)},
    'attorney-details/index.html': {size: 169284, hash: '624b62b603ac8676f41d13560cba6f266c38f7c9a62cc2820f620f1dbf692dbe', text: () => import('./assets-chunks/attorney-details_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 163521, hash: '73da4d1128618632fd85880c7222e1910f89c29172fc497bc6d823549e790863', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'case-studies/index.html': {size: 138440, hash: '387c917db891a88e19c2a2354759ab1ff5efeb2f122bbfe733fa51ca22beb3bd', text: () => import('./assets-chunks/case-studies_index_html.mjs').then(m => m.default)},
    'case-study-details/index.html': {size: 147179, hash: '309cce6c6139e0e31c83fc9505ea5472356b0941c7f2aa801b362897bce98046', text: () => import('./assets-chunks/case-study-details_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 148016, hash: 'a15f1bcb7bac8248ac2c4e176cc69f63baaafa631ad00e80401f2c94d1f255bc', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'practices/index.html': {size: 137833, hash: '0b6eb99e274683b815efbcbe464204d275add94efc1cf3cb1211d85538b694d5', text: () => import('./assets-chunks/practices_index_html.mjs').then(m => m.default)},
    'blog-details/index.html': {size: 176959, hash: 'f9e465d03d3a8f9efe83e630accc756e897482a0e5c3284d3c4afc0e099a5d6e', text: () => import('./assets-chunks/blog-details_index_html.mjs').then(m => m.default)},
    'practice-details/index.html': {size: 171808, hash: 'de8069ec99ceb7c4d7ab5138a028fb4caef449536d99d888fe04171639d6315d', text: () => import('./assets-chunks/practice-details_index_html.mjs').then(m => m.default)},
    'appointment/index.html': {size: 138974, hash: '37d5fe4a9edd37186dab6d36805f57f6d2a2d0517f5b40c91722f3ee5cd90035', text: () => import('./assets-chunks/appointment_index_html.mjs').then(m => m.default)},
    'testimonials/index.html': {size: 134454, hash: '4ba21bdeea460af92a71ec3f194963bf8e9f07d1c3553e028038a61b18413bc4', text: () => import('./assets-chunks/testimonials_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 144104, hash: '8cb05bf24e651d0fb288b06950405327c382ed395195149d6aa76d8980167010', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 133213, hash: 'f798e0055d4c428b08eeca2d072046b11832582e5916156a7f010d7e7aba20eb', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'terms-conditions/index.html': {size: 134552, hash: '2f2bac1e10a9940f38877f7123dea4c35628b86e7e05835782db309d5782d435', text: () => import('./assets-chunks/terms-conditions_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 143019, hash: '19cfaa6c301cbc9bb0820935424cb17c7ad84e0f8fbb98c23d7e1582cfb21795', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-IURGN7HJ.css': {size: 406375, hash: 'Fsih24y9NRA', text: () => import('./assets-chunks/styles-IURGN7HJ_css.mjs').then(m => m.default)}
  },
};
