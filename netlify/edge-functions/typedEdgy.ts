export default () => {
  interface Pet {
    name: string;
    age: number;
  }
  const dog: Pet = {
    name: "Leopold",
    age: 1,
  };
  new Response(
    `Hello from living on the typed edge. I have a dog and his name is {dog.name}`
  );
};
