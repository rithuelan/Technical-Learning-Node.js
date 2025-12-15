import DataLoader from "dataloader";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Batch function
const batchUsers = async (ids) => {
  console.log("Fetching from DB for IDs:", ids);
  return ids.map(id => users.find(u => u.id === id));
};

const userLoader = new DataLoader(batchUsers);

async function run() {
  const u1 = await userLoader.load(1);
  const u2 = await userLoader.load(2);
  const u3 = await userLoader.load(1); // Cached
  console.log(u1, u2, u3);
}

run();
