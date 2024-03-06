import React from 'react'

const Course = ({image,title, description}) => {

  return (
    <div className="card">
  <div className="card-image">
    <figure >
      <img src={image} alt="Kurslarım"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{title}</p>
      </div>
    </div>

    <div className="content">
        <p className="title is-4">{description}</p>
    </div>
  </div>
</div>

  )
}

export default Course
