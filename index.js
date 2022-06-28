const {
  ChainFactoryConfigs,
  ChainFactory,
  Chain,
  AppConfigs,
  ChainParams,
} = require("./node_modules/xp.network");

(async () => {
  // Instantiate the chain factory for the
  // Connecting to the mainnnets of all the blockchains:
  const mainnetConfig = await ChainFactoryConfigs.MainNet();
  const mainnetFactory =  ChainFactory(AppConfigs.MainNet(), mainnetConfig);
  console.log(mainnetFactory);

  // Connecting to the testnets of all the blockchains:
  const testnetConfig = await ChainFactoryConfigs.TestNet();
  const testnetFactory = ChainFactory(AppConfigs.TestNet(), testnetConfig);

  // // Switching between the mainnets & the testnets:
  // const factory= ChainFactory = mainnetFactory;
  // const CONFIG= Partial<ChainParams> = mainnetConfig;
})();
