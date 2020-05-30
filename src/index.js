import {importPluginsJSONFile, ReactionAPICore} from "@reactioncommerce/api-core";
import Logger from "@reactioncommerce/logger";
import packageJson from "../package.json";
// import {kafkaSubscribe} from './kafkaConsumer.js';

const api = new ReactionAPICore({
  serveStaticPaths: ["public"],
  version: packageJson.version
});

/**
 * @summary Registers Reaction API plugins and then starts the app
 * @return {Promise<undefined>} undefined
 */
async function runApp() {
  const plugins = await importPluginsJSONFile("../plugins.json");
  // Comment added
  // Comment added
  // Comment added
  // Comment added
  await api.registerPlugins(plugins);

  await api.start();
  // await kafkaSubscribe(
  //
  //   'test',
  //   (message) => {
  //     send(message);
  //   }
  // );

}

runApp().catch((error) => {
  Logger.error(error);
  process.exit(1); // eslint-disable-line no-process-exit
});
