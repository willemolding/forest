initSidebarItems({"constant":[["EPOCHS_IN_DAY",""],["EPOCHS_IN_HOUR",""],["EPOCHS_IN_YEAR",""],["EPOCH_DURATION_SECONDS","Duration of each tipset epoch."],["EXPECTED_LEADERS_PER_EPOCH","The expected number of block producers in each epoch."],["FIRST_NON_SINGLETON_ADDR","Defines first available ID address after builtin actors"],["SECONDS_IN_DAY",""],["SECONDS_IN_HOUR",""],["SECONDS_IN_YEAR",""],["SECTOR_QUALITY_PRECISION","Precision used for making QA power calculations"]],"enum":[["ExitCode","ExitCode defines the exit code from the VM execution."]],"fn":[["check_empty_params","Used when invocation requires parameters to be an empty array of bytes"],["consensus_miner_min_power","Returns the minimum storage power required for each seal proof types."],["invoke_code",""],["is_account_actor","Returns true if the code belongs to an account actor."],["is_builtin_actor","Returns true if the code `Cid` belongs to a builtin actor."],["is_principal","Tests whether a code CID represents an actor that can be an external principal: i.e. an account or multisig."],["is_singleton_actor","Returns true if the code belongs to a singleton actor."],["make_empty_map","Create a hamt with a custom bitwidth."],["make_map_with_root","Create a map with a root cid."],["make_map_with_root_and_bitwidth","Create a map with a root cid."],["parse_uint_key",""],["u64_key",""]],"macro":[["actor_error","Convenience macro for generating Actor Errors"]],"mod":[["account",""],["cron",""],["init",""],["market",""],["miner",""],["multisig",""],["network",""],["paych",""],["power",""],["reward",""],["singletons",""],["system",""],["util",""],["verifreg",""]],"struct":[["ACCOUNT_ACTOR_CODE_ID",""],["ActorError","The error type that gets returned by actor method calls."],["ActorState","State of all actor implementations."],["BURNT_FUNDS_ACTOR_ADDR","Distinguished AccountActor that is the destination of all burnt funds."],["CALLER_TYPES_SIGNABLE","Set of actor code types that can represent external signing parties."],["CHAOS_ACTOR_ADDR",""],["CHAOS_ACTOR_CODE_ID",""],["CRON_ACTOR_ADDR",""],["CRON_ACTOR_CODE_ID",""],["DEAL_WEIGHT_MULTIPLIER","Quality multiplier for unverified deals in a sector"],["INIT_ACTOR_ADDR",""],["INIT_ACTOR_CODE_ID",""],["MARKET_ACTOR_CODE_ID",""],["MINER_ACTOR_CODE_ID",""],["MULTISIG_ACTOR_CODE_ID",""],["PAYCH_ACTOR_CODE_ID",""],["POWER_ACTOR_CODE_ID",""],["QUALITY_BASE_MULTIPLIER","Quality multiplier for committed capacity (no deals) in a sector"],["RESERVE_ADDRESS",""],["REWARD_ACTOR_ADDR",""],["REWARD_ACTOR_CODE_ID",""],["STORAGE_MARKET_ACTOR_ADDR",""],["STORAGE_POWER_ACTOR_ADDR",""],["SYSTEM_ACTOR_ADDR",""],["SYSTEM_ACTOR_CODE_ID",""],["Serialized","Serialized bytes to be used as parameters into actor methods. This data is (de)serialized as a byte string."],["VERIFIED_DEAL_WEIGHT_MULTIPLIER","Quality multiplier for verified deals in a sector"],["VERIFIED_REGISTRY_ACTOR_ADDR",""],["VERIFREG_ACTOR_CODE_ID",""]],"type":[["DealID","Deal identifier used in market and miner actors"],["DealWeight","Deal weight"],["Map","Map type to be used within actors. The underlying type is a hamt."],["MethodNum","Method number indicator for calling actor methods."],["TokenAmount","Token type to be used within the VM."]]});