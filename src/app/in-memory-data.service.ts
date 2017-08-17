import { InMemoryDbService } from 'angular2-in-memory-web-api';

import { Details } from "./interfaces/details";
import { Slide } from "./interfaces/slide";
import { VillasPreview } from "./interfaces/villas-preview";
import { VillasDescription } from "./interfaces/villas-description";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const details = [
      { 
        id: 0,
        title: 'Villa Kukkula',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat nostrum dolore possimus qui tempora sunt eos minus, perspiciatis cumque laudantium labore incidunt delectus est, repudiandae explicabo exercitationem sapiente vitae.',
        cover: {
          src: 'assets/image/details-bg-xl.jpg',
          srcset: 'assets/image/details-bg-xl.jpg 1280w, assets/image/details-bg-l.jpg 1024w, assets/image/details-bg-m.jpg 768w, assets/image/details-bg-s.jpg 320w',
          alt: 'anything'
        },
        stnInfo1: 
          {
            title: 'Perustiedot',
            items: [
              {
                title: 'Pinta-ala',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              },
              {
                title: 'Henklomara',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              },
              {
                title: 'Lemmilkit',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              },
              {
                title: 'Kuvaus',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda maxime molestiae laboriosam nihil? Nam debitis, cumque ratione explicabo doloremque tempore, voluptates repellendus, ducimus harum, eos velit quos animi sapiente fuga.',
              },
              {
                title: 'Estasuidet',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              }]
          },
        stnInfo2:
          {
            title: 'Vaructus',
            items: [
              {
                title: 'Keittio',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              },
              {
                title: 'Makuuhuone',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              },
              {
                title: 'Kodinhoito',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              },
              {
                title: 'Muuta',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              }
            ]
          },
        stnInfo3:
          {
            title: 'Kuvia Villa Kantrista',
            description: 'Lorem ipsum dolor sit amet.',
            thumbnails: [
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
        
            ]
          },

      },
      { 
        id: 1,
        title: 'Villa Kantri',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat nostrum dolore possimus qui tempora sunt eos minus, perspiciatis cumque laudantium labore incidunt delectus est, repudiandae explicabo exercitationem sapiente vitae.',
        cover: {
          src: 'assets/image/details-bg-xl.jpg',
          srcset: 'assets/image/details-bg-xl.jpg 1280w, assets/image/details-bg-l.jpg 1024w, assets/image/details-bg-m.jpg 768w, assets/image/details-bg-s.jpg 320w',
          alt: 'anything'
        },
        stnInfo1: 
          {
            title: 'Perustiedot',
            items: [
              {
                title: 'Pinta-ala',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              },
              {
                title: 'Henklomara',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              },
              {
                title: 'Lemmilkit',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              },
              {
                title: 'Kuvaus',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda maxime molestiae laboriosam nihil? Nam debitis, cumque ratione explicabo doloremque tempore, voluptates repellendus, ducimus harum, eos velit quos animi sapiente fuga.',
              },
              {
                title: 'Estasuidet',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              }]
          },
        stnInfo2:
          {
            title: 'Vaructus',
            items: [
              {
                title: 'Keittio',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              },
              {
                title: 'Makuuhuone',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              },
              {
                title: 'Kodinhoito',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              },
              {
                title: 'Muuta',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              }
            ]
          },
        stnInfo3:
          {
            title: 'Kuvia Villa Kantrista',
            description: 'Lorem ipsum dolor sit amet.',
            thumbnails: [
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
        
            ]
          },

      },
      { 
        id: 2,
        title: 'Villa Akuniila',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat nostrum dolore possimus qui tempora sunt eos minus, perspiciatis cumque laudantium labore incidunt delectus est, repudiandae explicabo exercitationem sapiente vitae.',
        cover: {
          src: 'assets/image/details-bg-xl.jpg',
          srcset: 'assets/image/details-bg-xl.jpg 1280w, assets/image/details-bg-l.jpg 1024w, assets/image/details-bg-m.jpg 768w, assets/image/details-bg-s.jpg 320w',
          alt: 'anything'
        },
        stnInfo1: 
          {
            title: 'Perustiedot',
            items: [
              {
                title: 'Pinta-ala',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              },
              {
                title: 'Henklomara',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              },
              {
                title: 'Lemmilkit',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              },
              {
                title: 'Kuvaus',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda maxime molestiae laboriosam nihil? Nam debitis, cumque ratione explicabo doloremque tempore, voluptates repellendus, ducimus harum, eos velit quos animi sapiente fuga.',
              },
              {
                title: 'Estasuidet',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              }]
          },
        stnInfo2:
          {
            title: 'Vaructus',
            items: [
              {
                title: 'Keittio',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              },
              {
                title: 'Makuuhuone',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              },
              {
                title: 'Kodinhoito',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              },
              {
                title: 'Muuta',
                points: [
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.',
                  'Lorem ipsum dolor sit amet.'
                ]
              }
            ]
          },
        stnInfo3:
          {
            title: 'Kuvia Villa Kantrista',
            description: 'Lorem ipsum dolor sit amet.',
            thumbnails: [
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
              {
                src: 'assets/image/details-square-thumb.jpg',
                origImage: 'assets/image/details-popup-image.jpg',
                alt: 'anything'
              },
        
            ]
          },

      }
    ];
    const villasPreview: VillasPreview[] = [
      {
        id: 0,
        title: 'Villa Kukkula',
        titleColor: 'green',
        imgPreview: {
          src: 'assets/image/main-content-item.jpg',
          alt: 'anything'
        },
        icons: [
        ]
      },
      {
        id: 1,
        title: 'Villa Kantri',
        titleColor: 'blue',
        imgPreview: {
          src: 'assets/image/main-content-item.jpg',
          alt: 'anything'
        },
        icons: [
          'paw',
          'wheelchair'
        ]
      },
      {
        id: 2,
        title: 'Villa Akuiina',
        titleColor: 'red',
        imgPreview: {
          src: 'assets/image/main-content-item.jpg',
          alt: 'anything'
        },
        icons: [
          'paw',
        ]
      },
    ];
    const slides: Slide[] = [
      { 
          src: 'assets/image/main-slider-img-xl.jpg', 
          srcset: 'assets/image/main-slider-img-retina.jpg 4000w, assets/image/main-slider-img-l.jpg 1024w, assets/image/main-slider-img-m.jpg 768w, assets/image/main-slider-img-s.jpg 320w, assets/image/main-slider-img-xl.jpg 1280w',
          caption: 'Tänne on helppo asettua ja unohtaa hetkeksi muu maailma.',
          author: 'Vieraskirjasta lainattu',
          alt: 'anything'
      },
      { 
          src: 'assets/image/main-slider-img-xl.jpg', 
          srcset: 'assets/image/main-slider-img-retina.jpg 4000w, assets/image/main-slider-img-l.jpg 1024w, assets/image/main-slider-img-m.jpg 768w, assets/image/main-slider-img-s.jpg 320w, assets/image/main-slider-img-xl.jpg 1280w',
          caption: 'Tänne on helppo asettua ja unohtaa hetkeksi muu maailma.',
          author: 'Vieraskirjasta lainattu',
          alt: 'anything'
      },
      { 
          src: 'assets/image/main-slider-img-xl.jpg', 
          srcset: 'assets/image/main-slider-img-retina.jpg 4000w, assets/image/main-slider-img-l.jpg 1024w, assets/image/main-slider-img-m.jpg 768w, assets/image/main-slider-img-s.jpg 320w, assets/image/main-slider-img-xl.jpg 1280w',
          caption: 'Tänne on helppo asettua ja unohtaa hetkeksi muu maailma.',
          author: 'Vieraskirjasta lainattu',
          alt: 'anything'
      },
      { 
          src: 'assets/image/main-slider-img-xl.jpg', 
          srcset: 'assets/image/main-slider-img-retina.jpg 4000w, assets/image/main-slider-img-l.jpg 1024w, assets/image/main-slider-img-m.jpg 768w, assets/image/main-slider-img-s.jpg 320w, assets/image/main-slider-img-xl.jpg 1280w',
          caption: 'Tänne on helppo asettua ja unohtaa hetkeksi muu maailma.',
          author: 'Vieraskirjasta lainattu',
          alt: 'anything'
      },
      { 
          src: 'assets/image/main-slider-img-xl.jpg', 
          srcset: 'assets/image/main-slider-img-retina.jpg 4000w, assets/image/main-slider-img-l.jpg 1024w, assets/image/main-slider-img-m.jpg 768w, assets/image/main-slider-img-s.jpg 320w, assets/image/main-slider-img-xl.jpg 1280w',
          caption: 'Tänne on helppo asettua ja unohtaa hetkeksi muu maailma.',
          author: 'Vieraskirjasta lainattu',
          alt: 'anything'
      },
      { 
          src: 'assets/image/main-slider-img-xl.jpg', 
          srcset: 'assets/image/main-slider-img-retina.jpg 4000w, assets/image/main-slider-img-l.jpg 1024w, assets/image/main-slider-img-m.jpg 768w, assets/image/main-slider-img-s.jpg 320w, assets/image/main-slider-img-xl.jpg 1280w',
          caption: 'Tänne on helppo asettua ja unohtaa hetkeksi muu maailma.',
          author: 'Vieraskirjasta lainattu',
          alt: 'anything'
      }
    ];
    const thumbs = [
      { src: 'assets/image/main-circled-thumbnail.jpg', alt: 'anything' },
      { src: 'assets/image/main-circled-thumbnail.jpg', alt: 'anything' },
      { src: 'assets/image/main-circled-thumbnail.jpg', alt: 'anything' },
      { src: 'assets/image/main-circled-thumbnail.jpg', alt: 'anything' },
      { src: 'assets/image/main-circled-thumbnail.jpg', alt: 'anything' },
      { src: 'assets/image/main-circled-thumbnail.jpg', alt: 'anything' }
    ];
    const villasDescription: VillasDescription[] = [
      {
        id: 0,
        title: 'Villa Kukkula',
        titleColor: 'green',
        img: {
            src: 'assets/image/main-content-item.jpg',
            alt: 'anything'
        },
        capabilities: '8 hlo',
        additionalServices: [ 'wheelchair', 'paw' ],
        territory: '134,5 m² (3 h + tupakeittiö)',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit, adipisci eos autem optio quae.'
      },
      {
        id: 1,
        title: 'Villa Kantri',
        titleColor: 'blue',
        img: {
            src: 'assets/image/main-content-item.jpg',
            alt: 'anything'
        },
        capabilities: '6+2 hlo',
        additionalServices: [ 'wheelchair' ],
        territory: '134,5 m² (3 h + tupakeittiö)',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit, adipisci eos autem optio quae.'
      },
      {
        id: 2,
        title: 'Villa Akutiina',
        titleColor: 'red',
        img: {
            src: 'assets/image/main-content-item.jpg',
            alt: 'anything'
        },
        capabilities: '8 hlo',
        additionalServices: [],
        territory: '107 m² (4 h + tupakeittiö) + rantasauna 25 m²',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit, adipisci eos autem optio quae.'
      }
    ]

    return {details, villasPreview, slides, thumbs, villasDescription};
  }
}