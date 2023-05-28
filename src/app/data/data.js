import { BiSupport, BiNews, BiCog, BiHeart } from 'react-icons/bi';

import { FaFootballBall, FaList } from 'react-icons/fa';
import { GiBasketballBall, GiBoxingGlove, GiSoccerBall } from 'react-icons/gi';
import { GiVolleyballBall } from 'react-icons/gi';
import { IoIosBaseball } from 'react-icons/io';
import { IoTennisballOutline } from 'react-icons/io5';

import {  FaBars } from 'react-icons/fa';
import {HiOutlineTrophy} from 'react-icons/hi2'

export const menuItems = [
  { label: 'Leagues', icon: <HiOutlineTrophy />, link: '/leagues' },
  { label: 'News', icon: <BiNews /> , link: '/news'},
  { label: 'Favourites', icon: <BiHeart /> , link: '/favorites'},
  { label: 'Settings', icon: <BiCog />, link: '/profile'  },
];

export const sportsIcons = [
  { name: 'Football', icon: <GiSoccerBall /> },
  { name: 'Basketball', icon: <GiBasketballBall /> },
  { name: 'NFL', icon: <FaFootballBall /> },
  { name: 'Volleyball', icon: <GiVolleyballBall /> },
  { name: 'Baseball', icon: <IoIosBaseball /> }
];

export const Icons = [
    // { name: "scores", icon: GiSoccerField },
    { name: "news", icon: BiNews, link: '/news'  },
    { name: "favorite", icon: BiHeart, link: '/favorites'  },
    { name: "support", icon: BiSupport, link: '/'  },
    { name: "settings", icon: BiCog, link: '/profile'  },

  ];

  export const sportsData = [
    {
    icon: <GiSoccerBall />,
      sport: "Soccer",
      leagues: [
        { name: "Premier League", abbreviation: "EPL", slug: 'soccer/eng.1', label: "English Premier League" },
        { name: "La Liga", abbreviation: "LL" , slug: 'soccer/esp.1', label: 'La Liga'},
        { name: "Ligue 1", abbreviation: "BL", slug: 'soccer/fra.1', label: 'Ligue 1' },
        { name: "Serie A", abbreviation: "sL", slug: 'soccer/ita.1', label: 'Italian Serie A' },
        { name: "Bundesliga", abbreviation: "BL", slug: 'soccer/ger.1', label: 'Bundesliga' },
        { name: "MLS", abbreviation: "msl", slug: 'soccer/usa.1', label: 'Major League Soccer' },
      ]
    },
    {
    icon: <GiBasketballBall />,
      sport: "Basketball",
      leagues: [
        { name: "NBA", abbreviation: "NBA", slug: 'basketball/nba',  label: 'National Basketball Association' },
        { name: "WNBA", abbreviation: "EL", slug: 'basketball/wnba', label:  'Women National Basketball Association' },
      ]
    },
    {
    icon: <FaFootballBall />,
      sport: "Football",
      leagues: [
        { name: "NFL", abbreviation: "NFL", slug: 'football/nfl' , label: 'National Football League',},
      ]
    },
    {
      icon: <IoIosBaseball />,
        sport: "Baseball",
        leagues: [
          { name: "MLB", abbreviation: "MLb", slug: 'baseball/mlb', label: 'Major League Baseball' },
        ]
      },
  ];
  
  export const sportsSelect = [
    { value: 'eng.1', label: 'Premier League', league: 'soccer' },
    { value: 'mlb', label: 'Major League Baseball', league: 'baseball' },
    { value: 'nba', label: 'National Basketball Association', league: 'basketball' },
    { value: 'nfl', label: 'National Football League', league: 'football' },
    { value: 'nhl', label: 'National Hockey League', league: 'hockey', },
    { value: 'usa.1', label: 'Major Soccer League', league: 'soccer' },
    { value: 'atp', label: 'ATP - Tennis', league: 'tennis' },
   ]
  
   export const tennisSelect =[
    {
      icon: <IoTennisballOutline />,
      sport: "Tennis",
      leagues: [
      {  name: "ATP", abbreviation: "atp", slug: 'tennis/atp', label: ' Association of Tennis Professionals '} ,
      {  name: "WTA", abbreviation: "wta", slug: 'tennis/wta', label: 'Women Tennis Association'} ,
      ]
    }
   ]

   export const ufcSelect =[
    {
      icon: <GiBoxingGlove />,
      sport: "MMA",
      leagues: [
      {  name: "UFC", abbreviation: "ufc", slug: '/ufc', label: 'Ultimate Fight Championship '} ,
      ]
    }
   ]