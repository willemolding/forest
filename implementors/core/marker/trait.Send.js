(function() {var implementors = {};
implementors["actor_interface"] = [{"text":"impl&lt;'a, BS, V&gt; Send for Array&lt;'a, BS, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, BS, V&gt; Send for Map&lt;'a, BS, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl&lt;'a, BS&gt; Send for BalanceTable&lt;'a, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, BS&gt; Send for DealProposals&lt;'a, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DealProposal","synthetic":true,"types":[]},{"text":"impl&lt;'a, BS&gt; Send for DealStates&lt;'a, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DealState","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for MinerInfo","synthetic":true,"types":[]},{"text":"impl Send for Deadline","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Partition&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for SectorOnChainInfo","synthetic":true,"types":[]},{"text":"impl Send for SectorPreCommitOnChainInfo","synthetic":true,"types":[]},{"text":"impl Send for SectorPreCommitInfo","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for Claim","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for FilterEstimate","synthetic":true,"types":[]},{"text":"impl Send for ActorVersion","synthetic":true,"types":[]}];
implementors["auth"] = [{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["beacon"] = [{"text":"impl Send for BeaconEntryJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BeaconEntryJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for BeaconEntry","synthetic":true,"types":[]},{"text":"impl Send for DrandPublic","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DrandConfig&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for BeaconSchedule&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for BeaconPoint&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ChainInfo&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for BeaconEntryJson","synthetic":true,"types":[]},{"text":"impl Send for DrandBeacon","synthetic":true,"types":[]},{"text":"impl Send for MockBeacon","synthetic":true,"types":[]}];
implementors["chain"] = [{"text":"impl Send for MINIMUM_BASE_FEE","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for HeadChangeJson&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for HeadChange","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Send for ChainStore&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["chain_sync"] = [{"text":"impl Send for BadBlockCache","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for SyncConfig","synthetic":true,"types":[]},{"text":"impl&lt;DB, TBeacon, V, M&gt; Send for ChainSyncer&lt;DB, TBeacon, V, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;TBeacon: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for SyncStage","synthetic":true,"types":[]},{"text":"impl Send for SyncState","synthetic":true,"types":[]}];
implementors["conformance_tests"] = [{"text":"impl Send for MessageVector","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ExecuteMessageParams&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ReplayingRand&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for TestRand","synthetic":true,"types":[]},{"text":"impl Send for TestSyscalls","synthetic":true,"types":[]},{"text":"impl Send for TipsetVector","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ExecuteTipsetParams&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ExecuteTipsetResult","synthetic":true,"types":[]},{"text":"impl Send for StateTreeVector","synthetic":true,"types":[]},{"text":"impl Send for GenerationData","synthetic":true,"types":[]},{"text":"impl Send for MetaData","synthetic":true,"types":[]},{"text":"impl Send for PreConditions","synthetic":true,"types":[]},{"text":"impl Send for PostConditions","synthetic":true,"types":[]},{"text":"impl Send for Selector","synthetic":true,"types":[]},{"text":"impl Send for Variant","synthetic":true,"types":[]},{"text":"impl Send for RandomnessMatch","synthetic":true,"types":[]},{"text":"impl Send for RandomnessKind","synthetic":true,"types":[]},{"text":"impl Send for RandomnessRule","synthetic":true,"types":[]},{"text":"impl Send for TestVector","synthetic":true,"types":[]}];
implementors["fil_types"] = [{"text":"impl Send for CURRENT_COMMIT","synthetic":true,"types":[]},{"text":"impl Send for BUILD_TYPE","synthetic":true,"types":[]},{"text":"impl Send for RUNNING_NODE_TYPE","synthetic":true,"types":[]},{"text":"impl Send for APIVersion","synthetic":true,"types":[]},{"text":"impl Send for Version","synthetic":true,"types":[]},{"text":"impl Send for BuildType","synthetic":true,"types":[]},{"text":"impl Send for NodeType","synthetic":true,"types":[]},{"text":"impl Send for QuantSpec","synthetic":true,"types":[]},{"text":"impl Send for DeadlineInfo","synthetic":true,"types":[]},{"text":"impl Send for UnpaddedPieceSize","synthetic":true,"types":[]},{"text":"impl Send for PaddedPieceSize","synthetic":true,"types":[]},{"text":"impl Send for PieceInfo","synthetic":true,"types":[]},{"text":"impl Send for Randomness","synthetic":true,"types":[]},{"text":"impl Send for PoStProofJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for PoStProofJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for SectorInfoJson","synthetic":true,"types":[]},{"text":"impl Send for SectorInfo","synthetic":true,"types":[]},{"text":"impl Send for PoStProof","synthetic":true,"types":[]},{"text":"impl Send for WinningPoStVerifyInfo","synthetic":true,"types":[]},{"text":"impl Send for WindowPoStVerifyInfo","synthetic":true,"types":[]},{"text":"impl Send for OnChainWindowPoStVerifyInfo","synthetic":true,"types":[]},{"text":"impl Send for RegisteredSealProof","synthetic":true,"types":[]},{"text":"impl Send for RegisteredPoStProof","synthetic":true,"types":[]},{"text":"impl Send for SealVerifyInfo","synthetic":true,"types":[]},{"text":"impl Send for SealVerifyParams","synthetic":true,"types":[]},{"text":"impl Send for SectorSize","synthetic":true,"types":[]},{"text":"impl Send for SectorID","synthetic":true,"types":[]},{"text":"impl Send for StateTreeVersion","synthetic":true,"types":[]},{"text":"impl Send for StateRoot","synthetic":true,"types":[]},{"text":"impl Send for StateInfo0","synthetic":true,"types":[]},{"text":"impl Send for NetworkVersion","synthetic":true,"types":[]},{"text":"impl Send for ActorType","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for Miner","synthetic":true,"types":[]},{"text":"impl Send for Template","synthetic":true,"types":[]},{"text":"impl Send for MockVerifier","synthetic":true,"types":[]},{"text":"impl Send for FullVerifier","synthetic":true,"types":[]},{"text":"impl Send for TOTAL_FILECOIN","synthetic":true,"types":[]},{"text":"impl Send for FIL_RESERVED","synthetic":true,"types":[]},{"text":"impl Send for ZERO_ADDRESS","synthetic":true,"types":[]},{"text":"impl Send for DefaultNetworkParams","synthetic":true,"types":[]}];
implementors["forest"] = [{"text":"impl Send for AuthCommands","synthetic":true,"types":[]},{"text":"impl Send for ChainCommands","synthetic":true,"types":[]},{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl Send for FetchCommands","synthetic":true,"types":[]},{"text":"impl Send for GenesisCommands","synthetic":true,"types":[]},{"text":"impl Send for CLI","synthetic":true,"types":[]},{"text":"impl Send for Subcommand","synthetic":true,"types":[]},{"text":"impl Send for DaemonOpts","synthetic":true,"types":[]}];
implementors["forest_actor"] = [{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for SYSTEM_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for INIT_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for CRON_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for ACCOUNT_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for POWER_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for MINER_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for MARKET_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for PAYCH_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for MULTISIG_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for REWARD_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for VERIFREG_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for CHAOS_ACTOR_CODE_ID","synthetic":true,"types":[]},{"text":"impl Send for CALLER_TYPES_SIGNABLE","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for Entry","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for ConstructorParams","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for ConstructorParams","synthetic":true,"types":[]},{"text":"impl Send for ExecParams","synthetic":true,"types":[]},{"text":"impl Send for ExecReturn","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for DealProposal","synthetic":true,"types":[]},{"text":"impl Send for ClientDealProposal","synthetic":true,"types":[]},{"text":"impl Send for DealState","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for WithdrawBalanceParams","synthetic":true,"types":[]},{"text":"impl Send for OnMinerSectorsTerminateParams","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for OnMinerSectorsTerminateParamsRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for PublishStorageDealsParams","synthetic":true,"types":[]},{"text":"impl Send for PublishStorageDealsReturn","synthetic":true,"types":[]},{"text":"impl Send for VerifyDealsForActivationParams","synthetic":true,"types":[]},{"text":"impl Send for SectorDeals","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for VerifyDealsForActivationParamsRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for VerifyDealsForActivationReturn","synthetic":true,"types":[]},{"text":"impl Send for SectorWeights","synthetic":true,"types":[]},{"text":"impl Send for ActivateDealsParams","synthetic":true,"types":[]},{"text":"impl Send for ComputeDataCommitmentParams","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ComputeDataCommitmentParamsRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl&lt;'db, BS&gt; Send for BitFieldQueue&lt;'db, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Deadlines","synthetic":true,"types":[]},{"text":"impl Send for Deadline","synthetic":true,"types":[]},{"text":"impl Send for PoStResult","synthetic":true,"types":[]},{"text":"impl Send for ExpirationSet","synthetic":true,"types":[]},{"text":"impl&lt;'db, BS&gt; Send for ExpirationQueue&lt;'db, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Partition","synthetic":true,"types":[]},{"text":"impl Send for PowerPair","synthetic":true,"types":[]},{"text":"impl Send for VestSpec","synthetic":true,"types":[]},{"text":"impl Send for DeadlineSectorMap","synthetic":true,"types":[]},{"text":"impl Send for PartitionSectorMap","synthetic":true,"types":[]},{"text":"impl&lt;'db, BS&gt; Send for Sectors&lt;'db, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for AdvanceDeadlineResult","synthetic":true,"types":[]},{"text":"impl Send for MinerInfo","synthetic":true,"types":[]},{"text":"impl Send for TerminationResult","synthetic":true,"types":[]},{"text":"impl Send for MinerConstructorParams","synthetic":true,"types":[]},{"text":"impl Send for CronEventPayload","synthetic":true,"types":[]},{"text":"impl Send for PartitionKey","synthetic":true,"types":[]},{"text":"impl Send for GetControlAddressesReturn","synthetic":true,"types":[]},{"text":"impl Send for ChangeWorkerAddressParams","synthetic":true,"types":[]},{"text":"impl Send for ChangePeerIDParams","synthetic":true,"types":[]},{"text":"impl Send for ChangeMultiaddrsParams","synthetic":true,"types":[]},{"text":"impl Send for ConfirmSectorProofsParams","synthetic":true,"types":[]},{"text":"impl Send for PoStPartition","synthetic":true,"types":[]},{"text":"impl Send for SubmitWindowedPoStParams","synthetic":true,"types":[]},{"text":"impl Send for ProveCommitSectorParams","synthetic":true,"types":[]},{"text":"impl Send for CheckSectorProvenParams","synthetic":true,"types":[]},{"text":"impl Send for ExtendSectorExpirationParams","synthetic":true,"types":[]},{"text":"impl Send for ExpirationExtension","synthetic":true,"types":[]},{"text":"impl Send for TerminateSectorsParams","synthetic":true,"types":[]},{"text":"impl Send for TerminationDeclaration","synthetic":true,"types":[]},{"text":"impl Send for TerminateSectorsReturn","synthetic":true,"types":[]},{"text":"impl Send for DeclareFaultsParams","synthetic":true,"types":[]},{"text":"impl Send for FaultDeclaration","synthetic":true,"types":[]},{"text":"impl Send for DeclareFaultsRecoveredParams","synthetic":true,"types":[]},{"text":"impl Send for RecoveryDeclaration","synthetic":true,"types":[]},{"text":"impl Send for CompactPartitionsParams","synthetic":true,"types":[]},{"text":"impl Send for CompactSectorNumbersParams","synthetic":true,"types":[]},{"text":"impl Send for ReportConsensusFaultParams","synthetic":true,"types":[]},{"text":"impl Send for WithdrawBalanceParams","synthetic":true,"types":[]},{"text":"impl Send for WorkerKeyChange","synthetic":true,"types":[]},{"text":"impl Send for SectorPreCommitInfo","synthetic":true,"types":[]},{"text":"impl Send for SectorPreCommitOnChainInfo","synthetic":true,"types":[]},{"text":"impl Send for SectorOnChainInfo","synthetic":true,"types":[]},{"text":"impl Send for Fault","synthetic":true,"types":[]},{"text":"impl Send for ApplyRewardParams","synthetic":true,"types":[]},{"text":"impl Send for VestingFund","synthetic":true,"types":[]},{"text":"impl Send for VestingFunds","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for TxnID","synthetic":true,"types":[]},{"text":"impl Send for Transaction","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ProposalHashData&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ConstructorParams","synthetic":true,"types":[]},{"text":"impl Send for ProposeParams","synthetic":true,"types":[]},{"text":"impl Send for ProposeReturn","synthetic":true,"types":[]},{"text":"impl Send for TxnIDParams","synthetic":true,"types":[]},{"text":"impl Send for ApproveReturn","synthetic":true,"types":[]},{"text":"impl Send for AddSignerParams","synthetic":true,"types":[]},{"text":"impl Send for RemoveSignerParams","synthetic":true,"types":[]},{"text":"impl Send for SwapSignerParams","synthetic":true,"types":[]},{"text":"impl Send for ChangeNumApprovalsThresholdParams","synthetic":true,"types":[]},{"text":"impl Send for LockBalanceParams","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for QUALITY_BASE_MULTIPLIER","synthetic":true,"types":[]},{"text":"impl Send for DEAL_WEIGHT_MULTIPLIER","synthetic":true,"types":[]},{"text":"impl Send for VERIFIED_DEAL_WEIGHT_MULTIPLIER","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for LaneState","synthetic":true,"types":[]},{"text":"impl Send for Merge","synthetic":true,"types":[]},{"text":"impl Send for ConstructorParams","synthetic":true,"types":[]},{"text":"impl Send for SignedVoucher","synthetic":true,"types":[]},{"text":"impl Send for ModVerifyParams","synthetic":true,"types":[]},{"text":"impl Send for PaymentVerifyParams","synthetic":true,"types":[]},{"text":"impl Send for UpdateChannelStateParams","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for Claim","synthetic":true,"types":[]},{"text":"impl Send for CronEvent","synthetic":true,"types":[]},{"text":"impl Send for CreateMinerParams","synthetic":true,"types":[]},{"text":"impl Send for CreateMinerReturn","synthetic":true,"types":[]},{"text":"impl Send for UpdateClaimedPowerParams","synthetic":true,"types":[]},{"text":"impl Send for EnrollCronEventParams","synthetic":true,"types":[]},{"text":"impl Send for CurrentTotalPowerReturn","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for BASELINE_EXPONENT","synthetic":true,"types":[]},{"text":"impl Send for BASELINE_INITIAL_VALUE","synthetic":true,"types":[]},{"text":"impl Send for INIT_BASELINE_POWER","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for VestingFunction","synthetic":true,"types":[]},{"text":"impl Send for Reward","synthetic":true,"types":[]},{"text":"impl Send for AwardBlockRewardParams","synthetic":true,"types":[]},{"text":"impl Send for ThisEpochRewardReturn","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for SYSTEM_ACTOR_ADDR","synthetic":true,"types":[]},{"text":"impl Send for INIT_ACTOR_ADDR","synthetic":true,"types":[]},{"text":"impl Send for REWARD_ACTOR_ADDR","synthetic":true,"types":[]},{"text":"impl Send for CRON_ACTOR_ADDR","synthetic":true,"types":[]},{"text":"impl Send for STORAGE_POWER_ACTOR_ADDR","synthetic":true,"types":[]},{"text":"impl Send for STORAGE_MARKET_ACTOR_ADDR","synthetic":true,"types":[]},{"text":"impl Send for VERIFIED_REGISTRY_ACTOR_ADDR","synthetic":true,"types":[]},{"text":"impl Send for CHAOS_ACTOR_ADDR","synthetic":true,"types":[]},{"text":"impl Send for BURNT_FUNDS_ACTOR_ADDR","synthetic":true,"types":[]},{"text":"impl Send for RESERVE_ADDRESS","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for MINIMUM_VERIFIED_DEAL_SIZE","synthetic":true,"types":[]},{"text":"impl Send for VerifierParams","synthetic":true,"types":[]},{"text":"impl Send for BytesParams","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl&lt;'a, BS&gt; Send for BalanceTable&lt;'a, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for CreateActorArgs","synthetic":true,"types":[]},{"text":"impl Send for ResolveAddressResponse","synthetic":true,"types":[]},{"text":"impl Send for SendArgs","synthetic":true,"types":[]},{"text":"impl Send for SendReturn","synthetic":true,"types":[]},{"text":"impl Send for MutateStateArgs","synthetic":true,"types":[]},{"text":"impl Send for AbortWithArgs","synthetic":true,"types":[]},{"text":"impl Send for InspectRuntimeReturn","synthetic":true,"types":[]},{"text":"impl Send for CallerValidationArgs","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl&lt;'a, BS&gt; Send for Multimap&lt;'a, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, BS&gt; Send for Set&lt;'a, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, BS&gt; Send for SetMultimap&lt;'a, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for FilterEstimate","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, 'f&gt; Send for AlphaBetaFilter&lt;'a, 'b, 'f&gt;","synthetic":true,"types":[]},{"text":"impl Send for NUM","synthetic":true,"types":[]},{"text":"impl Send for DENOM","synthetic":true,"types":[]},{"text":"impl Send for DEFAULT_ALPHA","synthetic":true,"types":[]},{"text":"impl Send for DEFAULT_BETA","synthetic":true,"types":[]},{"text":"impl Send for LN_2","synthetic":true,"types":[]},{"text":"impl Send for EPSILON","synthetic":true,"types":[]}];
implementors["forest_address"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Network","synthetic":true,"types":[]},{"text":"impl Send for BLSPublicKey","synthetic":true,"types":[]},{"text":"impl Send for Payload","synthetic":true,"types":[]},{"text":"impl Send for Protocol","synthetic":true,"types":[]},{"text":"impl Send for AddressJsonVec","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for AddressJsonSlice&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for AddressJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for AddressJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Address","synthetic":true,"types":[]}];
implementors["forest_bigint"] = [{"text":"impl&lt;'a&gt; Send for BigIntSer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for BigIntDe","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BigUintSer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for BigUintDe","synthetic":true,"types":[]}];
implementors["forest_bitfield"] = [{"text":"impl&lt;I&gt; Send for Skip&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; Send for Take&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; Send for Ranges&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for UnvalidatedBitField","synthetic":true,"types":[]},{"text":"impl Send for BitFieldJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BitFieldJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for BitField","synthetic":true,"types":[]}];
implementors["forest_blocks"] = [{"text":"impl Send for Block","synthetic":true,"types":[]},{"text":"impl Send for TxMeta","synthetic":true,"types":[]},{"text":"impl Send for ElectionProofJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ElectionProofJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ElectionProof","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for GossipBlockJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GossipBlockJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GossipBlock","synthetic":true,"types":[]},{"text":"impl Send for BlockHeaderJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BlockHeaderJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for BlockHeader","synthetic":true,"types":[]},{"text":"impl Send for BlockHeaderBuilder","synthetic":true,"types":[]},{"text":"impl Send for TicketJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for TicketJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Ticket","synthetic":true,"types":[]},{"text":"impl Send for TipsetKeysJson","synthetic":true,"types":[]},{"text":"impl Send for TipsetJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for TipsetJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for TipsetKeys","synthetic":true,"types":[]},{"text":"impl Send for Tipset","synthetic":true,"types":[]},{"text":"impl Send for FullTipset","synthetic":true,"types":[]}];
implementors["forest_car"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for CarHeader","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for CarReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Block","synthetic":true,"types":[]}];
implementors["forest_cid"] = [{"text":"impl Send for Code","synthetic":true,"types":[]},{"text":"impl Send for Prefix","synthetic":true,"types":[]},{"text":"impl Send for CidJsonVec","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CidJsonSlice&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for CidJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CidJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Cid","synthetic":true,"types":[]}];
implementors["forest_crypto"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for DomainSeparationTag","synthetic":true,"types":[]},{"text":"impl Send for SignatureTypeJson","synthetic":true,"types":[]},{"text":"impl Send for SignatureJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SignatureJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for SignatureType","synthetic":true,"types":[]},{"text":"impl Send for Signature","synthetic":true,"types":[]},{"text":"impl Send for VRFProof","synthetic":true,"types":[]}];
implementors["forest_db"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for MemoryDB","synthetic":true,"types":[]},{"text":"impl Send for RocksDb","synthetic":true,"types":[]},{"text":"impl Send for SledDb","synthetic":true,"types":[]}];
implementors["forest_encoding"] = [{"text":"impl&lt;'a&gt; Send for BytesSer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for BytesDe","synthetic":true,"types":[]},{"text":"impl Send for Byte32De","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for CodecProtocol","synthetic":true,"types":[]}];
implementors["forest_hash_utils"] = [{"text":"impl Send for BytesKey","synthetic":true,"types":[]}];
implementors["forest_ipld"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Path","synthetic":true,"types":[]},{"text":"impl Send for PathSegment","synthetic":true,"types":[]},{"text":"impl Send for VisitReason","synthetic":true,"types":[]},{"text":"impl&lt;L&gt; Send for Progress&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for LastBlockInfo","synthetic":true,"types":[]},{"text":"impl Send for Selector","synthetic":true,"types":[]},{"text":"impl Send for RecursionLimit","synthetic":true,"types":[]},{"text":"impl Send for Condition","synthetic":true,"types":[]},{"text":"impl Send for IpldJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for IpldJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Ipld","synthetic":true,"types":[]}];
implementors["forest_json_utils"] = [{"text":"impl&lt;T, D&gt; Send for GoVecVisitor&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["forest_libp2p"] = [{"text":"impl Send for ChainExchangeRequest","synthetic":true,"types":[]},{"text":"impl Send for ChainExchangeResponseStatus","synthetic":true,"types":[]},{"text":"impl Send for ChainExchangeResponse","synthetic":true,"types":[]},{"text":"impl Send for CompactedMessages","synthetic":true,"types":[]},{"text":"impl Send for TipsetBundle","synthetic":true,"types":[]},{"text":"impl Send for ChainExchangeProtocolName","synthetic":true,"types":[]},{"text":"impl Send for Libp2pConfig","synthetic":true,"types":[]},{"text":"impl Send for HelloRequest","synthetic":true,"types":[]},{"text":"impl Send for HelloResponse","synthetic":true,"types":[]},{"text":"impl Send for HelloProtocolName","synthetic":true,"types":[]},{"text":"impl&lt;P, RQ, RS&gt; Send for CborRequestResponse&lt;P, RQ, RS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;RQ: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;RS: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for RequestResponseError","synthetic":true,"types":[]},{"text":"impl Send for NetworkEvent","synthetic":true,"types":[]},{"text":"impl Send for PubsubMessage","synthetic":true,"types":[]},{"text":"impl Send for NetworkMessage","synthetic":true,"types":[]},{"text":"impl Send for NetRPCMethods","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Send for Libp2pService&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["forest_message"] = [{"text":"impl Send for ChainMessage","synthetic":true,"types":[]},{"text":"impl Send for MessageReceiptJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for MessageReceiptJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for MessageReceipt","synthetic":true,"types":[]},{"text":"impl Send for SignedMessageJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SignedMessageJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for SignedMessage","synthetic":true,"types":[]},{"text":"impl Send for UnsignedMessageJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UnsignedMessageJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for UnsignedMessage","synthetic":true,"types":[]},{"text":"impl Send for MessageBuilder","synthetic":true,"types":[]}];
implementors["forest_runtime"] = [{"text":"impl Send for ConsensusFault","synthetic":true,"types":[]},{"text":"impl Send for ConsensusFaultType","synthetic":true,"types":[]}];
implementors["forest_vm"] = [{"text":"impl Send for ActorStateJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ActorStateJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ActorState","synthetic":true,"types":[]},{"text":"impl Send for ActorError","synthetic":true,"types":[]},{"text":"impl Send for ExitCode","synthetic":true,"types":[]},{"text":"impl Send for Serialized","synthetic":true,"types":[]},{"text":"impl Send for EMPTY_ARR_BYTES","synthetic":true,"types":[]},{"text":"impl Send for EMPTY_ARR_CID","synthetic":true,"types":[]}];
implementors["interpreter"] = [{"text":"impl&lt;'db, 'vm, BS, R, C, LB, V, P&nbsp;=&nbsp;DefaultNetworkParams&gt; !Send for DefaultRuntime&lt;'db, 'vm, BS, R, C, LB, V, P&gt;","synthetic":true,"types":[]},{"text":"impl Send for GasCharge","synthetic":true,"types":[]},{"text":"impl Send for PriceList","synthetic":true,"types":[]},{"text":"impl Send for BlockMessages","synthetic":true,"types":[]},{"text":"impl&lt;'db, 'r, DB, R, N, C, LB, V, P&gt; Send for VM&lt;'db, 'r, DB, R, N, C, LB, V, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;LB: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ApplyRet","synthetic":true,"types":[]}];
implementors["ipld_amt"] = [{"text":"impl&lt;'db, V, BS&gt; Send for Amt&lt;'db, V, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; Send for ValueMut&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["ipld_blockstore"] = [{"text":"impl&lt;'bs, BS&gt; Send for BufferedBlockStore&lt;'bs, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for BSStats","synthetic":true,"types":[]},{"text":"impl&lt;'bs, BS&gt; Send for TrackingBlockStore&lt;'bs, BS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["ipld_hamt"] = [{"text":"impl !Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, BS, V, K, H&gt; Send for Hamt&lt;'a, BS, V, K, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BS: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Sha256","synthetic":true,"types":[]},{"text":"impl Send for Identity","synthetic":true,"types":[]}];
implementors["key_management"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for KeyInfoJson","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for KeyInfoJsonRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for KeyInfo","synthetic":true,"types":[]},{"text":"impl Send for MemKeyStore","synthetic":true,"types":[]},{"text":"impl Send for PersistentKeyStore","synthetic":true,"types":[]},{"text":"impl Send for Key","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Wallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["message_pool"] = [{"text":"impl Send for MpoolConfig","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for TestApi","synthetic":true,"types":[]},{"text":"impl Send for MsgSet","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Send for MpoolRpcProvider&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for MessagePool&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["net_utils"] = [{"text":"impl&lt;R, W&gt; Send for FetchProgress&lt;R, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["paramfetch"] = [{"text":"impl Send for SectorSizeOpt","synthetic":true,"types":[]}];
implementors["rpc"] = [{"text":"impl&lt;DB, KS, B&gt; Send for RpcState&lt;DB, KS, B&gt;","synthetic":true,"types":[]}];
implementors["rpc_client"] = [{"text":"impl&lt;'a, R, I&gt; Send for Filecoin&lt;'a, R, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["state_manager"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for InvocResult","synthetic":true,"types":[]},{"text":"impl Send for MarketBalance","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Send for StateManager&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for MiningBaseInfo","synthetic":true,"types":[]}];
implementors["state_tree"] = [{"text":"impl&lt;'db, S&gt; Send for StateTree&lt;'db, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()