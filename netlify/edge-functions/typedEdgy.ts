interface Pet {
  name: string;
  age: number;
}

export default () => {
  const dog: Pet = {
    name: "Leopold",
    age: 1,
  };
  return new Response(
    `Hello from living on the typed edge. I have a dog and his name is ${dog.name}`
  );
};
