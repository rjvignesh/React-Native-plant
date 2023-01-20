import { img1, img2, img3, img4, img5, img6, profile1, profile2, profile3 } from "./Images";

export const SLIDEDATA = [
    {
        id:1,
        imageSrc: img1,
        name:"plant1",
        favorite: true
    },
    {
        id:2,
        imageSrc: img2,
        name:"plant2",
        favorite: false
    },    {
        id:3,
        imageSrc: img3,
        name:"plant3",
        favorite: true
    },    {
        id:4,
        imageSrc: img4,
        name:"plant4",
        favorite: false
    },    {
        id:5,
        imageSrc: img5,
        name:"plant5",
        favorite: false
    }
]

export const FRIENDLIST = [
{
  id:1,
  imgSrc:profile1  
},
  {
    id:2,
    imgSrc:profile2
  },
  {
    id:3,
    imgSrc:profile3  
  }
]

export const PROGRESSLIST = [
  {
    id:1,
    icon: "archive",
    progress: "20%"
  },
  {
    id:2,
    icon: "cart",
    progress: "50%"
  },
  {
    id:3,
    icon: "play",
    progress: "80%"
  },
  {
    id:4,
    icon: "trash",
    progress: "21%"
  },
  {
    id:5,
    icon: "tag",
    progress: "40%"
  }    
]

export const WEATHERDATA = [
  {
  id:1,
  icon:"sunny-outline",
  name:"Sunlight",
  detail:"15 C"
  },
  {
    id:2,
    icon:"water-outline",
    name:"Water",
    detail:"250 ML Daily"
    },
    {
      id:3,
      icon:"thermometer-outline",
      name:"Room Temp",
      detail:"25 C"
      },
      {
        id:4,
        icon:"earth-outline",
        name:"Soil",
        detail:"3 Kg"
        },
        {
          id:5,
          icon:"stop-outline",
          name:"Fertilizer",
          detail:"150 Mg"
          }
]