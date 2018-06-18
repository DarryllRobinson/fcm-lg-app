import React from 'react'
import ReactTV from 'react-tv'

const talks = [
  {
    title: 'The Melting Pot of JavaScript - Dan Abramov',
    thumbUrl: 'https://pbs.twimg.com/media/DKaSdA5V4AIsboQ.jpg'
  },
  {
    title: 'Back to React - Andrew Clark',
    thumbUrl: 'https://i.ytimg.com/vi/ZVYVtUFDf28/maxresdefault.jpg'
  },
  {
    title: 'A Cartoon Guide to the Wilds of Data Handling - Lin Clark',
    thumbUrl: 'https://i.ytimg.com/vi/WIqbzHdEPVM/maxresdefault.jpg'
  },
  {
    title: 'Lightning Talks - Nicolas Gallagher',
    thumbUrl: 'https://i.ytimg.com/vi/RBg2_uQE4KM/maxresdefault.jpg'
  },
  {
    title: 'Scratching React Fiber - Raphael Amorim',
    thumbUrl: 'https://i.imgur.com/xc6C3Lr.jpg'
  },
  {
    title: 'Lightning Talks - Devon Lindsey',
    thumbUrl: 'https://i.ytimg.com/vi/EUjQB3I53iI/maxresdefault.jpg',
  },
  {
    title: 'Lightning Talks - Adam Wolff',
    thumbUrl: 'https://i.ytimg.com/vi/n4Hn1kdgd5g/maxresdefault.jpg'
  },
];

function List(data) {
  let list = []
  data.forEach((item, index) => {
    const tile = (
      <div className="tile" key={index}>
        <div className="tile__media">
          <img className="tile__img" src={item.thumbUrl}/>
        </div>
        <div className="tile__details"/>
        <div className="tile__title">
          {item.title}
        </div>
      </div>
    )
    list.push(tile)
  })
  return list
}

function HorizontalList({ title, data }) {
  return (
    <div className="contain">
      <h1>{title}</h1>
      <div class="row">
        <div class="row__inner">
          {List(data)}
        </div>
      </div>
    </div>
  )
}

ReactTV.render(
  <div className='my-app'>
    <HorizontalList title='Talks' data={talks} />
  </div>,
  document.querySelector('#root')
)
