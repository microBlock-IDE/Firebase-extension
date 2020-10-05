Blockly.defineBlocksWithJsonArray([
{
  "type": "firebase_config",
  "message0": "Firebase config %1 Database URL: %2 Token: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "databaseURL",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "token",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F1C40F",
  "tooltip": "Config for connect to Firebase Realtime Database",
  "helpUrl": ""
},
{
  "type": "firebase_get",
  "message0": "Firebase get from %1",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#F1C40F",
  "tooltip": "Config for connect to Firebase Realtime Database",
  "helpUrl": ""
},
{
  "type": "firebase_set",
  "message0": "Firebase  %1 set to %2",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "data"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F1C40F",
  "tooltip": "Set data in Firebase Realtime Database",
  "helpUrl": ""
},
{
  "type": "firebase_push",
  "message0": "Firebase  %1 push %2",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "data"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F1C40F",
  "tooltip": "Push new data to list in Firebase Realtime Database",
  "helpUrl": ""
},
{
  "type": "firebase_delete",
  "message0": "Firebase  %1 delete",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F1C40F",
  "tooltip": "Delete data in Firebase Realtime Database",
  "helpUrl": ""
}
]);
