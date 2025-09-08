// Name: DataType
// ID: Data-New-Types
// By: scratch_craft_2 <https://scratch.mit.edu/users/scratch_craft_2/>
// License: MPL-2.0

(function (Scratch) {
    "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }

    class DataType {
      getInfo() {
        return {
          id: " Data-New-Types",
          name: "DataType",
          color1: "#59c059",
          blocks: [
            {
              opcode: "TypeSTR",
              blockType: Scratch.BlockType.REPORTER,
              text: "Str [valuestr]",
              arguments: {
                valuestr: {
                  defaultValue: "1",
                  type: Scratch.ArgumentType.STRING,
                },
            },
           },
          {
              opcode: "TypeNum",
              blockType: Scratch.BlockType.REPORTER,
              text: "Num [valuenum]",
              arguments: {
                valuenum: {
                  defaultValue: "1",
                  type: Scratch.ArgumentType.STRING,
                },
            },
           },
           { 
              opcode: "TypeBool",
              blockType: Scratch.BlockType.REPORTER,
              text: "Boolean [valuebool]",
              arguments: {
                valuebool: {
                  defaultValue: "1",
                  type: Scratch.ArgumentType.STRING,
                },
            },
           },
          ],
        };
      }
TypeSTR(args) {
 let str = "([args.valuestr])";
 return str ;
}
TypeNum(args) {
  return ([args.valuenum] + 0);
}
TypeBool(args) {
  if [args.valuebool] {
  return True 
  }
  return False
}
    }
    Scratch.extensions.register(new DataType());
  })(Scratch);
