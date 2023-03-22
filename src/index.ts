import { IApi } from "umi";
const DIR_NAME = "plugin-vscode";

export default (api: IApi) => {
  api.describe({
    key: "vscode",
    config: {
      schema(Joi) {
        return Joi.object({});
      },
    },
  });

  api.modifyDefaultConfig(async (memo) => {
    memo.hash = false;

    memo.history = {
      type: "hash",
    };

    if (process.env.NODE_ENV === "production") {
      memo.extraBabelPlugins = ["babel-plugin-dynamic-import-node"];
      memo.publicPath = "./";
    }

    return memo;
  });

  api.addHTMLStyles(() => {
    const addItem = {
      content: ``,
    };
    return [addItem];
  });
};
