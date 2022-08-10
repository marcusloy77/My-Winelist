const wineTags = ['Angular', 'Aystere', 'Barnyard', 'Big', 'Bright', 'Buttery', 'Cassis', 'Charcoal', 'Chew Tannins', 'Cigar Box', 'Complex', 'Creamy'
, 'Crisp', 'Dense', 'Earthy', 'Elegant', 'Fat', 'Flabby', 'Flamboyant', 'Fleshy', 'Full', 'Grippy', 'Oaky', 'Herby', 'Intense', 'Fruity', 'Soily', 'Jammy', 'Juicy'
, 'Lees', 'Light', 'Minerally', 'Oaked', 'Opulent', 'Refined', 'Silky', 'Smooth', 'Soft', 'Sweet', 'Steely', 'Structured', 'Tight', 'Toasty', 'Unctuous', 'Oily', 'Unoaked', 'Velvety']

const Search = () => {

    const fetchSearches = (event) => {
        event.preventDefault()
        return null
    }

    return (
        <div>
            <h3>Search For Wines</h3>
            <form className="search-form" id='search' type='submit' onSubmit={fetchSearches}>
                <h3 className='sub-title'>Find a Wine</h3>
                <label>Name:</label>
                <input type="text" name='searchQuery' />
                <button>Go</button>
          </form>
        </div>
    )
}

export default Search