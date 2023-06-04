import React, { useState, useEffect } from "react";
import {
  Header,
  Profile,
  Main,
  ToggleSwitch,
  EditProfileModal,
  CardAddModal,
  CardModal,
} from "./components";
import { styles } from "./styles";
import StarsCanvas from "./components/Stars";
import useLocalStorage from "use-local-storage";
import { profileimage } from "./assets";

const App = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCardAddModalOpen, setIsCardAddModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState();
  const [card, setCard] = useState([])

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleAddCardOpen = () => {
    setIsCardAddModalOpen(true);
  };

  const handleCardModalOpen = () => {
    setIsCardModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setIsCardAddModalOpen(false);
    setIsCardModalOpen(false);
  };

  const switchTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  useEffect(() => {
    function handleOverlayClose(e) {
      if (!e.target.closest(".item-modal")) {
        handleModalClose();
      }
    }
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, []);

  function handleAddCardSubmit(data) {
    setIsLoading(true);
    setCard([...card, data])
    handleModalClose()
    setIsLoading(false)
  }

const contracts =  [
  {
    "address": "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
    "name": "BoredApeKennelClub",
    "symbol": "BAKC",
    "totalSupply": "9602",
    "tokenType": "ERC721",
    "contractDeployer": "0xAF62311ee2224fed4D3884a1793B4C50B86F4462",
    "deployedBlockNumber": 12660509,
    "openSeaMetadata": {
      "floorPrice": 7.58,
      "collectionName": "Bored Ape Kennel Club",
      "safelistRequestStatus": "verified",
      "imageUrl": "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?w=500&auto=format",
      "description": "It gets lonely in the swamp sometimes. That's why every ape should have a four-legged companion. To curl up at your feet. To bring you a beer. To fire a missile launcher at that bastard Jimmy the Monkey.\r\n\r\nThat's why we've started the Bored Ape Kennel Club, and why we're offering up a dog NFT for adoption to every single member of the BAYC – for free (you only pay gas).\r\n\r\nLearn more at: http://boredapeyachtclub.com/#/kennel-club",
      "externalUrl": "http://boredapeyachtclub.com/#/kennel-club",
      "twitterUsername": "boredapeyc",
      "discordUrl": "https://discord.gg/wjH7hGz2yS",
      "lastIngestedAt": "2023-03-21T03:49:04.000Z"
    }
  },{
    "address": "0xBA627f3d081cc97ac0eDc40591eda7053AC63532",
    "name": "Bored & Dangerous",
    "symbol": "BOOK",
    "totalSupply": "14890",
    "tokenType": "ERC721",
    "contractDeployer": "0xf6045E92121A4Aac74320e038258e0Fe0D537cb5",
    "deployedBlockNumber": 15118602,
    "openSeaMetadata": {
      "floorPrice": 0.12839,
      "collectionName": "Bored & Dangerous",
      "safelistRequestStatus": "verified",
      "imageUrl": "https://i.seadn.io/gcs/files/ff62dd4e9b27dee15e7ac89307a917b5.png?w=500&auto=format",
      "description": "Bored & Dangerous, almost a year in the making, is a historic moment for the NFT space. This work is the result of 3,000 members of Jenkins the Valet’s “The Writer’s Room” banding together to drive the creative direction of the work. Neil Strauss, a 10x NYT Bestseller, wrote the novel. All characters featured in the novel, in the illustrations, in the game of ‘Where’s Jenkins’ and in the acknowledgements are owned by members of the community and licensed to Tally Labs.\r\n\r\nA special thank you to MBSJQ for creating such special artwork and for Murda Beatz who produced the beats you hear as the book rotates.\r\n\r\nThis NFT may be burned for an Azur Root (a sacred item within Azurbala that can be redeemed for a PFP) or staked for membership in Hawthorn (a DAO dedicated to reimagining collective creativity).\r\n\r\nVisit www.jenkinsthevalet.com for more information and join us in creating future community-generative works.",
      "externalUrl": "http://azurbala.com",
      "twitterUsername": "bddeployer",
      "discordUrl": "https://discord.gg/azurbala",
      "lastIngestedAt": "2023-03-21T03:49:34.000Z"
    }
  },
  {
    "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    "name": "BoredApeYachtClub",
    "symbol": "BAYC",
    "totalSupply": "10000",
    "tokenType": "ERC721",
    "contractDeployer": "0xaBA7161A7fb69c88e16ED9f455CE62B791EE4D03",
    "deployedBlockNumber": 12287507,
    "openSeaMetadata": {
      "floorPrice": 47.48,
      "collectionName": "Bored Ape Yacht Club",
      "safelistRequestStatus": "verified",
      "imageUrl": "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format",
      "description": "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.",
      "externalUrl": "http://www.boredapeyachtclub.com/",
      "twitterUsername": "BoredApeYC",
      "discordUrl": "https://discord.gg/3P5K3dzgdB",
      "lastIngestedAt": "2023-05-15T09:54:05.000Z"
    }
  },
  {
    "address": "0xf621b26ce64ed28f42231BcB578a8089F7958372",
    "name": "Bored Mummy Waking Up",
    "symbol": "BMWU",
    "totalSupply": "8888",
    "tokenType": "ERC721",
    "contractDeployer": "0x3088245C03a47Fa124aF9990b87C9f6Df9c27E67",
    "deployedBlockNumber": 12981729,
    "openSeaMetadata": {
      "floorPrice": 0.0179,
      "collectionName": "Bored Mummy Waking Up",
      "safelistRequestStatus": "verified",
      "imageUrl": "https://i.seadn.io/gae/KbLqxFD_JsSdyMKtabR8Mf_qrinLu9EOkL4HWhQm5bsCdlf-Nh54wBxva7_gmEnoLNFxw6OZSAgVwDBnNoO97_im2VSSsqRkyr0gTQ?w=500&auto=format",
      "description": "[Bored Mummy Baby](https://opensea.io/collection/bored-mummy-baby-waking-up) | [Bored Mummy Halloween Royal Rumble](https://opensea.io/collection/bored-mummy-halloween-royal-rumble) | [Bored Mummy Meet the Maker](https://opensea.io/collection/bored-mummy-meet-the-maker)\n\nBMWU (Genesis)\n\nAn incredibly active and friendly community, online games, giveaways, 3D avatars, The Sandbox Land, weekly activities and a Road Map into the future!!\n\nWelcome to Bored Mummy Waking Up! A professionally run community-driven NFT project, developing gaming and social experiences across several Metaverse lands.\n\nOur Genesis collection of NFTs include 100’s of hand-drawn traits. These anciently styled NFTs from the Divine Chronosphere will act as a protector in your wallet.\n \nNew to NFTs? Hodler? Stop by our Discord and say ‘hey’, take a run through our Cryptovoxels metaverse, then pick-up a Bored Mummy Waking Up NFT of your own!\n\nPick up an NFT from each of our collections and you’ll get on our\n\n",
      "externalUrl": "https://www.boredmummywakingup.com/",
      "twitterUsername": "BoredMummyWU",
      "discordUrl": "https://discord.gg/boredmummywu",
      "lastIngestedAt": "2023-03-21T23:08:37.000Z"
    }
  },
  {
    "address": "0x22c36BfdCef207F9c0CC941936eff94D4246d14A",
    "name": null,
    "symbol": null,
    "totalSupply": null,
    "tokenType": "ERC1155",
    "contractDeployer": "0x9056D15C49B19dF52FfaD1E6C11627f035C0C960",
    "deployedBlockNumber": 13115709,
    "openSeaMetadata": {
      "floorPrice": 18.42,
      "collectionName": "Bored Ape Chemistry Club",
      "safelistRequestStatus": "verified",
      "imageUrl": "https://i.seadn.io/gae/Mf4vImKbzrJUcj7f7RZNOl9iZSEEJgkvpiUp9ugXc9dcpxFe6fvVgxYcRmTI1PnvfL_X1bD3mH4e66j6aJhqLEYm0vvpC8Jy8XJNZOI?w=500&auto=format",
      "description": "Bored Ape Chemistry Club consists of 10,000 Mutant Serums, to be airdropped to all Bored Apes. Handle with care. Instructions to follow at 6pm ET 8/28/21.",
      "externalUrl": null,
      "twitterUsername": null,
      "discordUrl": null,
      "lastIngestedAt": "2023-03-20T06:04:13.000Z"
    }
  },
  {
    "address": "0x43ebbeda1AB50de58E2adBC071Ab78D27864B5e4",
    "name": "AIBoredApe",
    "symbol": "AIBAPE",
    "totalSupply": "11000",
    "tokenType": "ERC721",
    "contractDeployer": "0x1e47C8983176410f55852fE6e7aEF0f0D0baFCBf",
    "deployedBlockNumber": 14843698,
    "openSeaMetadata": {
      "floorPrice": 0.021,
      "collectionName": "AIPES NFT",
      "safelistRequestStatus": "verified",
      "imageUrl": "https://i.seadn.io/gcs/files/219eccd44085d56b9a9c822b4eae3156.jpg?w=500&auto=format",
      "description": "AIPES is the culture shift bridging AI and the Blockchain. A strong and sustainable brand built through unique mechanism to strengthen the AIPES collection. AI Artworks inspired by BAYC & MAYC. Let the art do the speaking. Join the biggest AI NFT community. WE are waiting.",
      "externalUrl": "https://twitter.com/AIPESnft_",
      "twitterUsername": "AIPESnft_",
      "discordUrl": "https://discord.gg/aipesnft",
      "lastIngestedAt": "2023-03-26T05:20:57.000Z"
    }
  },
  {
    "address": "0x1Eb7382976077f92cf25c27CC3b900a274FD0012",
    "name": "Bored Ape Comic",
    "symbol": "BAC",
    "totalSupply": "9999",
    "tokenType": "ERC721",
    "contractDeployer": "0x1284552a1f9B75f9a119cD9cfcCb1eAB208537B6",
    "deployedBlockNumber": 12864518,
    "openSeaMetadata": {
      "floorPrice": 0.004,
      "collectionName": "Bored Ape Comic",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gae/S7Z1XXStTUpCQkla-tmXLv8jwJPlWLMeUL_FtjCWS5Vjwl5C7xaUb0K3HoMmnnBulFpsjXFSjtK8YXURMtUYY3e6hJV27lVatlpC3g?w=500&auto=format",
      "description": "Bored Ape Comic #2 is out now.  Issues consists of 10,000 NFTs & features a cast of Bored Apes. Visit https://boredapecomic.com for more details.",
      "externalUrl": "https://boredapecomic.com/",
      "twitterUsername": "boredApeCOMIC",
      "discordUrl": "https://discord.gg/A3B7unTWxG",
      "lastIngestedAt": "2023-03-20T02:39:57.000Z"
    }
  },
  {
    "address": "0x532De79caB5348d07c25511698688C2D9805B929",
    "name": "boredassgoblins",
    "symbol": "BAG",
    "totalSupply": "10018",
    "tokenType": "ERC721",
    "contractDeployer": "0x0C10c45c64d69FFc2067b2545Eb99976785687A0",
    "deployedBlockNumber": 14907631,
    "openSeaMetadata": {
      "floorPrice": 0.0009,
      "collectionName": "boredassgoblins",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gae/_aGEv4qZuGOsSyiaOWsg8suTiSdbRYIIvcBWxtx0PMc0PejgbfxMosmoH_2tpxm_bs_oIb8dTpIT9sr0-yv599HF4KJfdzA7PSVwuQ?w=500&auto=format",
      "description": "gob bhao GU gu guh bored ghub ghu bAAAAAAAAA bhrod guh huooob",
      "externalUrl": "https://boredassgoblins.wtf/",
      "twitterUsername": "boredassgoblins",
      "discordUrl": null,
      "lastIngestedAt": "2023-04-28T21:55:02.000Z"
    }
  },
  {
    "address": "0x5F1cbe84D44E292fE3EaE51b87F34bbdc8f04fc8",
    "name": "Bored Bits Yacht Club",
    "symbol": "BBYC",
    "totalSupply": "10000",
    "tokenType": "ERC721",
    "contractDeployer": "0xefFFc114d67D1758F2D49C8C589FE96C4Ebc6912",
    "deployedBlockNumber": 15020235,
    "openSeaMetadata": {
      "floorPrice": 0.003,
      "collectionName": "BBYC Bored Bits Yacht Club",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gcs/files/46238735831a3e1a64a7cbd9f3b07fa7.png?w=500&auto=format",
      "description": "???? APES STRONG ????\r\n\r\n10.000 BAYC TURNED IN PIXEL ART.",
      "externalUrl": "https://www.boredbitsyachtclub.com/",
      "twitterUsername": "BoredBitsNFT",
      "discordUrl": null,
      "lastIngestedAt": "2023-03-17T19:24:04.000Z"
    }
  },
  {
    "address": "0x65784d6F23DE30A17122E96c0F0986C378ed6947",
    "name": "Bored Ape Yoga Club",
    "symbol": "BAYC",
    "totalSupply": null,
    "tokenType": "ERC721",
    "contractDeployer": "0x5bDdef8ad4599A0ec9E4b0f2f940eDbca61a1bdc",
    "deployedBlockNumber": 15423809,
    "openSeaMetadata": {
      "floorPrice": 0.0069,
      "collectionName": "Bored Ape Yoga Club",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gcs/files/dfaa6b5e403076849c43a2a8784697ca.png?w=500&auto=format",
      "description": "Bored Ape Yoga Club is a 10,000-piece NFT collection on the Ethereum blockchain that began as parody in the form of five memes drawn by the artist, first of BAYC #2613 and then of the Yuga Labs founders’ BAYCs assuming the now infamous ape yoga position.\r\n\r\nAs the images quickly spread throughout the crypto community on Twitter, demand for a complete 10k NFT collection of bored apes practicing throat yoga grew organically to a point that the artist was compelled to capture this sentiment permanently on-chain in full parity with the Bored Ape Yacht Club NFTs.",
      "externalUrl": "http://boredapeyogaclub.com",
      "twitterUsername": "enjoyoor",
      "discordUrl": "https://discord.gg/threeforall",
      "lastIngestedAt": "2023-03-21T02:48:05.000Z"
    }
  },
  {
    "address": "0x8770792963e0486368FF6e5713ed1f357335CBf8",
    "name": "Bored Oddities",
    "symbol": "BRDODD",
    "totalSupply": "10000",
    "tokenType": "ERC721",
    "contractDeployer": "0x916E48755E4b8f548D577Aa6a82FC958d0B99821",
    "deployedBlockNumber": 15145202,
    "openSeaMetadata": {
      "floorPrice": 0.00115,
      "collectionName": "Bored Oddities",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gcs/files/569fa5fbb1e674c9c2be544097b5e450.gif?w=500&auto=format",
      "description": "Something odd emerged from the Swamp, raising the curiosity of an Ape living close by. He took them home, only to see them run away over night. Since then, they’ve grown eyes, mouth, arms and started wearing clothes. What the hell are they? What do they want? Ape can’t contain his curiosity and organizes an expedition to capture all 10.000 of them.",
      "externalUrl": "https://www.boredoddities.xyz/",
      "twitterUsername": "boredoddities",
      "discordUrl": null,
      "lastIngestedAt": "2023-03-20T06:25:47.000Z"
    }
  },
  {
    "address": "0x8c4cB0c471ce9192d33b2929d186ADFF4CA1dcF8",
    "name": "Bored.Ai MemberChip",
    "symbol": "MemberChip",
    "totalSupply": "9317",
    "tokenType": "ERC721",
    "contractDeployer": "0x90E891Dc7B72a06E0596f444308873cA4267DC47",
    "deployedBlockNumber": 14351484,
    "openSeaMetadata": {
      "floorPrice": 0.007,
      "collectionName": "Bored.Ai MemberChip",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gae/2NaECQ6t2NxgNX2LFAN6l8ELPGYUQ14nCgc-8fIzzZLkThzGoHsT-vO32YhxgujlF0ZJxd9helW1hr77y4rNHow6B6rT8GzT5riDtQ?w=500&auto=format",
      "description": "The Bored.Ai Collective is dedicated to giving its members creative superpowers, beginning with a collection of 10,000 MemberChips - NFTs which grant access to cutting-edge artificial intelligence (Ai). Your MemberChip NFT doubles as your ticket to the Bored.Ai Collective, and gets you exclusive access to members-only spaces and perks, and NFT drops - the first of which is the debut [Text2Art collection](https://opensea.io/collection/bored-ai-text2art) | Visit our [website](https://bored.ai) for more information | [Bored.Ai Disk @ OpenSea](https://opensea.io/collection/bored-ai-disk)",
      "externalUrl": "https://bored.ai",
      "twitterUsername": null,
      "discordUrl": null,
      "lastIngestedAt": "2023-03-20T12:37:08.000Z"
    }
  },
  {
    "address": "0xAAf30a4Dbf45ae1435634b8407DDF27DaE947C13",
    "name": "BoredPepeYC",
    "symbol": "BPYC",
    "totalSupply": "10000",
    "tokenType": "ERC721",
    "contractDeployer": "0xed383b89b40908A366A76C84d46F09bfFb8C639C",
    "deployedBlockNumber": 15679859,
    "openSeaMetadata": {
      "floorPrice": 0.001,
      "collectionName": "BoredPepeYC",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gcs/files/bcde851a159ba45d9a2fb2a8065c6d20.gif?w=500&auto=format",
      "description": "",
      "externalUrl": "https://boredpepeyacht.club/",
      "twitterUsername": "BoredPepeYC_NFT",
      "discordUrl": "https://discord.gg/BcwQEPBKQR",
      "lastIngestedAt": "2023-03-20T23:35:58.000Z"
    }
  },
  {
    "address": "0xc06Eb1bf19905653CcEF41506B5Cb93951cC58Ba",
    "name": "Bored.Ai Disk",
    "symbol": "Disk",
    "totalSupply": null,
    "tokenType": "ERC1155",
    "contractDeployer": "0x90E891Dc7B72a06E0596f444308873cA4267DC47",
    "deployedBlockNumber": 14351488,
    "openSeaMetadata": {
      "floorPrice": 0.01,
      "collectionName": "Bored.Ai Disk",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gae/K0Jy3zEWxkIIlOMxbAwdtEyiW1xuXwzEzubPrBjBRtEfxc_00vbEfKPx3HBlx96wlhDqN6H41debJkrLHjY-BpZxK6OKMyRqnPtQ?w=500&auto=format",
      "description": "The Text2Art Floppy Disk Collection is the first drop for Bored.Ai Collective members - a collection of 10,000 NFTs which allow you to easily mint Ai-generated art created from your own words - machine drawn by artistic superpowers | Visit our [website](https://bored.ai) for more information | [Bored.Ai MemberChips @ OpenSea](https://opensea.io/collection/bored-ai-memberchip) | [Text2Art collection @ OpenSea](https://opensea.io/collection/bored-ai-text2art)",
      "externalUrl": "https://bored.ai",
      "twitterUsername": null,
      "discordUrl": null,
      "lastIngestedAt": "2023-03-21T05:17:26.000Z"
    }
  },
  {
    "address": "0xD16bdCCAe06DFD701a59103446A17e22e9ca0eF0",
    "name": "Basic Bored Ape Club",
    "symbol": "BBAC",
    "totalSupply": "10000",
    "tokenType": "ERC721",
    "contractDeployer": "0x7114d6f07B4d06FD36027c51C9b5095086F4d524",
    "deployedBlockNumber": 13821429,
    "openSeaMetadata": {
      "floorPrice": 0.004,
      "collectionName": "Basic Bored Ape Club",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gae/8ZggCNMQiAoVbPKc46to1Q0eTKwfiQCsAUUczltGLmBX-O33-_ke_lWRbL6o3RqfCbq1g1Yk-3TR_KtI_4W5Af_RKwD1Kg_lCLeC?w=500&auto=format",
      "description": "Basic Bored Ape Club / BBAC\n\nNFT collection inspired by an existing and truly admired collection,\nbut completely independent and unaffiliated.",
      "externalUrl": null,
      "twitterUsername": "BasicBoredApe",
      "discordUrl": "https://discord.gg/NQuAZvvDwz",
      "lastIngestedAt": "2023-03-21T11:10:40.000Z"
    }
  },
  {
    "address": "0xe3b5DA60eE5F7B4b6b1ed418C3f09Ded9CA2F95C",
    "name": "Bored Ape Seeking Yacht Club Issue #0",
    "symbol": "BASYC-0",
    "totalSupply": "5636",
    "tokenType": "ERC721",
    "contractDeployer": "0x1DDd45db051C56aF82Cd926577D9B39ca21aC167",
    "deployedBlockNumber": 13023356,
    "openSeaMetadata": {
      "floorPrice": 0.01,
      "collectionName": "Bored Ape Seeks Yacht Club #0",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gae/jo2dgEbi-mgUuJyVvsEHr5dSGf8LaBcjLWuHWoAxeZ0KGAvMrYToT1-W6CBkltBfZN8pdfSQ1VzHhbcr_dFFbjcBWRCyVyqSKqqJqg?w=500&auto=format",
      "description": "The OG Collection for the Origin Story of American Ape (BAYC #5636).  This series documents the journey of the American Ape as he searches for the Bored Ape Yacht Club. Accept no substitutes, but the series continues in a new contract [HERE] (https://opensea.io/collection/american-ape-digital-comics).\n\nThis ERC-721 token will be required to claim a physical graphic novel when the series goes to print.  Holders of 20 or more will occasionally have the ability to burn them for a Custom Cover, when the waitlist opens in the Myth Division Discord.",
      "externalUrl": "http://boredapeseeksyachtclub.com",
      "twitterUsername": "mythdivision",
      "discordUrl": "https://discord.gg/hNG2RStGK9",
      "lastIngestedAt": "2023-03-21T20:19:41.000Z"
    }
  },
  {
    "address": "0x5d95c4C73E152727750dF27ff7DA1C7169430dd6",
    "name": "Bored Gorilla Yacht Club",
    "symbol": "BGYC",
    "totalSupply": "10000",
    "tokenType": "ERC721",
    "contractDeployer": "0xE421dFaD61ab530948821D052D405c007E051862",
    "deployedBlockNumber": 15491313,
    "openSeaMetadata": {
      "floorPrice": 0.009,
      "collectionName": "BGYC",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gcs/files/1c6d3c3c829315d38c2b2068a52f5d02.jpg?w=500&auto=format",
      "description": "10,000 Bored Gorillas Roaming around the blockchain jungle hoping to find out how they ended up on this unknown island.\n\n2.5% of the total creator fee goes to a multisign community wallet driven by the BGYC community itself. The community is on a daily basis creating its future together with the backend assist of the projects founders.",
      "externalUrl": "https://www.bgyc.art/",
      "twitterUsername": "BGYC_",
      "discordUrl": "https://discord.gg/NTnH7446Rm",
      "lastIngestedAt": "2023-03-17T14:03:12.000Z"
    }
  },
  {
    "address": "0x9372b371196751dd2F603729Ae8D8014BbeB07f6",
    "name": "Bored Bunny",
    "symbol": "BUNNY",
    "totalSupply": "4999",
    "tokenType": "ERC721",
    "contractDeployer": "0x0e04Ba718d3C7AC4d7c8fA357ab73ABdD45d89dC",
    "deployedBlockNumber": 13940018,
    "openSeaMetadata": {
      "floorPrice": null,
      "collectionName": "NFT Bored Bunny",
      "safelistRequestStatus": "requested",
      "imageUrl": "https://i.seadn.io/gae/dpHCrlverfVuJMixZvOqKlOznhnAc9qMC7ewgeLvSv4deBwXizck72INJFLdzjipaNLD1j8exBiwFYcTWkf04B2nSswY5EFwEtZSh8s?w=500&auto=format",
      "description": "Bored Bunny is a collection of 4999 unique 3D well-designed Bunnies - Sold out in 17 minutes.\r\nFloyd Mayweather, DJ Khaled, David Dobrik, Umar Kamani, Chantel Jeffries and many more celebrities have already joined the project.\r\n\r\nEvery Bored Bunny holder will receive a Bored Bad Bunny (our next collection) for free",
      "externalUrl": "http://www.boredbunny.io",
      "twitterUsername": "BoredBunnyNFT",
      "discordUrl": "https://discord.gg/boredbunny",
      "lastIngestedAt": "2023-03-20T15:22:36.000Z"
    }
  },
  {
    "address": "0x96F98c60C04Ba6fe47B3315e3689b270B3952e26",
    "name": "Bored Bad Bunny",
    "symbol": "BBB",
    "totalSupply": "10631",
    "tokenType": "ERC721",
    "contractDeployer": "0x0e04Ba718d3C7AC4d7c8fA357ab73ABdD45d89dC",
    "deployedBlockNumber": 14043414,
    "openSeaMetadata": {
      "floorPrice": null,
      "collectionName": "NFT Bored Bad Bunny",
      "safelistRequestStatus": "requested",
      "imageUrl": "https://i.seadn.io/gae/CSgca7zT717Pe_YvldERn6tPiwxqIBGVCJU4FeyObXrQZ_oigug1KoyEsyMpXzzpt3N6ZfKs-UK-QDULd8qNtHwLRp2p9PRk3GBh98w?w=500&auto=format",
      "description": "After Sold Out in 17 Minutes Bored Bunny is back with a new collection.\r\nMeet Bored Bad Bunny a collection of 10,631 unique 3D well-designed Bad Bunnies - Floyd Mayweather, DJ Khaled, Jake Paul, David Dobrik, French Montana, Umar Kamani, Chantel Jeffries and many more celebrities have already joined the project.",
      "externalUrl": "http://bored-bad-bunny.io",
      "twitterUsername": null,
      "discordUrl": "https://discord.gg/boredbunny",
      "lastIngestedAt": "2023-03-20T18:21:34.000Z"
    }
  },
  {
    "address": "0xc078d7461c712308DFF400CD0e47E6a6955bA9fb",
    "name": "BAWC",
    "symbol": "BAWC",
    "totalSupply": "10000",
    "tokenType": "ERC721",
    "contractDeployer": "0x834c0A7EDd184e30A467Dc2E35Cb6c4Adcd4b0FB",
    "deployedBlockNumber": 15045203,
    "openSeaMetadata": {
      "floorPrice": 0.001,
      "collectionName": "Bored Ape Watch Club - BAWC",
      "safelistRequestStatus": "approved",
      "imageUrl": "https://i.seadn.io/gcs/files/d8282a1490e4e046be1f7dbe5cc2d3f5.gif?w=500&auto=format",
      "description": "10'000 unique NFT watches inspired by every trait and rarity of the most famous NFT collection to date\nNO DISCORD NO ROADMAP NO WASTE OF TIME\nNot affiliated with Yuga Labs.\nFrom the same creators of https://twitter.com/DwissWatch",
      "externalUrl": null,
      "twitterUsername": "boredapewatch",
      "discordUrl": "https://discord.gg/yGgcVJ8jBP",
      "lastIngestedAt": "2023-03-21T05:17:37.000Z"
    }
  }
]

console.log(contracts[0].openSeaMetadata.collectionName)

  return (
    <div
      className={`${styles.padding} z-0 relative app black-gradient flex justify-start flex-col items-center`}
      data-theme={currentTheme}
    >
      <div className="xl:w-[1024px] lg:w-[768px] pt-5 w-[340px] min-h-screen main-app">
        <Header data={contracts} placeholder="Search"/>
        <div>{contracts[0].openSeaMetadata.collectionName}</div>
        <Profile
          onEditModal={handleEditModalOpen}
          onAddmodal={handleAddCardOpen}
          name={"Alitatuma"}
          desc={"Indain Model"}
          photo={profileimage}
        />
        <Main onCardClick={handleCardModalOpen} cards={card}/>
      </div>
      <StarsCanvas />
      <ToggleSwitch handleToggle={switchTheme} />
      {isEditModalOpen && <EditProfileModal onCloseModal={handleModalClose} />}
      {isCardAddModalOpen && <CardAddModal onCloseModal={handleModalClose} onAddCard={handleAddCardSubmit} isLoading={isLoading}/>}
      {isCardModalOpen && <CardModal closeModal={handleModalClose} />}
    </div>
  );
};

export default App;
