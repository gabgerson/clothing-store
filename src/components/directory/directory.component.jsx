import React from 'react';
import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss'

const Directory = ({categories}) =>  {
return(
  <div className='directory-container'> 
  {categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ))}
</div>
)
}

// class Directory extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       sections: [{
//             title: 'hats',
//             imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//             id: 1,
//             linkUrl: 'shop/hats'
//           },
//           {
//             title: 'jackets',
//             imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//             id: 2,
//             linkUrl: 'shop/jackets'
//           },
//           {
//             title: 'sneakers',
//             imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//             id: 3,
//             linkUrl: 'shop/sneakers'
//           },
//           {
//             title: 'womens',
//             imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//             size: 'large',
//             id: 4,
//             linkUrl: 'shop/womens'
//           },
//           {
//             title: 'mens',
//             imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//             size: 'large',
//             id: 5,
//             linkUrl: 'shop/mens'
//           }]
//     }
//   }

//   render() {
//     return (
//       <div className='directory-menu'>
//         {
//         this.state.sections.map(({title, imageUrl, id, size }) => (
//             <CategoryItem key={id} title={title} imageUrl={imageUrl} size={size} />
//         ))
//        }
//       </div>
//       )
//   }
// }

export default Directory