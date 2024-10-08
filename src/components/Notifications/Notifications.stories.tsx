import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Notifications from './Notifications'
import NotificationItemImage from './NotificationItemImage'
import { NFTCategory, Rarity, NotificationType } from '@dcl/schemas'
import BidReceived from '../Icons/Notifications/BidReceived'
import { NotificationActiveTab } from './types'
import { getBGColorByRarity } from './utils'
import GovernanceAnnouncementNotification from './NotificationTypes/Governance/GovernanceAnnouncementNotification'
import GovernanceAuthoredProposalFinishedNotification from './NotificationTypes/Governance/GovernanceAuthoredProposalFinishedNotification'
import GovernanceCoauthorRequestedNotification from './NotificationTypes/Governance/GovernanceCoauthorRequestedNotification'
import GovernanceCliffEndedNotification from './NotificationTypes/Governance/GovernanceCliffEndedNotification'
import GovernanceNewCommentOnProposalNotification from './NotificationTypes/Governance/GovernanceNewCommentOnProposalNotification'
import GovernanceNewCommentOnProjectUpdateNotification from './NotificationTypes/Governance/GovernanceNewCommentOnProjectUpdateNotification'
import GovernanceVotingEndedVoterNotification from './NotificationTypes/Governance/GovernanceVotingEndedVoterNotification'
import GovernanceProposalEnactedNotification from './NotificationTypes/Governance/GovernanceProposalEnactedNotification'
import {
  LandRentalEndedNotification,
  LandRentedNotification,
  RewardAssignedNotification,
  EventsStartedNotification,
  EventsStartsSoonNotification,
  GovernancePitchPassedNotification,
  GovernanceTenderPassedNotification,
  WorldsPermissionGrantedNotification,
  WorldsPermissionRevokedNotification,
  GovernanceWhaleVoteNotification,
  GovernanceVotedOnBehalfNotification
} from './NotificationTypes'
import { shorten } from '../AddressField/utils'
import RewardInProgressNotification from './NotificationTypes/Reward/RewardInProgressNotification'
import RewardDelayedNotification from './NotificationTypes/Reward/RewardDelayedNotification'
import CampaignOutOfStockNotification from './NotificationTypes/Reward/CampaignOutOfStockNotification'
import CampaignOutOfFundsNotification from './NotificationTypes/Reward/CampaignOutOfFundsNotification'
import CampaignGasPriceHigherThanExpectedNotification from './NotificationTypes/Reward/CampaignGasPriceHigherThanExpectedNotification'

