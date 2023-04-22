import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'
import { Asset } from 'expo-asset'
import { images } from '../../../../constants'

// const placeholderImg = Asset.fromModule(require('../../../../assets/favicon.png'));

const PopularJobCard = ({ item, selectedJobs, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJobs, item)}
      onPress={() => { handleCardPress(item) }}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJobs, item)}>
        <Image
          source={{
            // uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            uri: checkImageURL(item.employer_logo) ?
              'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg' :
              item.employer_logo
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View
        style={styles.infoContainer}
      >
        <Text
          style={styles.jobName(selectedJobs, item)}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location}>
          {item?.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard