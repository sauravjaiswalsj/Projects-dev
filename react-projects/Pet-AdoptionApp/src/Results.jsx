import Pet from './Pet'

const Results = ({ pets }) => {
    return (
        <div className='search'>
            {!pets.length ? Pet(
                <h1>No Pets fould</h1>
            ) : (
                pets.map(pet => (
                    <Pet
                        animal={pet.animal}
                        name={pet.name}
                        breed={pet.breed}
                        image={pet.image}
                        location={`${pet.city}, ${pet.state}`}
                        key={pet.id}
                    />))
            )}
        </div>
    );
};

export default Results;