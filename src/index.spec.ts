import { Copier } from "./copier";
import { Destination } from "./destination";
import { Source } from "./source";
import { mock } from "jest-mock-extended";


describe("Test of character copier", function() {
  it("reads characters from a source and copies them to a destination one character at a time.", function() {
    // HOW SHOULD I SET UP SOURCE SO THAT IT RETURNS "a"
    const source = mock<Source>();
    const destination = mock<Destination>();
    const copier = new Copier(source, destination);

    copier.copy();
    expect(destination.setCharacter).toHaveBeenCalledWith("a");
  });

  it(" should read characters from the source and copy them to the destination until the source returns a newline.", function(){
    const source = new SourceStub();

    const destination = new DestinationFake();
    const copier = new Copier(source, destination);

    copier.copy();

    expect(destination.characters).toEqual(["a", "b", "c", "d", "e", "f"]);
  });
});
