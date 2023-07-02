migrate((db) => {
  const collection = new Collection({
    "id": "qe8huui24wbjd5k",
    "created": "2023-07-01 14:27:43.066Z",
    "updated": "2023-07-01 14:27:43.066Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uwlz4x3w",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lstuasid",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qe8huui24wbjd5k");

  return dao.deleteCollection(collection);
})