storiesOf('Notifications Toggle', module)
  .add('Without new notifications', () => {
    return (
      <div>
        <Notifications
          isOpen={false}
          isLoading={false}
          isOnboarding={false}
          items={[]}
          locale="en"
          activeTab={NotificationActiveTab.NEWEST}
          onChangeTab={(e, newTab) => console.log(newTab)}
          onClick={() => console.log('Toggle button')}
          onBegin={() => console.log('Begin')}
          onClose={(_, m) => console.log(m)}
        />
      </div>
    )
  })
  .add('With new notificatitons', () => {
    return (
      <div>
        <Notifications
          isOpen={false}
          isLoading={false}
          isOnboarding={false}
          items={[
            {
              id: 'A',
              read: false,
              type: NotificationType.ITEM_SOLD,
              address: '0xA',
              timestamp: 1680108689 * 1000,
              metadata: {
                link: 'https://market.decentraland.org/contracts/0x4c290f486bae507719c562b6b524bdb71a2570c9/tokens/1020',
                image:
                  'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:atari_launch:atari_green_upper_body/thumbnail',
                rarity: 'epic' as Rarity,
                seller: '0x8bc619e7f9ca9949b8440245fd9d8c4c002edf02',
                nftName: 'Green Atari Tee',
                network: 'ethereum',
                category: 'wearable' as NFTCategory
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            }
          ]}
          locale="en"
          activeTab={NotificationActiveTab.NEWEST}
          onChangeTab={(e, newTab) => console.log(newTab)}
          onClick={() => console.log('Toggle button')}
          onBegin={() => console.log('Begin')}
          onClose={(_, m) => console.log(m)}
        />
      </div>
    )
  })
  .add('Onboarding', () => {
    return (
      <div>
        <Notifications
          isOpen
          isLoading={false}
          isOnboarding
          items={[
            {
              id: 'A',
              read: false,
              type: NotificationType.ITEM_SOLD,
              address: '0xA',
              timestamp: 1680108689 * 1000,
              metadata: {
                link: 'https://market.decentraland.org/contracts/0x4c290f486bae507719c562b6b524bdb71a2570c9/tokens/1020',
                image:
                  'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:atari_launch:atari_green_upper_body/thumbnail',
                rarity: 'epic' as Rarity,
                seller: '0x8bc619e7f9ca9949b8440245fd9d8c4c002edf02',
                nftName: 'Green Atari Tee',
                network: 'ethereum',
                category: 'wearable' as NFTCategory
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            }
          ]}
          activeTab={NotificationActiveTab.NEWEST}
          onChangeTab={(e, newTab) => console.log(newTab)}
          locale="en"
          onClick={() => console.log('Toggle button')}
          onBegin={() => console.log('Begin')}
          onClose={(_, m) => console.log(m)}
        />
      </div>
    )
  })
  .add('Open not loading', () => {
    const [tab, setTab] = React.useState('newest')
    return (
      <div>
        <Notifications
          isOpen={true}
          isLoading={false}
          isOnboarding={false}
          locale="en"
          items={[
            {
              id: 'AA',
              read: true,
              type: NotificationType.GOVERNANCE_AUTHORED_PROPOSAL_FINISHED,
              address: '0xA',
              timestamp: new Date().getTime(),
              metadata: {
                link: 'https://decentraland.org/governance',
                title: 'Test Governance Announcement',
                description: 'Test description',
                proposalId: 'AAA_PROPOSAL_111',
                proposalTitle: 'Open Source all code using DAO funds'
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            },
            {
              id: 'B',
              read: true,
              type: NotificationType.ROYALTIES_EARNED,
              address: '0xA',
              timestamp: new Date().getTime(),
              metadata: {
                link: 'https://market.decentraland.zone/contracts/0xb726634ed82ac04e6bca66b3b97cc41a2c10ec31/tokens/9',
                image:
                  'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail',
                rarity: 'common' as Rarity,
                network: 'polygon',
                nftName: 'NJacket',
                category: 'wearable' as NFTCategory,
                royaltiesCut: '30000000000000000',
                royaltiesCollector: '0x2a39d4f68133491f0442496f601cde2a945b6d31'
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            },
            {
              id: 'A',
              read: true,
              type: NotificationType.ITEM_SOLD,
              address: '0xA',
              timestamp: new Date(
                new Date().setHours(new Date().getHours() - 19)
              ).getTime(),
              metadata: {
                link: 'https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590',
                image:
                  'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail',
                rarity: 'epic' as Rarity,
                seller: '0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f',
                nftName: 'Exclusive Binance Hoodie',
                network: 'ethereum',
                category: 'wearable' as NFTCategory
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            },
            {
              id: 'A',
              read: true,
              type: NotificationType.ITEM_SOLD,
              address: '0xA',
              timestamp: new Date(
                new Date().setHours(new Date().getHours() - 19)
              ).getTime(),
              metadata: {
                link: 'https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590',
                image:
                  'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail',
                rarity: 'epic' as Rarity,
                seller: '0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f',
                nftName: 'Exclusive Binance Hoodie',
                network: 'ethereum',
                category: 'wearable' as NFTCategory
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            },
            {
              id: 'A',
              read: true,
              type: NotificationType.ITEM_SOLD,
              address: '0xA',
              timestamp: new Date(
                new Date().setHours(new Date().getHours() - 19)
              ).getTime(),
              metadata: {
                link: 'https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590',
                image:
                  'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail',
                rarity: 'epic' as Rarity,
                seller: '0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f',
                nftName: 'Exclusive Binance Hoodie',
                network: 'ethereum',
                category: 'wearable' as NFTCategory
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            },
            {
              id: 'A',
              read: true,
              type: NotificationType.ITEM_SOLD,
              address: '0xA',
              timestamp: new Date(
                new Date().setHours(new Date().getHours() - 19)
              ).getTime(),
              metadata: {
                link: 'https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590',
                image:
                  'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail',
                rarity: 'epic' as Rarity,
                seller: '0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f',
                nftName: 'Exclusive Binance Hoodie',
                network: 'ethereum',
                category: 'wearable' as NFTCategory
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            },
            {
              id: 'AC',
              read: true,
              type: NotificationType.ITEM_SOLD,
              address: '0xA',
              timestamp: 1701123003 * 1000,
              metadata: {
                link: 'https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590',
                image:
                  'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail',
                rarity: 'uncommon' as Rarity,
                seller: '0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f',
                nftName: 'Binance US Hoodie',
                network: 'ethereum',
                category: 'wearable' as NFTCategory
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            },
            {
              id: 'AS',
              read: true,
              type: NotificationType.ITEM_SOLD,
              address: '0xA',
              timestamp: 1701123003 * 1000,
              metadata: {
                link: 'https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590',
                image:
                  'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail',
                rarity: 'uncommon' as Rarity,
                seller: '0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f',
                nftName: 'Binance US Hoodie',
                network: 'ethereum',
                category: 'wearable' as NFTCategory
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            },
            {
              id: 'AA',
              read: true,
              type: NotificationType.LAND_RENTED,
              address: '0xA',
              timestamp: new Date().getTime(),
              metadata: {
                description: 'The rent of your LAND at 5,48 has ended.',
                link: 'https://marketplace-url/contracts/0x42f4ba48791e2de32f5fbf553441c2672864bb33/tokens/random-token-id/manage',
                title: 'Rent Period Ending',
                contract: '0x42f4ba48791e2de32f5fbf553441c2672864bb33',
                lessor: '0x24e5f44999c151f08609f8e27b2238c773c4d020',
                tenant: '0xd5359E309c47c8920C277d078d5F3c3DBeA1ef84',
                operator: '0xd5359E309c47c8920C277d078d5F3c3DBeA1ef84',
                startedAt: '1710447420',
                endedAt: '1710533820',
                tokenId: 'random-token-id',
                land: '5,48'
              },
              created_at: '2023-11-29T12:51:00.600Z',
              updated_at: '2023-11-29T12:51:00.600Z'
            }
          ]}
          activeTab={tab as NotificationActiveTab}
          onChangeTab={(e, newTab) => setTab(newTab)}
          onClick={() => console.log('Toggle button')}
          onBegin={() => console.log('Begin')}
          onClose={(_, m) => console.log(m)}
          renderProfile={(address: string) => shorten(address)}
        />
      </div>
    )
  })
  .add('Open not loading but empty', () => {
    return (
      <div>
        <Notifications
          isOpen={true}
          isLoading={false}
          isOnboarding={false}
          locale="en"
          items={[]}
          activeTab={NotificationActiveTab.NEWEST}
          onChangeTab={(e, newTab) => console.log(newTab)}
          onClick={() => console.log('Toggle button')}
          onBegin={() => console.log('Begin')}
          onClose={(_, m) => console.log(m)}
        />
      </div>
    )
  })
  .add('Open loading', () => {
    return (
      <div>
        <Notifications
          isOpen={true}
          isLoading={true}
          isOnboarding={false}
          locale="en"
          items={[]}
          activeTab={NotificationActiveTab.NEWEST}
          onChangeTab={(e, newTab) => console.log(newTab)}
          onClick={() => console.log('Toggle button')}
          onBegin={() => console.log('Begin')}
          onClose={(_, m) => console.log(m)}
        />
      </div>
    )
  })
  .add('NotificationItemImage', () => {
    return (
      <div>
        <NotificationItemImage
          backgroundColor={getBGColorByRarity(Rarity.EPIC)}
          image="https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail"
          icon={<BidReceived />}
        />
      </div>
    )
  })
  .add('Governance Notifications', () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <GovernanceAnnouncementNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_ANNOUNCEMENT,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <GovernanceAuthoredProposalFinishedNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_AUTHORED_PROPOSAL_FINISHED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernanceCoauthorRequestedNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_COAUTHOR_REQUESTED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernanceNewCommentOnProposalNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROPOSAL,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernanceNewCommentOnProjectUpdateNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROJECT_UPDATE,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernanceProposalEnactedNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_PROPOSAL_ENACTED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernanceVotingEndedVoterNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_VOTING_ENDED_VOTER,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernancePitchPassedNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_PITCH_PASSED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernanceTenderPassedNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_TENDER_PASSED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernanceWhaleVoteNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_WHALE_VOTE,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernanceVotedOnBehalfNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_VOTED_ON_BEHALF,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/governance',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
        <GovernanceCliffEndedNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.GOVERNANCE_CLIFF_ENDED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/vesting/#/0xa85f9e1369031d52d14d13d346cb9bdc6ae7baec',
              title: 'Test Governance Announcement',
              description: 'Test description',
              proposalId: 'AAA_PROPOSAL_111',
              proposalTitle: 'Open Source all code using DAO funds'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
      </div>
    )
  })
  .add('Land Notifications', () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <LandRentedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.LAND_RENTED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              description: 'The rent of your LAND at 5,48 has ended.',
              link: 'https://marketplace-url/contracts/0x42f4ba48791e2de32f5fbf553441c2672864bb33/tokens/random-token-id/manage',
              title: 'Rent Period Ending',
              contract: '0x42f4ba48791e2de32f5fbf553441c2672864bb33',
              lessor: '0x24e5f44999c151f08609f8e27b2238c773c4d020',
              tenant: '0xd5359E309c47c8920C277d078d5F3c3DBeA1ef84',
              operator: '0xd5359E309c47c8920C277d078d5F3c3DBeA1ef84',
              startedAt: '1710447420',
              endedAt: '1710533820',
              tokenId: 'random-token-id',
              land: '5,48'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
          renderProfile={(address: string) => shorten(address)}
        />
        <LandRentalEndedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.LAND_RENTAL_ENDED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              description: 'The rent of your LAND at 5,48 has ended.',
              link: 'https://marketplace-url/contracts/0x42f4ba48791e2de32f5fbf553441c2672864bb33/tokens/random-token-id/manage',
              title: 'Rent Period Ending',
              contract: '0x42f4ba48791e2de32f5fbf553441c2672864bb33',
              lessor: '0x24e5f44999c151f08609f8e27b2238c773c4d020',
              tenant: '0xd5359E309c47c8920C277d078d5F3c3DBeA1ef84',
              operator: '0xd5359E309c47c8920C277d078d5F3c3DBeA1ef84',
              startedAt: '1710447420',
              endedAt: '1710533820',
              tokenId: 'random-token-id',
              land: '5,48'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
      </div>
    )
  })
  .add('Reward Notifications', () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <RewardAssignedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.REWARD_ASSIGNED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              tokenImage:
                'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:atari_launch:atari_green_upper_body/thumbnail',
              tokenRarity: 'epic' as Rarity,
              tokenName: 'Green Atari Tee'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <RewardInProgressNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.REWARD_IN_PROGRESS,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              tokenImage:
                'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:atari_launch:atari_green_upper_body/thumbnail',
              tokenRarity: 'epic' as Rarity,
              tokenName: 'Green Atari Tee'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />

        <RewardDelayedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.REWARD_DELAYED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              tokenImage:
                'https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:atari_launch:atari_green_upper_body/thumbnail',
              tokenRarity: 'epic' as Rarity,
              tokenName: 'Green Atari Tee'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
      </div>
    )
  })
  .add('Campaign Notifications', () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <CampaignOutOfStockNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.REWARD_CAMPAIGN_OUT_OF_STOCK,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              campaignName: 'Cool Campaign',
              link: 'https://decentraland.zone/rewards/campaign/?id=e9b39fdb-1bf1-490a-855e-f5e6c63a4525'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <CampaignOutOfFundsNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.REWARD_CAMPAIGN_OUT_OF_FUNDS,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              campaignName: 'Cool Campaign',
              link: 'https://decentraland.zone/rewards/campaign/?id=e9b39fdb-1bf1-490a-855e-f5e6c63a4525'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <CampaignGasPriceHigherThanExpectedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.REWARD_CAMPAIGN_GAS_PRICE_HIGHER_THAN_EXPECTED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              campaignName: 'Cool Campaign',
              link: 'https://decentraland.zone/rewards/campaign/?id=e9b39fdb-1bf1-490a-855e-f5e6c63a4525'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
      </div>
    )
  })
  .add('Events Notifications', () => {
    const futureStartDate = new Date()
    futureStartDate.setSeconds(futureStartDate.getSeconds() + 50)

    const pastStartDate = new Date()
    pastStartDate.setSeconds(pastStartDate.getSeconds() - 50)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <EventsStartsSoonNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.EVENTS_STARTS_SOON,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/events/event/?id=0f91b470-2d4a-4ecc-a619-8c682d872685',
              startsAt: futureStartDate.toString(),
              endsAt: '2023-11-29T12:51:00.600Z',
              image:
                'https://events-assets-099ac00.decentraland.org/poster/b9c4b26365d32607.jpg4',
              name: 'Decentraland Art Week'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <EventsStartsSoonNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.EVENTS_STARTS_SOON,
            address: '0xA',
            timestamp: new Date('2023-11-29T12:51:00.600Z').getTime(),
            metadata: {
              link: 'https://decentraland.org/events/event/?id=0f91b470-2d4a-4ecc-a619-8c682d872685',
              startsAt: pastStartDate.toString(),
              endsAt: '2023-11-29T12:51:00.600Z',
              image:
                'https://events-assets-099ac00.decentraland.org/poster/b9c4b26365d32607.jpg4',
              name: 'Decentraland Art Week'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <EventsStartedNotification
          locale="en"
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.EVENTS_STARTED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              link: 'https://decentraland.org/events/event/?id=0f91b470-2d4a-4ecc-a619-8c682d872685',
              image:
                'https://events-assets-099ac00.decentraland.org/poster/b9c4b26365d32607.jpg4',
              name: 'Decentraland Art Week'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
        />
      </div>
    )
  })
  .add('Worlds Notifications', () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <WorldsPermissionGrantedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.WORLDS_PERMISSION_GRANTED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              title: 'World notification',
              description: 'Wolrd description',
              permissions: ['deployment'],
              world: 'meelrossi.dcl.eth'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <WorldsPermissionRevokedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.WORLDS_PERMISSION_REVOKED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              title: 'World notification',
              description: 'Wolrd description',
              permissions: ['deployment'],
              world: 'meelrossi.dcl.eth'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <WorldsPermissionGrantedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.WORLDS_PERMISSION_GRANTED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              title: 'World notification',
              description: 'Wolrd description',
              permissions: ['access'],
              world: 'meelrossi.dcl.eth'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <WorldsPermissionRevokedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.WORLDS_PERMISSION_REVOKED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              title: 'World notification',
              description: 'Wolrd description',
              permissions: ['access'],
              world: 'meelrossi.dcl.eth'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />

        <WorldsPermissionGrantedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.WORLDS_PERMISSION_GRANTED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              title: 'World notification',
              description: 'Wolrd description',
              permissions: ['streaming'],
              world: 'meelrossi.dcl.eth'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
        <WorldsPermissionRevokedNotification
          notification={{
            id: 'AA',
            read: true,
            type: NotificationType.WORLDS_PERMISSION_REVOKED,
            address: '0xA',
            timestamp: new Date().getTime(),
            metadata: {
              title: 'World notification',
              description: 'Wolrd description',
              permissions: ['streaming'],
              world: 'meelrossi.dcl.eth'
            },
            created_at: '2023-11-29T12:51:00.600Z',
            updated_at: '2023-11-29T12:51:00.600Z'
          }}
          locale="en"
        />
      </div>
    )
  })
