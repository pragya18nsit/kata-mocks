# js-kata-starter

Starter project for kata (Node, TypeScript, Jest)

## Installation

```shell
git clone https://github.com/mathieueveillard/js-kata-starter.git
cd js-kata-starter
npm install
```

## Development

```shell
npm test
```

## Problem

Character Copy Kata
The character copier is a simple class that reads characters from a source and copies them to a destination 
one character at a time.
When the method Copy is called on the copier then it should read characters from the source and copy them to the
destination until the source returns a newline (\n).
The exercise is to implement the character copier using test doubles for the source and the destination -
try using spies (manually written mocks) and mocks written with a mocking framework.
Start from these definitions:

## Implementation

public class Copier
{
public Copier(…) {}
public void Copy() {}
}

public interface ISource
{
char GetChar();
}

public interface IDestination
{
void SetChar(char character);
}