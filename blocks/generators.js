Blockly.Python['firebase_get'] = function(block) {
  Blockly.Python.definitions_['import_firebase'] = 'import firebase';

  var value_databaseURL = Blockly.Python.valueToCode(block, 'databaseURL', Blockly.Python.ORDER_ATOMIC);
  var value_token = Blockly.Python.valueToCode(block, 'token', Blockly.Python.ORDER_ATOMIC);

  var code = `firebase.config(${value_databaseURL}, ${value_token})\n`;
  return code;
};

Blockly.Python['firebase_get'] = function(block) {
  Blockly.Python.definitions_['import_firebase'] = 'import firebase';

  var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);

  var code = `firebase.get(${value_path})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['firebase_set'] = function(block) {
  Blockly.Python.definitions_['import_firebase'] = 'import firebase';

  var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = `firebase.set(${value_path}, ${value_data})\n`;
  return code;
};

Blockly.Python['firebase_push'] = function(block) {
  Blockly.Python.definitions_['import_firebase'] = 'import firebase';

  var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = `firebase.push(${value_path}, ${value_data})\n`;
  return code;
};

Blockly.Python['firebase_delete'] = function(block) {
  Blockly.Python.definitions_['import_firebase'] = 'import firebase';

  var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);

  var code = `firebase.delete(${value_path})\n`;
  return code;
};
