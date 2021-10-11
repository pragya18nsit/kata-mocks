import { Source } from "./source";
import { Destination } from "./destination";

export class Copier
{
  private source: Source;
  private destination: Destination;

  constructor(source: Source, destination: Destination) {
    this.source = source;
    this.destination = destination;
  }

  copy() {
    let character = this.source.getCharacter();
    while( character !== "\n"){
      this.destination.setCharacter(character);
      character = this.source.getCharacter();
    }
  }
}