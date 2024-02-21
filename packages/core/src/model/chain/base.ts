import { Chain } from '../../constants'
import { getAddressLink, getTransactionLink } from '../../helpers/chainExplorerLink'

const baseSepoliaUrl = 'https://sepolia.basescan.org'

export const BaseSepolia: Chain = {
  chainId: 84532,
  chainName: 'Base Sepolia',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  rpcUrl: 'https://sepolia.base.org',
  nativeCurrency: {
    name: 'Sepolia Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrl: baseSepoliaUrl,
  getExplorerAddressLink: getAddressLink(baseSepoliaUrl),
  getExplorerTransactionLink: getTransactionLink(baseSepoliaUrl),
}

const baseUrl = 'https://basescan.org'

export const Base: Chain = {
  chainId: 8453,
  chainName: 'Base',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0x38641b7a50CDcfde75a7A83eB7c02581F3279362',
  rpcUrl: 'https://base.org',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrl: baseUrl,
  getExplorerAddressLink: getAddressLink(baseUrl),
  getExplorerTransactionLink: getTransactionLink(baseUrl),
}

export default {
  baseSepoliaUrl,
  Base,
}
