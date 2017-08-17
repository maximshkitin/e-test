import { InMemoryDbService } from 'angular2-in-memory-web-api';

import { Details } from "./details";

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
    return {details};
  }
}