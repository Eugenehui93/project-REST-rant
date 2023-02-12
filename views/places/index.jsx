const React = require('react')
const places = require('../../models/places')
const Def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((place,index) => {
        return (
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                    <a href={`/places/${index}`}>{place.name}</a>
                <p className="text-center">
                {places.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {places.city}, {places.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index
