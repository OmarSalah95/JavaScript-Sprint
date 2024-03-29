// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/
class DinoMaker{
  constructor(name, diet, weight, length, period){
    this.name = name;
    this.diet = diet;
    this.weight = weight;
    this.length =length;
    this.period = period;
  }
  tellMeWhatYouEat(){
    const meatResponse = 'I would love some steak!'
    const saladResponse = 'Maybe a salad, or some grass.'
    if (this.diet == 'carnivorous'){
      return meatResponse
    }else if (this.diet == 'omnivorous'){
      return `${meatResponse} and ${saladResponse}`
    }else{
      return saladResponse
    }
  }
}

const fido = new DinoMaker('tyrannosaurus', 'omnivorous', '7000kg', '12m', 'Late Cretaceious')

console.log(fido.tellMeWhatYouEat());






// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious
const dinosaur1 =  new DinoMaker('tyrannosaurus', 'carnivorous', '7000kg', '12m', 'Late Cretaceious');
//  {
//   name : 'Tyrannosaurus',
//   diet : 'Carnivorous',
//   weight : '7000kg',
//   length : '12m',
//   period : 'Late Cretaceious', 
// }
// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

const dinosaur2 =  new DinoMaker('stegosaurus', 'herbivorous', '2000kg', '9m', 'Late Jurassic');
// {
//   name : 'stegosaurus',
//   diet : 'herbivorous',
//   weight : '2000kg',
//   length : '9m',
//   period : 'Late Jurassic'
// }
// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious
const dinosaur3 =  new DinoMaker('velociraptor', 'carnivorous', '15kg', '1.8m', 'Late Cretaceious');
// {
//   name : 'velociraptor',
//   diet : 'carnivorous',
//   weight : '15kg',
//   length : '1.8m',
//   period : 'Late Cretaceious'
// }
// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(dinosaur1.weight);

// What was the diet of a velociraptor?
console.log(dinosaur3.diet);

// How long was a stegosaurus?
console.log(dinosaur2.length);

// What time period did tyrannosaurus live in?
console.log(dinosaur1.period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
dinosaur1.roar = () => 'RAWERSRARARWERSARARARRRR!'
console.log(dinosaur1.roar())


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests WITHOUT using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array. 
Once you have the new array created, sort the universities alphabetically and log the result. */

// Method that can be used for ALL
// const universities = [];
// const contactInfo = [];
// const uni = [];

// for (let i = 0; i < graduates.length; i++) {
//   const graduate = graduates[i];
//   const { university, first_name, email } = graduate;

//   universities.push(university);

//   contactInfo.push(`${first_name} ${email}`);

//   if (university.includes('Uni')) {
//     uni.push(university);
//   }
// }

// method 1
 const universities = graduates.map((grad) => grad.university).sort();

// method 2
// const universities = []
// for (let i = 0; i < graduates.length; i++) {
//   const grad = graduates[i];
//   universities.push(grad.university)
//   universities.sort()
// }


console.log(universities)

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
// Method 1
const contactInfo = graduates.map(grad => (`${grad.first_name} ${grad.email}`));

// method 2
// const contactInfo = []
// for (let i = 0; i < graduates.length; i++) {
//   const grad = graduates[i];
//   const name = grad.first_name;
//   const email = grad.email;
//   const gradInfo = name + ' ' + email; // `${name} ${email}`
// contactInfo.push(gradInfo)
// }
// console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
//  Method 1
const uni = graduates.filter((grad) => grad.university.includes('Uni')).map(grad => grad.university).sort();

// Method 2
// const uni = []
// for (let i = 0; i < graduates.length; i++) {
//      const grad = graduates[i];
//      if (grad.university.includes('Uni')) {
//           uni.push(grad.university);
//         }
// }
console.log(uni);


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

// method used for ALL

// const animalNames = [];
// const lowerCase = [];
// const largerPopulation = [];
// let populationTotal = 0;

// for (let i = 0; i < zooAnimals.length; i++) {
//   const animal = zooAnimals[i];
//   const { animal_name, scientific_name, population} = animal;
//   populationTotal += population;

//   animalNames.push(animal_name + scientific_name);

//   lowerCase.push(animal_name.toLowerCase() );

//   if (population > 5 ) {
//     largerPopulation.push(animal);
//   }

// }

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
// Method 1
// const animalNames = zooAnimals.forEach((animal) => {this.name = animal.animal_name, this.scientific = animal.scientific_name});

// Method 2
const animalNames = []
for (let i = 0; i < zooAnimals.length; i++) {
     const animal = zooAnimals[i];
     animalNames.push(`Name : ${animal.animal_name}, Scientific: ${animal.scientific_name}`)
}
console.log(animalNames);

/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/
// Method 1
// const lowerCase = zooAnimals.map(animal => animal.animal_name.toLowerCase());

// Method 2
const lowerCase = []
for (let i = 0; i < zooAnimals.length; i++) {
     const animal = zooAnimals[i];
     lowerCase.push(animal.animal_name.toLowerCase())
}
console.log(lowerCase); 

/* Request 3: .filter() 

The zoos are concerned about animals with a lower population count. Find out which animals have a population less than 5.

*/
// Method 1
// const largerPopulation = zooAnimals.filter(animal => animal.population < 5);

// Method 2
const largerPopulation = []
for (let i = 0; i < zooAnimals.length; i++) {
     const animal = zooAnimals[i];
     const {population} = animal
    //  could use animal.notation
     if (population > 5 ){
     largerPopulation.push(animal)
   }
}
console.log(largerPopulation);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

*/
// Method 1
// const populationTotal = zooAnimals.reduce((acc, animal,) => acc + animal.population, 0);

// Method 2
let populationTotal = 0;
for (let i = 0; i < zooAnimals.length; i++) {
     const animal = zooAnimals[i];
     populationTotal += animal.population
    }
    console.log(populationTotal);

/* 

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/

// I did all in arrow notation.... does that mean I hit stretch?
// I also now added using for loops instead of array methods for the Array section.