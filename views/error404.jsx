const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/cute-puppy.jpg" alt= "Floppy Eared Puppy"/>
                </div>
                Photo by <a href="https://unsplash.com/@mancity17?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Clarke</a> on <a href="https://unsplash.com/images/animals/puppies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
            </main>
        </Def>
    )
}
module.exports = error404
