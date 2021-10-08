import { Copier } from "./copier";
import { Destination } from "./destination";
import { Source } from "./source";

class SourceStub implements Source{
  getCharacter(): string {
    return "a";
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
});
