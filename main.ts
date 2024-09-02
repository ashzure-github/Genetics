//Classes, types, etc.

interface RGBinterface {
  R: number;
  G: number;
  B: number;
}

class Individual {
  key: string;
  color?: RGBinterface;
  parent1?: Individual;
  parent2?: Individual;

  constructor(key: string, color: RGBinterface);
  constructor(key: string, parent1: Individual, parent2: Individual);
  constructor(
    arg1: string,
    arg2: RGBinterface | Individual,
    arg3?: Individual
  ) {
    this.key = arg1;

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

  // TODO: procreation. Store in array of individuals.
}

//Functions

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

let IndividualArray: Individual[] = [
  new Individual("ancestorRed", { R: 255, G: 0, B: 0 }),
  new Individual("ancestorGreen", { R: 0, G: 255, B: 0 }),
  new Individual("ancestorBlue", { R: 0, G: 0, B: 255 }),
];

//HOW TO USE:
// run program.
// 1. create new Individual from desired parents
// 2. call procreate() on Individual's key to assign them their color.
// 3. use console.log on the Individual's color property to find out their color.
