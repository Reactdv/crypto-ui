import tw from "twrnc"

import { Dimensions } from "react-native"

const HEIGHT = Dimensions.get("screen").height
const WIDTH = Dimensions.get("screen").width

export const STYLES = 
  
  {
    primaryBg:"blue",
    lightness: "600",
    primaryPadding:"2.5",
    TITLE: tw`text-lg font-medium`,
    SUBTITLE: tw`text-sm font-light text-stone-400`,
    ScreenWidth: WIDTH,
    ScreenHeight: HEIGHT,
  }
  
  
  