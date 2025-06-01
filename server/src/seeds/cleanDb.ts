import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];
const collections = await model?.db?.db?.listCollections({
  name: model?.collection?.name,
}).toArray();

if (collections && collections.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
