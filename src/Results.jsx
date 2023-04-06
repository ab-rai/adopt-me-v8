import Pet from "./Pet";
const Results = (props) => {
  const { pets } = props;
  console.log(pets);
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
  //   return pets.map((pet) => (
  //     <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
  //   ));
};
export default Results;
