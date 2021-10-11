import { Copier } from "./copier";
import { Destination } from "./destination";
import { Source } from "./source";

class SourceStub implements Source{
  characters:string[] = ["a", "b", "c", "d", "e", "f","\n"];
  index:number = 0;
  getCharacter(): string {
    const character = this.characters[this.index];
    this.index=this.index+1;
    return character;
  }


}

class DestinationFake implements Destination{
  characters:string[] = [];
  setCharacter(character: string): void {
    this.characters.push(character);
  }
}

describe("Test of character copier", function() {
  it("reads characters from a source and copies them to a destination one character at a time.", function() {
    const source = new SourceStub();
    const destination = new DestinationFake();
    const copier = new Copier(source, destination);

    copier.copy();
    expect(destination.characters).toContainEqual("a");
  });

  it(" should read characters from the source and copy them to the destination until the source returns a newline.", function(){
    const source = new SourceStub();

    const destination = new DestinationFake();
    const copier = new Copier(source, destination);

    copier.copy();

    expect(destination.characters).toEqual(["a", "b", "c", "d", "e", "f"]);
  });
});
