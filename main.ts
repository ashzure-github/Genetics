//Classes, types, etc.

interface RGBinterface {
  R: number;
  G: number;
  B: number;
}

class Individual {
  color?: RGBinterface;
  parent1?: Individual;
  parent2?: Individual;

  constructor(color: RGBinterface);
  constructor(parent1: Individual, parent2: Individual);
  constructor(arg2: RGBinterface | Individual, arg3?: Individual) {
    if (isRGBinterface(arg2)) {
      this.color = arg2;
      this.parent1 = undefined;
      this.parent2 = undefined;
    } else {
      this.parent1 = arg2;
      this.parent2 = arg3;
      this.color = undefined;
    }
  }
}

//Functions

function procreate(IndividualKey:string) : void{


}

function getParents(IndividualKey:string) : Individual | undefined {
    const child : Individual = IndividualsDictionary[IndividualKey] //gets the individual we're referring to by using the provided key

    if (!child) {
        console.log("Cannot find child with provided key in dictionary. Contact your Ash for more info.");
        return undefined;
    }
    else {
        return 
    }
}

function isRGBinterface(arg: any): arg is RGBinterface {
  //if all of these conditions are true, it tells ts that within the scope the function is called,
  //the argument used is of the type "RGBinterface". This allows handling specific to that type rather than "object".
  return (
    typeof arg === "object" &&
    arg != null &&
    "R" in arg &&
    "G" in arg &&
    "B" in arg
  );
}

//Data

const IndividualsDictionary: { [key: string]: Individual } = {
  ancestorRed: new Individual({ R: 255, G: 0, B: 0 }),
  ancestorGreen: new Individual({ R: 0, G: 255, B: 0 }),
  ancestorBlue: new Individual({ R: 0, G: 0, B: 255 }),
  ancestorWhite: new Individual({ R: 255, G: 255, B: 255 }),
  ancestorBlack: new Individual({ R: 0, G: 0, B: 0 }),
  hardcodedIndividual: new Individual("")
};
