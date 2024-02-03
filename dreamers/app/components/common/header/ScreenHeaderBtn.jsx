import React from 'react'
import { TouchableOpacity, Image} from 'react-native'
import { COLORS, icons, images, SIZES } from '../../../constants';

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style = {styles.btnContainer} onPress = {handlePress}>
      <Image
        source = {iconUrl}
        resizeMode = "cover"
        tintColor= {COLORS.gray}
        style = {styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn