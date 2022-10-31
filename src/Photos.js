import React from 'react'

export default function Photos(props) {
	console.log(props)
	if (props.photos) {
		return (
			<div className="Photos">
				{props.photos.map((photo, index) => {
					return (
						<img
							className="img-fluid rounded my-2"
							src={photo.src.landscape}
							alt={photo.alt}
							key={index}
						/>
					)
				})}
			</div>
		)
	} else {
		return null
	}
}
